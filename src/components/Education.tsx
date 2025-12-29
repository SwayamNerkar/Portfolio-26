import { motion } from 'motion/react';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

const education = [
  {
    degree: 'Master of Computer Science',
    institution: 'University Name',
    location: 'City, Country',
    period: '2016 - 2018',
    description: 'Specialized in Software Engineering and Artificial Intelligence. Thesis on Machine Learning applications.',
    gpa: '3.9/4.0',
    color: 'from-cyan-500 to-blue-600',
  },
  {
    degree: 'Bachelor of Computer Science',
    institution: 'University Name',
    location: 'City, Country',
    period: '2012 - 2016',
    description: 'Focused on web development, databases, and computer networks. Active member of coding club.',
    gpa: '3.7/4.0',
    color: 'from-blue-500 to-purple-600',
  },
];

const certifications = [
  {
    title: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    date: '2023',
    icon: '☁️',
  },
  {
    title: 'Google Cloud Professional Developer',
    issuer: 'Google Cloud',
    date: '2023',
    icon: '🌐',
  },
  {
    title: 'Meta Frontend Developer Professional',
    issuer: 'Meta',
    date: '2022',
    icon: '⚛️',
  },
  {
    title: 'Advanced React & TypeScript',
    issuer: 'Udemy',
    date: '2022',
    icon: '📚',
  },
];

const courses = [
  'Full Stack Web Development',
  'Data Structures & Algorithms',
  'Machine Learning Fundamentals',
  'Cloud Architecture & DevOps',
  'UI/UX Design Principles',
  'Database Management Systems',
];

export function Education() {
  return (
    <div className="min-h-screen px-8 py-24 ml-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <h2 className="text-5xl mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Education & Learning
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-white/60">Academic background and continuous learning</p>
        </motion.div>

        {/* Education */}
        <div className="mb-12 space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:bg-white/10 transition-all"
            >
              <div className="flex items-start gap-6">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${edu.color} flex items-center justify-center flex-shrink-0`}>
                  <GraduationCap className="w-8 h-8" />
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl mb-2">{edu.degree}</h3>
                      <p className="text-lg text-cyan-400">{edu.institution}</p>
                      <p className="text-white/60">{edu.location}</p>
                    </div>
                    <div className="text-right mt-4 md:mt-0">
                      <p className="text-white/60">{edu.period}</p>
                      <p className="text-green-400 mt-1">GPA: {edu.gpa}</p>
                    </div>
                  </div>
                  <p className="text-white/70 leading-relaxed">{edu.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <Award className="w-6 h-6 text-cyan-400" />
            <h3 className="text-3xl">Certifications</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 hover:bg-white/10 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{cert.icon}</div>
                  <div className="flex-1">
                    <h4 className="text-lg mb-1">{cert.title}</h4>
                    <p className="text-white/60 text-sm mb-2">{cert.issuer}</p>
                    <p className="text-cyan-400 text-sm">{cert.date}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Relevant Courses */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="w-6 h-6 text-cyan-400" />
            <h3 className="text-3xl">Relevant Courses</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-3">
            {courses.map((course, index) => (
              <motion.div
                key={course}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + index * 0.05 }}
                className="px-4 py-3 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-lg"
              >
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
                  <span className="text-white/90">{course}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}