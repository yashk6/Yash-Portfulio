import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Briefcase, Calendar, Building2, Terminal } from 'lucide-react';

const Experience = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div className="orb orb-green w-[500px] h-[500px] -right-20 top-1/4 opacity-25" />
      <div className="orb orb-purple w-[350px] h-[350px] left-0 bottom-1/4 opacity-20" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="section-label mb-4">Professional Path</div>
          <h2 className="font-bebas text-white leading-none" style={{ fontSize: 'clamp(40px, 6vw, 68px)' }}>
            Work <span className="text-[#39FF14]">Experience</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#39FF14]/40 via-[#39FF14]/10 to-transparent transform md:-translate-x-1/2 hidden sm:block" />

          <div className="space-y-12">
            {experience.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-[#39FF14] neon-border transform -translate-x-1/2 top-0 mt-8 hidden sm:block z-20" />

                {/* Content Card */}
                <div className={`w-full md:w-[calc(50%-2rem)] flex ${idx % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className="glass-card p-8 rounded-2xl border border-white/06 hover:border-[#39FF14]/30 transition-all duration-500 group w-full">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-2 text-[#39FF14] mb-2">
                          <Building2 size={16} />
                          <span className="font-fira text-sm uppercase tracking-wider">{item.company}</span>
                        </div>
                        <h3 className="font-outfit font-bold text-2xl text-[#ececec] group-hover:text-[#39FF14] transition-colors">
                          {item.role}
                        </h3>
                      </div>
                      <div className="px-3 py-1 rounded bg-[#39FF14]/08 border border-[#39FF14]/20 text-[#39FF14] font-fira text-xs shrink-0">
                        {item.duration}
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-[#555] font-fira text-xs mb-6">
                      <div className="flex items-center gap-1.5">
                        <Calendar size={12} />
                        {item.period}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Briefcase size={12} />
                        Internship
                      </div>
                    </div>

                    <p className="font-outfit text-[#888] text-sm leading-relaxed mb-8">
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag, i) => (
                        <span 
                          key={i} 
                          className="px-2.5 py-1 rounded-md bg-[#0a0a0a] border border-white/05 text-[#555] font-fira text-[10px] uppercase group-hover:border-[#39FF14]/20 group-hover:text-[#39FF14]/60 transition-all"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Vertical Decorative Element for Mobile */}
                <div className="sm:hidden w-full h-px bg-white/05 my-4" />
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
