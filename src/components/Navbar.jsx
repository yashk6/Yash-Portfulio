import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = ['About', 'Skills', 'Projects', 'Education', 'Contact'];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setIsOpen(false);
    const el = document.getElementById(id.toLowerCase());
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'py-3 bg-[#070707]/85 backdrop-blur-xl border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 max-w-6xl flex justify-between items-center">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="cursor-pointer group flex items-center gap-2"
        >
          <div className="w-9 h-9 rounded-lg border border-[#39FF14]/40 flex items-center justify-center group-hover:border-[#39FF14] group-hover:neon-border transition-all duration-300">
            <span className="font-bebas text-[#39FF14] text-lg leading-none neon-text">YK</span>
          </div>
          <span className="font-outfit font-bold text-[#ececec] hidden sm:block group-hover:text-[#39FF14] transition-colors">
            Yash<span className="text-[#39FF14]">.</span>
          </span>
        </motion.div>

        {/* Desktop Links */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hidden md:flex items-center space-x-1"
        >
          {links.map((link, i) => {
            const id = link.toLowerCase();
            const isActive = activeSection === id;
            return (
              <button
                key={link}
                onClick={() => scrollTo(id)}
                className={`relative px-4 py-2 font-outfit text-sm uppercase tracking-wider font-semibold transition-all duration-300 rounded-lg ${
                  isActive
                    ? 'text-[#39FF14]'
                    : 'text-[#777] hover:text-[#ececec]'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-[#39FF14]/08 border border-[#39FF14]/20 rounded-lg"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link}</span>
              </button>
            );
          })}

          <a
            href="mailto:yashkalyani090@gmail.com"
            className="ml-3 px-5 py-2 bg-[#39FF14] text-[#070707] font-outfit font-bold text-sm rounded-lg hover:shadow-[0_0_20px_rgba(57,255,20,0.4)] transition-all hover:scale-105"
          >
            Hire Me
          </a>
        </motion.div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden w-10 h-10 flex items-center justify-center text-[#ececec] hover:text-[#39FF14] border border-white/10 hover:border-[#39FF14]/40 rounded-lg transition-all"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-[#0d0d0d] border-b border-white/5"
          >
            <div className="flex flex-col py-4 px-6 space-y-1">
              {links.map((link) => {
                const id = link.toLowerCase();
                const isActive = activeSection === id;
                return (
                  <button
                    key={link}
                    onClick={() => scrollTo(id)}
                    className={`text-left px-4 py-3 font-outfit font-semibold tracking-wider rounded-lg transition-all ${
                      isActive
                        ? 'text-[#39FF14] bg-[#39FF14]/08'
                        : 'text-[#777] hover:text-[#ececec]'
                    }`}
                  >
                    {link}
                  </button>
                );
              })}
              <a
                href="mailto:yashkalyani090@gmail.com"
                className="mt-2 px-4 py-3 bg-[#39FF14] text-[#070707] font-outfit font-bold rounded-lg text-center"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
