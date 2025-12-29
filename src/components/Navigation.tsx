import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Home as HomeIcon, User, Briefcase, Code, FolderOpen, GraduationCap, Trophy, Mail, MoreVertical } from 'lucide-react';
import type { Page } from '../App';

interface NavigationProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const navItems: { page: Page; icon: React.ElementType; label: string }[] = [
  { page: 'home', icon: HomeIcon, label: 'Home' },
  { page: 'about', icon: User, label: 'About' },
  { page: 'experience', icon: Briefcase, label: 'Experience' },
  { page: 'skills', icon: Code, label: 'Skills' },
  { page: 'projects', icon: FolderOpen, label: 'Projects' },
  { page: 'education', icon: GraduationCap, label: 'Education' },
  { page: 'achievements', icon: Trophy, label: 'Achievements' },
  { page: 'contact', icon: Mail, label: 'Contact' },
];

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [rollingIndex, setRollingIndex] = useState(0);

  // Rolling animation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setRollingIndex((prev) => (prev + 1) % navItems.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Rolling Animation Bar - Always visible on the left edge */}
      <div className="fixed left-0 top-0 h-full w-1 bg-gradient-to-b from-transparent via-cyan-500/30 to-transparent z-40">
        <motion.div
          className="absolute w-full h-20 bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-600 rounded-full blur-sm"
          animate={{
            top: `${(rollingIndex / navItems.length) * 100}%`,
          }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Menu Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed left-6 top-8 z-50 w-14 h-14 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 backdrop-blur-md rounded-full border border-white/20 flex items-center justify-center hover:from-cyan-500/30 hover:to-blue-600/30 transition-all"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <MoreVertical className="w-6 h-6 text-cyan-400" />
        </motion.div>
      </motion.button>

      {/* Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            />

            {/* Nav Panel */}
            <motion.nav
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed left-6 top-28 z-50"
            >
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 p-4 shadow-2xl">
                <div className="space-y-2">
                  {navItems.map(({ page, icon: Icon, label }, index) => (
                    <motion.button
                      key={page}
                      onClick={() => {
                        onNavigate(page);
                        setIsOpen(false);
                      }}
                      className="relative group w-full"
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ x: 5 }}
                    >
                      <div
                        className={`flex items-center gap-4 px-5 py-3 rounded-xl transition-all ${
                          currentPage === page
                            ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/50'
                            : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'
                        }`}
                      >
                        <Icon className="w-5 h-5 flex-shrink-0" />
                        <span className="whitespace-nowrap">{label}</span>
                        
                        {/* Active Indicator */}
                        {currentPage === page && (
                          <motion.div
                            layoutId="activeIndicator"
                            className="absolute right-3 w-2 h-2 rounded-full bg-white"
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                          />
                        )}
                      </div>

                      {/* Hover Effect */}
                      {currentPage !== page && (
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                      )}
                    </motion.button>
                  ))}
                </div>

                {/* Decorative Element */}
                <div className="mt-4 pt-4 border-t border-white/10">
                  <div className="flex items-center justify-center gap-2">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-2 h-2 rounded-full bg-cyan-400"
                    />
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                      className="w-2 h-2 rounded-full bg-blue-400"
                    />
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                      className="w-2 h-2 rounded-full bg-purple-400"
                    />
                  </div>
                </div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>

      {/* Mini Indicator - Shows current page when menu is closed */}
      {!isOpen && (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="fixed left-6 top-28 z-40"
        >
          <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-3">
            {navItems.map(({ page, icon: Icon }) => 
              currentPage === page ? (
                <motion.div
                  key={page}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/30"
                >
                  <Icon className="w-6 h-6" />
                </motion.div>
              ) : null
            )}
          </div>
        </motion.div>
      )}
    </>
  );
}