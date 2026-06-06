

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const Navbar = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = ['About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact'];

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
    <nav className="fixed top-0 w-full z-50 glass-card transition-all duration-500" >
    
      <div className="container mx-auto px-6 max-w-6xl flex justify-between items-center">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="cursor-pointer group flex items-center gap-2"
        >
          <div className="w-9 h-9 rounded-lg border border-[var(--color-primary)]/40 flex items-center justify-center group-hover:border-[var(--color-primary)] group-hover:neon-border transition-all duration-300">
            <span className="font-bebas text-[var(--color-primary)] text-lg leading-none neon-text">YK</span>
          </div>
          <span className="font-outfit font-bold text-[var(--color-text-main)] hidden sm:block group-hover:text-[var(--color-primary)] transition-colors">
            Yash<span className="text-[var(--color-primary)]">.</span>
          </span>
        </motion.div>
        <ThemeToggle />

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
                    ? 'text-[var(--color-primary)]'
                    : 'text-[var(--color-text-muted)] hover:text-[var(--color-text-main)]'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-[var(--color-primary)]/08 border border-[var(--color-primary)]/20 rounded-lg"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link}</span>
              </button>
            );
          })}

          <a href="mailto:yashkalyani090@gmail.com" className="ml-3 px-5 py-2 bg-[var(--color-primary)] text-[var(--color-text-main)] font-outfit font-bold text-sm rounded-lg hover:shadow-[0_0_20px_rgba(57,255,20,0.4)] transition-all hover:scale-105">
            Hire Me
          </a>
        </motion.div>

        {/* Mobile Toggle */}
        <button className="md:hidden w-10 h-10 flex items-center justify-center text-[var(--color-text-main)] hover:text-[var(--color-primary)] border border-white/10 hover:border-[var(--color-primary)]/40 rounded-lg transition-all" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="md:hidden overflow-hidden bg-[var(--color-bg)] border-b border-white/5">
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
                        ? 'text-[var(--color-primary)] bg-[var(--color-primary)]/08'
                        : 'text-[#777] hover:text-[#ececec]'
                    }`}
                  >
                    {link}
                  </button>
                );
              })}
              <a href="mailto:yashkalyani090@gmail.com" className="mt-2 px-4 py-3 bg-[var(--color-primary)] text-[var(--color-text-main)] font-outfit font-bold rounded-lg text-center">
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
