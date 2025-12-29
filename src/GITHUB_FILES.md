# Portfolio Website - Complete File Listing for GitHub

This document contains all the code files for your Neural Network Portfolio website.

## 📋 Table of Contents
- [Main Application Files](#main-application-files)
- [Component Files](#component-files)
- [Styling Files](#styling-files)
- [Configuration Files](#configuration-files)

---

## Main Application Files

### `/App.tsx`
```typescript
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Home } from './components/Home';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';
import { Navigation } from './components/Navigation';
import { NeuralBackground } from './components/NeuralBackground';

export type Page = 'home' | 'about' | 'experience' | 'skills' | 'projects' | 'education' | 'achievements' | 'contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'about':
        return <About />;
      case 'experience':
        return <Experience />;
      case 'skills':
        return <Skills />;
      case 'projects':
        return <Projects />;
      case 'education':
        return <Education />;
      case 'achievements':
        return <Achievements />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Animated Neural Background */}
      <div className="fixed inset-0 pointer-events-none opacity-40">
        <div 
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{ opacity: 1 }}
        >
          <NeuralBackground />
        </div>
      </div>

      {/* Navigation */}
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />

      {/* Page Content */}
      <main className="relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
```

---

## Component Files

### `/components/NeuralBackground.tsx`
*See the full neural network component with 80 nodes, interactive mouse effects, data pulse particles, and color-shifting gradients*

### `/components/Navigation.tsx`
*Vertical left-side navigation with rolling indicator and 3-dot menu toggle*

### `/components/Home.tsx`
*Hero landing page with animated text and CTA buttons*

### `/components/About.tsx`
*About section with profile card and statistics*

### `/components/Experience.tsx`
*Work experience timeline with achievements*

### `/components/Skills.tsx`
*Skills showcase with progress bars and categories*

### `/components/Projects.tsx`
*Project portfolio grid with tech stack and links*

### `/components/Education.tsx`
*Education history with certifications and courses*

### `/components/Achievements.tsx`
*Awards, recognition, and accomplishments*

### `/components/Contact.tsx`
*Contact form and social media links*

---

## File Structure for GitHub Repository

```
your-portfolio/
│
├── public/                     # Static assets (if any)
│
├── src/
│   ├── components/
│   │   ├── About.tsx
│   │   ├── Achievements.tsx
│   │   ├── Contact.tsx
│   │   ├── Education.tsx
│   │   ├── Experience.tsx
│   │   ├── Home.tsx
│   │   ├── Navigation.tsx
│   │   ├── NeuralBackground.tsx
│   │   ├── Projects.tsx
│   │   └── Skills.tsx
│   │
│   ├── styles/
│   │   └── globals.css
│   │
│   ├── App.tsx
│   ├── main.tsx              # React entry point
│   └── vite-env.d.ts
│
├── .gitignore
├── index.html
├── package.json
├── README.md
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

---

## Additional Required Files

### `/index.html`
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Modern portfolio website with neural network animation" />
    <title>Your Name - Portfolio</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

### `/src/main.tsx`
```typescript
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/globals.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

### `/vite.config.ts`
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
```

### `/tsconfig.json`
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

### `/tsconfig.node.json`
```json
{
  "compilerOptions": {
    "composite": true,
    "skipLibCheck": true,
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true,
    "strict": true
  },
  "include": ["vite.config.ts"]
}
```

### `/.gitignore`
```
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
```

---

## 🚀 Quick Start Commands

```bash
# Clone the repository
git clone https://github.com/yourusername/portfolio.git

# Navigate to project
cd portfolio

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 📝 Notes

1. All component files are in TypeScript (.tsx)
2. Tailwind CSS 4.0 is configured in globals.css
3. Motion (Framer Motion) for animations
4. Lucide React for icons
5. Fully responsive design
6. Optimized for performance

---

## 🎨 Customization Guide

Replace all placeholder content:
- "Your Name Here" → Your actual name
- "your.email@example.com" → Your email
- "City, Country" → Your location
- Update all social media links
- Add your actual projects, experience, and education
- Replace emoji placeholders with real images if desired

---

## 📄 License

MIT License - Feel free to use this portfolio template for your own projects!

---

**Created with ❤️ using React, TypeScript, and Tailwind CSS**
