import { motion } from 'motion/react';

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
            <div className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-3xl border border-white/10 p-8 backdrop-blur-sm">
              <div className="aspect-square bg-gradient-to-br from-cyan-400/20 to-purple-600/20 rounded-2xl mb-6 flex items-center justify-center border border-white/10">
                <span className="text-8xl">👤</span>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-white/5 rounded-xl border border-white/10">
                  <span className="text-white/60">Location</span>
                  <span>City, Country</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white/5 rounded-xl border border-white/10">
                  <span className="text-white/60">Experience</span>
                  <span>5+ Years</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white/5 rounded-xl border border-white/10">
                  <span className="text-white/60">Status</span>
                  <span className="text-green-400">Available</span>
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
              Passionate developer with expertise in creating scalable web applications and 
              data-driven solutions. I combine technical proficiency with creative problem-solving 
              to deliver exceptional results.
            </p>

            <p className="text-lg text-white/60 leading-relaxed">
              My journey in technology started with a curiosity for how things work and evolved 
              into a career focused on building innovative digital experiences. I specialize in 
              modern web technologies, real-time data visualization, and creating intuitive user 
              interfaces that make complex systems accessible.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="p-4 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-xl border border-cyan-500/20">
                <div className="text-3xl mb-2 text-cyan-400">50+</div>
                <div className="text-white/60">Projects Completed</div>
              </div>
              <div className="p-4 bg-gradient-to-br from-blue-500/10 to-transparent rounded-xl border border-blue-500/20">
                <div className="text-3xl mb-2 text-blue-400">30+</div>
                <div className="text-white/60">Happy Clients</div>
              </div>
              <div className="p-4 bg-gradient-to-br from-purple-500/10 to-transparent rounded-xl border border-purple-500/20">
                <div className="text-3xl mb-2 text-purple-400">15+</div>
                <div className="text-white/60">Technologies</div>
              </div>
              <div className="p-4 bg-gradient-to-br from-green-500/10 to-transparent rounded-xl border border-green-500/20">
                <div className="text-3xl mb-2 text-green-400">100%</div>
                <div className="text-white/60">Satisfaction</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}