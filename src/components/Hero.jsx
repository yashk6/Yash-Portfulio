import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight, Github, Linkedin } from 'lucide-react';
import { useTypewriter } from '../hooks/useTypewriter';
import { portfolioData } from '../data/portfolioData';

const STATS = [
  { value: '3+', label: 'Projects Shipped' },
  { value: '2+', label: 'Years Learning' },
  { value: '10+', label: 'Tech Skills' },
];

const Hero = () => {
  const canvasRef = useRef(null);
  const { personal } = portfolioData;
  const typewrittenText = useTypewriter(
    ['React.js Developer', 'Frontend Engineer', 'UI/UX Enthusiast', 'MERN Stack Builder'],
    90, 45, 2200
  );

  // Particle canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const chars = 'YASHKALYANI</>{}[]REACTVITE01';
    const charArr = chars.split('');
    const fs = 13;
    let cols = Math.floor(canvas.width / fs);
    let drops = Array.from({ length: cols }, () => Math.random() * -50);

    const draw = () => {
      ctx.fillStyle = 'rgba(7,7,7,0.04)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${fs}px "Fira Code"`;

      cols = Math.floor(canvas.width / fs);
      if (drops.length !== cols) {
        drops = Array.from({ length: cols }, () => Math.random() * -50);
      }

      for (let i = 0; i < drops.length; i++) {
        const alpha = Math.random() > 0.5 ? 1 : 0.3;
        ctx.fillStyle = `rgba(57,255,20,${alpha * 0.55})`;
        ctx.fillText(charArr[Math.floor(Math.random() * charArr.length)], i * fs, drops[i] * fs);
        if (drops[i] * fs > canvas.height && Math.random() > 0.977) drops[i] = 0;
        drops[i]++;
      }
      animId = requestAnimationFrame(draw);
    };

    animId = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Ambient orbs */}
      <div className="orb orb-green w-[700px] h-[700px] -top-40 -left-60 opacity-60" />
      <div className="orb orb-blue w-[500px] h-[500px] top-20 right-0 opacity-50" />
      <div className="orb orb-purple w-[400px] h-[400px] bottom-0 left-1/3 opacity-40" />

      {/* Matrix canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-[0.07] z-0"
      />

      {/* Grid dots */}
      <div className="absolute inset-0 grid-bg opacity-40 z-0" />
      <div className="scanline z-0" />

      {/* Content */}
      <div className="container mx-auto px-6 max-w-6xl relative z-10 pt-28 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left column */}
          <div>
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#39FF14]/30 bg-[#39FF14]/05 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-[#39FF14] animate-pulse-neon" />
              <span className="font-fira text-[#39FF14] text-sm">{personal.status}</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-fira text-[#39FF14]/70 text-base mb-3"
            >
              &gt; Hello, World! I'm
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-bebas text-white leading-none tracking-wide mb-4"
              style={{ fontSize: 'clamp(60px, 9vw, 110px)' }}
            >
              {personal.name.split(' ').map((word, i) => (
                <span key={i} className={i === 1 ? 'text-[#39FF14] neon-text' : ''}>
                  {word}{' '}
                </span>
              ))}
            </motion.h1>

            {/* Typewriter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center gap-2 mb-6 text-xl sm:text-2xl font-outfit font-light text-[#ececec]/80"
            >
              <span className="text-[#39FF14] font-semibold">{typewrittenText}</span>
              <span className="cursor-blink text-[#39FF14] font-light">|</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-[#777] font-outfit text-base sm:text-lg max-w-xl mb-10 leading-relaxed"
            >
              {personal.bio.slice(0, 160)}…
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-2 bg-[#39FF14] text-[#070707] font-outfit font-bold px-8 py-4 rounded-lg overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(57,255,20,0.5)]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View My Work <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
              </a>

              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-white/10 text-[#ececec] font-outfit font-semibold px-8 py-4 rounded-lg hover:border-[#39FF14]/50 hover:text-[#39FF14] transition-all hover:bg-[#39FF14]/05"
              >
                <Linkedin size={18} /> LinkedIn
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="flex items-center gap-8 border-t border-white/5 pt-8"
            >
              {STATS.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="font-bebas text-[#39FF14] neon-text" style={{ fontSize: '2rem' }}>
                    {stat.value}
                  </div>
                  <div className="font-outfit text-xs text-[#555] uppercase tracking-widest">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right column — avatar card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative">
              {/* Spinning orbit ring */}
              <div className="absolute inset-0 rounded-full border border-[#39FF14]/15 animate-spin-slow scale-110" />
              <div className="absolute inset-0 rounded-full border border-[#39FF14]/08 scale-125" style={{ animation: 'spin-slow 30s linear infinite reverse' }} />

              {/* Avatar */}
              <div className="w-72 h-72 rounded-full gradient-border relative overflow-hidden shadow-[0_0_60px_rgba(57,255,20,0.2)]">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-[#111] via-[#0d0d0d] to-[#070707] flex items-center justify-center">
                  <img
                    src="/yash.jpg"
                    alt={personal.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Floating chips */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-8 glass-card px-4 py-2 rounded-xl border border-[#39FF14]/20 flex items-center gap-2"
              >
                <span className="text-[#39FF14]">⚡</span>
                <span className="font-fira text-xs text-[#ececec]">React.js</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-4 -left-8 glass-card px-4 py-2 rounded-xl border border-[#39FF14]/20 flex items-center gap-2"
              >
                <span className="text-[#39FF14]">🚀</span>
                <span className="font-fira text-xs text-[#ececec]">Open to Work</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute top-1/2 -right-16 glass-card px-4 py-2 rounded-xl border border-[#39FF14]/20 flex items-center gap-2"
              >
                <span className="text-[#39FF14]">🎯</span>
                <span className="font-fira text-xs text-[#ececec]">Frontend</span>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-fira text-[11px] text-[#555] uppercase tracking-[0.2em]">Scroll</span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-[#39FF14]/50 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
