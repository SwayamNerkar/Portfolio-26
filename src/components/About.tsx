import { motion } from 'motion/react';

const profileCardClasses = "bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-3xl border border-white/10 p-8 backdrop-blur-sm";
const profileImageClasses = "aspect-square bg-gradient-to-br from-cyan-400/20 to-purple-600/20 rounded-2xl mb-6 flex items-center justify-center border border-white/10";

export function About() {
  return (
    <div className="min-h-screen flex items-center justify-center px-8 py-24 ml-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
            {/* Left: Profile Image/Card */}
            <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            className="relative"
            >
            <div className={profileCardClasses}>
              <div className={profileImageClasses}>
              <img 
                src="/tableme.jpeg"
                alt="Profile"
                className="w-full h-full object-cover rounded-2xl"
              />
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-white/5 rounded-xl border border-white/10">
                  <span className="text-white/60">Name :</span>
                  <span>Swayam Sachin Nerkar</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white/5 rounded-xl border border-white/10">
                  <span className="text-white/60">Location</span>
                  <span>Nagpur, India</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white/5 rounded-xl border border-white/10">
                  <span className="text-white/60">Phone :</span>
                  <span className="text-white-400">7350782684</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/5 rounded-xl border border-white/10">
                  <span className="text-white/60">Mail:</span>
                  <span className="text-white-400">Swayamnerkar16@gmail.com</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: About Content */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-5xl mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                About Me
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full mb-6"></div>
            </div>

            <p className="text-xl text-white/80 leading-relaxed">
              Passionate AI/ML and web developer with hands-on experience in building intelligent applications
              , responsive web solutions, and data-driven systems. 
              I combine technical understanding with analytical thinking and design awareness to create practical, 
              user-focused digital experiences.
            </p>

            <p className="text-lg text-white/80 leading-relaxed">
              My journey in technology began with a strong interest in artificial intelligence and problem solving,
               evolving into work across AI development, 
               front-end engineering, and technology-driven finance.
                I specialize in AI fundamentals, modern web technologies, 
                UI/UX-oriented development, and exploring real-world applications of AI in trading and analytics,
               with a continuous focus on learning, collaboration, and innovation.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="p-4 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-xl border border-cyan-500/20">
                <div className="text-3xl mb-2 text-cyan-400">15+</div>
                <div className="text-white/60">Projects Completed</div>
              </div>
              <div className="p-4 bg-gradient-to-br from-blue-500/10 to-transparent rounded-xl border border-blue-500/20">
                <div className="text-3xl mb-2 text-blue-400">10+</div>
                <div className="text-white/60">Hackathons & Workshops</div>
              </div>
              <div className="p-4 bg-gradient-to-br from-purple-500/10 to-transparent rounded-xl border border-purple-500/20">
                <div className="text-3xl mb-2 text-purple-400">15+</div>
                <div className="text-white/60">Technologies & Frameworks</div>
              </div>
              <div className="p-4 bg-gradient-to-br from-green-500/10 to-transparent rounded-xl border border-green-500/20">
                <div className="text-3xl mb-2 text-green-400">5+</div>
                <div className="text-white/60">Internships & Leadership Roles</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}