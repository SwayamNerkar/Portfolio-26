import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    title: 'Senior Full Stack Developer',
    company: 'Tech Company Inc.',
    location: 'Remote',
    period: '2022 - Present',
    description: 'Leading development of enterprise-scale applications using modern frameworks. Architecting scalable solutions and mentoring junior developers.',
    achievements: [
      'Improved application performance by 40%',
      'Led team of 5 developers',
      'Implemented CI/CD pipeline reducing deployment time by 60%',
    ],
    color: 'from-cyan-500 to-blue-600',
  },
  {
    title: 'Full Stack Developer',
    company: 'Digital Solutions Ltd.',
    location: 'City, Country',
    period: '2020 - 2022',
    description: 'Developed and maintained multiple client-facing web applications. Collaborated with design teams to create seamless user experiences.',
    achievements: [
      'Built 15+ client projects',
      'Reduced bug reports by 35%',
      'Introduced React and TypeScript to the tech stack',
    ],
    color: 'from-blue-500 to-purple-600',
  },
  {
    title: 'Frontend Developer',
    company: 'Creative Agency',
    location: 'City, Country',
    period: '2018 - 2020',
    description: 'Created responsive and interactive web interfaces for various clients. Worked closely with designers to implement pixel-perfect designs.',
    achievements: [
      'Delivered 20+ responsive websites',
      'Achieved 95+ Lighthouse scores',
      'Introduced modern build tools and workflows',
    ],
    color: 'from-purple-500 to-pink-600',
  },
];

export function Experience() {
  return (
    <div className="min-h-screen px-8 py-24 ml-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <h2 className="text-5xl mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-white/60">My professional journey and achievements</p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:bg-white/10 transition-all">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${exp.color} flex items-center justify-center`}>
                        <Briefcase className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-2xl">{exp.title}</h3>
                        <p className="text-lg text-cyan-400">{exp.company}</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 mb-4 text-white/60">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-white/70 mb-6 leading-relaxed">
                  {exp.description}
                </p>

                <div className="space-y-2">
                  <p className="text-sm text-white/60 mb-3">Key Achievements:</p>
                  {exp.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></div>
                      <p className="text-white/80">{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}