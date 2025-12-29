import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with payment integration, inventory management, and real-time analytics.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    image: '🛒',
    color: 'from-cyan-500 to-blue-600',
    gradient: 'from-cyan-500/20 to-blue-600/20',
  },
  {
    title: 'Trading Dashboard',
    description: 'Real-time cryptocurrency trading dashboard with live charts, market analysis, and portfolio tracking.',
    tech: ['React', 'WebSocket', 'Chart.js', 'TailwindCSS'],
    image: '📊',
    color: 'from-green-500 to-emerald-600',
    gradient: 'from-green-500/20 to-emerald-600/20',
  },
  {
    title: 'AI Chat Application',
    description: 'Intelligent chatbot application with natural language processing and context-aware responses.',
    tech: ['Next.js', 'OpenAI API', 'MongoDB', 'TypeScript'],
    image: '🤖',
    color: 'from-purple-500 to-pink-600',
    gradient: 'from-purple-500/20 to-pink-600/20',
  },
  {
    title: 'Task Management System',
    description: 'Collaborative project management tool with real-time updates, team chat, and analytics.',
    tech: ['React', 'Firebase', 'Redux', 'Material-UI'],
    image: '✅',
    color: 'from-blue-500 to-indigo-600',
    gradient: 'from-blue-500/20 to-indigo-600/20',
  },
  {
    title: 'Social Media Analytics',
    description: 'Comprehensive analytics platform for tracking social media performance and engagement metrics.',
    tech: ['Vue.js', 'Python', 'FastAPI', 'D3.js'],
    image: '📱',
    color: 'from-pink-500 to-rose-600',
    gradient: 'from-pink-500/20 to-rose-600/20',
  },
  {
    title: 'Video Streaming Platform',
    description: 'Netflix-like streaming service with adaptive bitrate, user profiles, and content recommendations.',
    tech: ['React', 'AWS', 'GraphQL', 'Redis'],
    image: '🎬',
    color: 'from-red-500 to-orange-600',
    gradient: 'from-red-500/20 to-orange-600/20',
  },
];

export function Projects() {
  return (
    <div className="min-h-screen px-8 py-24 ml-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <h2 className="text-5xl mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-white/60">Showcasing my best work and achievements</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 h-full hover:bg-white/10 transition-all overflow-hidden">
                {/* Project Icon */}
                <div className={`w-full aspect-video rounded-xl bg-gradient-to-br ${project.gradient} border border-white/10 mb-6 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform`}>
                  <span className="text-7xl">{project.image}</span>
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-20 transition-opacity`}></div>
                </div>

                <h3 className="text-2xl mb-3">{project.title}</h3>
                <p className="text-white/60 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white/10 rounded-lg text-sm border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <motion.button
                    className={`flex-1 py-2 rounded-lg bg-gradient-to-r ${project.color} flex items-center justify-center gap-2`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </motion.button>
                  <motion.button
                    className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}