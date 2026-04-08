import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { MapPin, Mail, Briefcase, GraduationCap } from 'lucide-react';

const About = () => {
  const { personal } = portfolioData;

  const highlights = [
    { icon: <MapPin size={16} />, label: 'Location', value: personal.location },
    { icon: <Mail size={16} />, label: 'Email', value: personal.email },
    { icon: <Briefcase size={16} />, label: 'Status', value: personal.status },
    { icon: <GraduationCap size={16} />, label: 'Education', value: 'BCA Graduate' },
  ];

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Ambient */}
      <div className="orb orb-green w-[500px] h-[500px] -right-40 top-1/2 -translate-y-1/2 opacity-30" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-5"
        >
          <div className="section-label mb-4">About Me</div>
          <h2 className="font-bebas text-white leading-none" style={{ fontSize: 'clamp(40px, 6vw, 68px)' }}>
            The Developer <span className="text-[#39FF14]">Behind</span> the Code
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mt-16 items-start">

          {/* Left: bio + chips — 3 cols */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3 space-y-8"
          >
            <p className="font-outfit text-lg text-[#888] leading-relaxed">
              {personal.bio}
            </p>

            <p className="font-outfit text-base text-[#666] leading-relaxed">
              When I'm not writing code, I'm exploring new frontend patterns, contributing to open-source, and diving deeper into the React ecosystem. I believe in clean, performant code and pixel-perfect design.
            </p>

            {/* Info grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {highlights.map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-3 p-4 glass-card rounded-xl border border-white/5 hover:border-[#39FF14]/25 transition-all group"
                >
                  <div className="text-[#39FF14] shrink-0 opacity-70 group-hover:opacity-100 transition-opacity">
                    {h.icon}
                  </div>
                  <div>
                    <div className="text-xs font-fira text-[#555] uppercase tracking-wider">{h.label}</div>
                    <div className="text-sm font-outfit text-[#ccc] mt-0.5">{h.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Fun fact chips */}
            <div className="flex flex-wrap gap-2">
              {personal.funFacts.map((fact, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.4 + i * 0.05 }}
                  className="px-4 py-1.5 rounded-full text-sm font-outfit font-medium text-[#ececec] border border-white/10 bg-white/03 hover:border-[#39FF14]/40 hover:text-[#39FF14] transition-all cursor-default"
                >
                  {fact}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: terminal card — 2 cols */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2"
          >
            <div className="glass-card rounded-2xl overflow-hidden border border-white/08 hover:border-[#39FF14]/30 transition-all duration-500 hover:shadow-[0_0_40px_rgba(57,255,20,0.08)]">
              {/* Terminal header */}
              <div className="bg-[#0d0d0d] px-5 py-3 flex items-center gap-3 border-b border-white/05">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                  <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                </div>
                <span className="font-fira text-xs text-[#555] mx-auto">~/yash/about.json</span>
              </div>

              {/* Terminal body */}
              <div className="p-6 font-fira text-sm leading-8">
                <div className="text-[#555]">{'// Developer Profile'}</div>
                <br />
                <div className="space-y-1">
                  {[
                    ['name', personal.name, 'text-sky-300'],
                    ['role', personal.role, 'text-sky-300'],
                    ['location', personal.location, 'text-sky-300'],
                    ['status', `${personal.status} ✅`, 'text-emerald-300'],
                  ].map(([key, val, cls], i) => (
                    <div key={i}>
                      <span className="text-[#39FF14]">&gt; </span>
                      <span className="text-[#888]">{key}: </span>
                      <span className={cls}>"{val}"</span>
                    </div>
                  ))}
                </div>
                <br />
                <div className="text-[#555]">{'// Languages Spoken'}</div>
                <div>
                  <span className="text-[#39FF14]">&gt; </span>
                  <span className="text-[#888]">spoken: </span>
                  <span className="text-yellow-300">["English", "Hindi", "Marathi"]</span>
                </div>
                <br />
                <div className="text-[#555]">{'// Soft Skills'}</div>
                <div>
                  <span className="text-[#39FF14]">&gt; </span>
                  <span className="text-[#888]">traits: </span>
                  <span className="text-yellow-300">["Fast Learner", "Team Player", "Adaptable"]</span>
                </div>
                <div className="mt-4">
                  <span className="text-[#39FF14] cursor-blink">_</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
