import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    title: 'Treasurer & Designer',
    company: 'IEEE Communications Society & GRSS',
    location: 'Nagpur, India',
    period: '2025 - Present',
    description: [
      'Managing finances and designing promotional materials for society events and activities.',
      'Coordinating with team members to ensure smooth operations and effective communication.',
      'Planned and managed budgets for technical events in 5G, IoT, networking, cybersecurity, and signal processing, ensuring transparent fund utilization and accurate records.',
      'Collaborated with faculty and student leaders for approvals and reporting, while supporting initiatives that foster innovation, research, and student engagement in emerging communication technologies.'
    ],
    achievements: [
      'Successfully supported multiple technical workshops and national-level events.',
      'Strengthened financial discipline and operational efficiency within the student chapter.',
      'Played a leadership role in expanding student participation in IEEE activities.',
    ],
    color: 'from-cyan-500 to-blue-600',
  },
  {
    title: 'Artificial Intelligence Intern',
    company: 'Codec Technologies India',
    location: 'Hybrid (mumbai, India)',
    period: 'Dec 2024 – Feb 2025',
    description: 'Worked on core and applied AI concepts, contributing to model development, experimentation, and evaluation. Gained hands-on experience in data preprocessing, AI workflows, and collaborative development through code reviews and team projects',
    achievements: [
      'Strengthened understanding of real-world AI development practices.',
      'Improved analytical thinking and problem-solving skills through applied tasks.',
      'Built a strong base for future AI/ML projects and research work.',
    ],
    color: 'from-blue-500 to-purple-600',
  },
  {
    title: 'Content Writer Intern',
    company: 'Riya’s Blogs',
    location: 'Nagpur, India',
    period: 'Aug 2025 – Oct 2025',
    description: 'Researched and wrote articles on AI, education, social awareness, and domestic issues. Applied SEO strategies to enhance reach and engagement, publishing impactful, reader-focused content on Riya’s Blogs and Medium.',
    achievements: [
      'Published multiple articles across two and more platforms',
      'Strengthened research, storytelling, and SEO skills',
      'Learned to communicate complex topics in a clear and engaging manner.',
    ],
    color: 'from-purple-500 to-pink-600',
  },
   {
    title: 'Event & sports Coordinator',
    company: 'GH Raisoni College of Engineering & Management,Nagpur (GHRCEMN)',
    location: 'Nagpur, India',
    period: 'Jul 2023 – Present',
    description: 'Coordinated technical and non-technical activities for major college events, contributing to the International AI Summit (Season 3 – 2024). Supported event planning, logistics, promotions, and on-ground execution.& Served as Chess Sports Coordinator during Antaragni 2025, managing match scheduling, participant coordination, and smooth execution of events. Successfully organized chess competitions, demonstrating strong leadership and event management skills.',
    achievements: [
      'Successfully coordinated an international-level AI summit.',
      'Gained hands-on experience in teamwork, leadership, and event operations.',
      'Enhanced communication and organizational skills.',
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