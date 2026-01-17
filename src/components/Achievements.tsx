import { motion } from 'motion/react';
import { Trophy, Award, Star, Target, Zap, Medal } from 'lucide-react';

const achievements = [
  {
    title: 'Sayadri ratna puraskar 2025',
    organization: 'Talent katta organization , Pune ,maharashrtra',
    date: '2025',
    description: 'Recognized for outstanding contribution for writing a book on option decoders for Ai algorithms trading stratagy.',
    icon: Trophy,
    color: 'from-yellow-500 to-orange-600',
    gradient: 'from-yellow-500/20 to-orange-600/20',
  },
  {
    title: 'Build 4 change Hackathon Winner',
    organization: 'anjuman collage of engineeering , Sadar , nagpur',
    date: '2025',
    description: '2nd runner up among various teams for developing real-time collaboration tool.',
    icon: Medal,
    color: 'from-green-500 to-emerald-600',
    gradient: 'from-green-500/20 to-emerald-600/20',
  },
 
];

const stats = [
  { label: 'Awards Won', value: '15+', color: 'text-yellow-400' },
  { label: 'Certifications', value: '12', color: 'text-cyan-400' },
  { label: 'Speaking Events', value: '25+', color: 'text-purple-400' },
  { label: 'Publications', value: '8', color: 'text-green-400' },
];

export function Achievements() {
  return (
    <div className="min-h-screen px-8 py-24 ml-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16 text-center"
        >
          <h2 className="text-5xl mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Achievements & Awards
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-white/60">Recognition and milestones throughout my journey</p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 text-center hover:bg-white/10 transition-all"
            >
              <div className={`text-4xl mb-2 ${stat.color}`}>{stat.value}</div>
              <div className="text-white/60">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="group relative"
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 h-full hover:bg-white/10 transition-all overflow-hidden">
                {/* Background Gradient Effect */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${achievement.gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                
                <div className="relative">
                  {/* Icon */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${achievement.color} flex items-center justify-center`}>
                      <achievement.icon className="w-8 h-8" />
                    </div>
                    <span className="text-sm text-white/60 bg-white/5 px-3 py-1 rounded-full">
                      {achievement.date}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl mb-2">{achievement.title}</h3>
                  <p className="text-lg text-cyan-400 mb-3">{achievement.organization}</p>
                  <p className="text-white/70 leading-relaxed">
                    {achievement.description}
                  </p>

                  {/* Decorative Line */}
                  <div className={`mt-6 h-1 w-16 bg-gradient-to-r ${achievement.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Recognition */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-12 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8"
        >
          <h3 className="text-2xl mb-6 flex items-center gap-3">
            <Star className="w-6 h-6 text-yellow-400" />
            Additional Recognition
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              'Featured in Top 100 Developers 2023',
              'Speaker at 5 International Conferences',
              'Published 8 Technical Articles',
              'Mentor to 30+ Junior Developers',
              'Contributed to 100+ Open Source Projects',
              'Led 3 Successful Product Launches',
            ].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.1 + index * 0.05 }}
                className="flex items-center gap-3 p-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-lg hover:from-cyan-500/20 hover:to-blue-500/20 transition-all"
              >
                <div className="w-2 h-2 rounded-full bg-cyan-400 flex-shrink-0"></div>
                <span className="text-white/90">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}