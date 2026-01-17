import { motion } from 'motion/react';

const skillCategories = [
  {
    title: 'Frontend',
    color: 'from-cyan-500 to-blue-600',
    skills: [
      { name: 'React', level: 80 },
      { name: 'TypeScript', level: 85  },
      { name: 'Next.js', level: 82 },
      { name: 'Tailwind CSS', level: 75 },
      { name: 'HTML/CSS', level: 95 },
    ],
  },
  {
    title: 'Backend',
    color: 'from-blue-500 to-purple-600',
    skills: [
      { name: 'Node.js', level: 88 },
      { name: 'Python', level: 82 },
      { name: 'PostgreSQL', level: 70 },
      { name: 'MongoDB', level: 71 },
      { name: 'REST APIs', level: 60 },
    ],
  },
  {
    title: 'Tools & Others',
    color: 'from-purple-500 to-pink-600',
    skills: [
      { name: 'Git', level: 95 },
      { name: 'Docker', level: 75 },
      { name: 'AWS', level: 72 },
      { name: 'Figma', level: 90 },
      { name: 'CI/CD', level: 60 },
    ],
  },
];

const otherSkills = [
  'JavaScript', 'Responsive Design', 'CRUD Operations', 'WebSocket', 'Testing',
  'Webpack', 'Git Workflow', 'Performance Optimization', 'REST API Integration',
  'Accessibility', 'Authentication (JWT – Basic)', 'UI/UX Design ,FIGMA', 'Data Visualization',
];

export function Skills() {
  return (
    <div className="min-h-screen px-8 py-24 ml-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <h2 className="text-5xl mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-white/60">Technologies and tools I work with</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.2 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 hover:bg-white/10 transition-all"
            >
              <div className={`inline-flex px-4 py-2 rounded-xl bg-gradient-to-r ${category.color} mb-6`}>
                <h3 className="text-xl">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-white/90">{skill.name}</span>
                      <span className="text-white/60">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${category.color}`}
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ delay: categoryIndex * 0.2 + index * 0.1, duration: 1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8"
        >
          <h3 className="text-2xl mb-6">Additional Skills</h3>
          <div className="flex flex-wrap gap-3">
            {otherSkills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.05 }}
                className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-lg backdrop-blur-sm hover:from-cyan-500/30 hover:to-blue-500/30 transition-all"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}