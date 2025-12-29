# Modern Portfolio Website with Neural Network Animation

A stunning personal portfolio website featuring an interactive neural network background animation, smooth page transitions, and a unique vertical navigation system with rolling indicators.

![Portfolio Preview](https://img.shields.io/badge/React-18+-blue.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5+-blue.svg)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-4.0-38bdf8.svg)
![Motion](https://img.shields.io/badge/Motion-React-ff69b4.svg)

## ✨ Features

### 🎨 Interactive Neural Network Background
- 80 interconnected nodes with dynamic connections
- Mouse interaction - nodes repel from cursor
- Color-shifting gradient effects (cyan → blue → purple)
- Data pulse particles traveling along connections
- Smooth physics with realistic motion
- Glowing nodes that scale based on connection count

### 🧭 Vertical Navigation
- Left-side vertical navigation with 3-dot menu toggle
- Rolling color indicator that cycles through pages
- Spring-based animations for smooth open/close
- Staggered menu item animations
- Mini indicator showing current page when closed
- Decorative pulsing dots

### 📄 Multi-Page Portfolio
- **Home** - Hero section with call-to-action buttons
- **About** - Profile card with stats and bio
- **Experience** - Work history with achievements
- **Skills** - Categorized skills with progress bars
- **Projects** - Project showcase with tech stack
- **Education** - Academic background and certifications
- **Achievements** - Awards and recognition
- **Contact** - Contact form and social links

### 🎭 Smooth Animations
- Page transition animations with fade and slide effects
- Staggered element animations on scroll
- Hover effects on interactive elements
- Smooth color transitions and gradients
- Spring physics for natural movement
- Motion blur trail effects

### 📱 Responsive Design
- Mobile-first approach
- Adaptive layouts for all screen sizes
- Touch-friendly interactions
- Optimized for desktop and mobile

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn or pnpm

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Start the development server
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📁 Project Structure

```
portfolio/
├── components/
│   ├── About.tsx              # About section
│   ├── Achievements.tsx       # Achievements & awards
│   ├── Contact.tsx            # Contact form & info
│   ├── Education.tsx          # Education & certifications
│   ├── Experience.tsx         # Work experience
│   ├── Home.tsx               # Hero/landing page
│   ├── Navigation.tsx         # Vertical navigation
│   ├── NeuralBackground.tsx   # Neural network animation
│   ├── Projects.tsx           # Project showcase
│   └── Skills.tsx             # Skills & expertise
├── styles/
│   └── globals.css            # Global styles & Tailwind config
├── App.tsx                    # Main app component
└── README.md                  # This file
```

## 🎨 Customization

### Update Personal Information

1. **Home Page** (`components/Home.tsx`)
   - Update your name
   - Change your title/role
   - Modify the description

2. **About Page** (`components/About.tsx`)
   - Add your location
   - Update experience years
   - Customize stats (projects, clients, etc.)
   - Update profile emoji or add image

3. **Experience** (`components/Experience.tsx`)
   - Add your work history
   - Include achievements
   - Update company names and dates

4. **Skills** (`components/Skills.tsx`)
   - List your technical skills
   - Adjust proficiency levels
   - Add new skill categories

5. **Projects** (`components/Projects.tsx`)
   - Showcase your projects
   - Add project descriptions
   - Include tech stack
   - Link to live demos and repos

6. **Education** (`components/Education.tsx`)
   - Add your degrees
   - Include certifications
   - List relevant courses

7. **Achievements** (`components/Achievements.tsx`)
   - Add awards and recognition
   - Update statistics
   - Include speaking engagements

8. **Contact** (`components/Contact.tsx`)
   - Update email, phone, location
   - Add social media links
   - Connect form to email service

### Color Customization

The portfolio uses a cyan-blue-purple gradient theme. To customize colors:

1. Edit gradient classes in components (e.g., `from-cyan-500 to-blue-600`)
2. Update the neural network hue in `components/NeuralBackground.tsx` (line 49: `let hue = 180`)
3. Modify Tailwind theme in `styles/globals.css`

### Neural Network Settings

Adjust the neural network in `components/NeuralBackground.tsx`:

- **Node count**: Line 30 - `const nodeCount = 80`
- **Connection distance**: Line 68 - `if (distance < 150)`
- **Node speed**: Line 36-37 - `vx` and `vy` values
- **Color shifting speed**: Line 49 - `hue = (hue + 0.2) % 360`
- **Mouse interaction radius**: Line 46 - `radius: 150`

## 🛠️ Tech Stack

- **React** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 4.0** - Styling
- **Motion (Framer Motion)** - Animations
- **Lucide React** - Icons
- **Vite** - Build tool

## 📦 Dependencies

```json
{
  "react": "^18.x",
  "motion": "latest",
  "lucide-react": "latest",
  "typescript": "^5.x"
}
```

## 🎯 Performance

- Canvas-based neural network for smooth 60fps animations
- Optimized re-renders with React best practices
- Lazy loading for better initial load time
- Efficient animation cleanup to prevent memory leaks
- GPU-accelerated CSS transitions

## 🌐 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 💡 Inspiration & Credits

- Neural network animation inspired by modern AI/ML visualizations
- Design system based on modern portfolio trends
- Built with ❤️ using React and Tailwind CSS

## 📧 Contact

Your Name - your.email@example.com

Portfolio: [https://yourwebsite.com](https://yourwebsite.com)

GitHub: [@yourusername](https://github.com/yourusername)

---

⭐️ If you like this project, please give it a star on GitHub!
