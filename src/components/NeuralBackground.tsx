import { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  connections: number;
}

export function NeuralBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create nodes with better distribution
    const nodeCount = 80;
    const nodes: Node[] = [];
    
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        connections: 0,
      });
    }

    // Mouse interaction
    const mouse = { x: 0, y: 0, radius: 150 };
    
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    
    window.addEventListener('mousemove', handleMouseMove);

    let animationId: number;
    let hue = 180; // Start with cyan

    const animate = () => {
      // Create trail effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update hue for color shift effect
      hue = (hue + 0.2) % 360;

      // Reset connection counts
      nodes.forEach(node => node.connections = 0);

      // Draw connections first (so nodes appear on top)
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          // Draw connection if nodes are close
          if (distance < 150) {
            nodes[i].connections++;
            nodes[j].connections++;
            
            const opacity = (1 - distance / 150) * 0.5;
            
            // Create gradient connection
            const gradient = ctx.createLinearGradient(
              nodes[i].x, nodes[i].y,
              nodes[j].x, nodes[j].y
            );
            gradient.addColorStop(0, `hsla(${hue}, 70%, 60%, ${opacity})`);
            gradient.addColorStop(1, `hsla(${hue + 30}, 70%, 60%, ${opacity})`);
            
            ctx.strokeStyle = gradient;
            ctx.lineWidth = (1 - distance / 150) * 2;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Update and draw nodes
      nodes.forEach((node) => {
        // Move nodes
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off edges with smooth wrapping
        if (node.x < 0 || node.x > canvas.width) {
          node.vx *= -1;
          node.x = Math.max(0, Math.min(canvas.width, node.x));
        }
        if (node.y < 0 || node.y > canvas.height) {
          node.vy *= -1;
          node.y = Math.max(0, Math.min(canvas.height, node.y));
        }

        // Mouse interaction - repel nodes
        const dx = node.x - mouse.x;
        const dy = node.y - mouse.y;
        const distanceToMouse = Math.sqrt(dx * dx + dy * dy);
        
        if (distanceToMouse < mouse.radius) {
          const force = (mouse.radius - distanceToMouse) / mouse.radius;
          node.vx += (dx / distanceToMouse) * force * 0.5;
          node.vy += (dy / distanceToMouse) * force * 0.5;
        }

        // Apply friction
        node.vx *= 0.98;
        node.vy *= 0.98;

        // Keep minimum speed
        const speed = Math.sqrt(node.vx * node.vx + node.vy * node.vy);
        if (speed < 0.3) {
          node.vx += (Math.random() - 0.5) * 0.1;
          node.vy += (Math.random() - 0.5) * 0.1;
        }

        // Draw node with glow effect
        const nodeSize = Math.min(3 + node.connections * 0.5, 8);
        
        // Outer glow
        const glowGradient = ctx.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, nodeSize * 3
        );
        glowGradient.addColorStop(0, `hsla(${hue}, 80%, 70%, 0.6)`);
        glowGradient.addColorStop(0.5, `hsla(${hue}, 80%, 60%, 0.2)`);
        glowGradient.addColorStop(1, `hsla(${hue}, 80%, 50%, 0)`);
        
        ctx.fillStyle = glowGradient;
        ctx.beginPath();
        ctx.arc(node.x, node.y, nodeSize * 3, 0, Math.PI * 2);
        ctx.fill();

        // Inner node
        const nodeGradient = ctx.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, nodeSize
        );
        nodeGradient.addColorStop(0, `hsla(${hue}, 90%, 80%, 1)`);
        nodeGradient.addColorStop(1, `hsla(${hue + 20}, 80%, 60%, 0.8)`);
        
        ctx.fillStyle = nodeGradient;
        ctx.beginPath();
        ctx.arc(node.x, node.y, nodeSize, 0, Math.PI * 2);
        ctx.fill();

        // Highlight on highly connected nodes
        if (node.connections > 3) {
          ctx.strokeStyle = `hsla(${hue}, 100%, 90%, 0.5)`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.arc(node.x, node.y, nodeSize + 2, 0, Math.PI * 2);
          ctx.stroke();
        }
      });

      // Draw data pulse effect - particles moving along connections
      const pulseTime = Date.now() / 1000;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150 && Math.random() < 0.01) {
            const progress = (pulseTime * 2 + i + j) % 1;
            const pulseX = nodes[i].x + (nodes[j].x - nodes[i].x) * progress;
            const pulseY = nodes[i].y + (nodes[j].y - nodes[i].y) * progress;

            const pulseGradient = ctx.createRadialGradient(
              pulseX, pulseY, 0,
              pulseX, pulseY, 4
            );
            pulseGradient.addColorStop(0, `hsla(${hue + 60}, 100%, 80%, 0.8)`);
            pulseGradient.addColorStop(1, `hsla(${hue + 60}, 100%, 70%, 0)`);

            ctx.fillStyle = pulseGradient;
            ctx.beginPath();
            ctx.arc(pulseX, pulseY, 4, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full" />;
}
