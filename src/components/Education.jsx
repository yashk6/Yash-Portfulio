import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { GraduationCap, Award, BookOpen, Calendar } from 'lucide-react';

const Education = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#0a0a0a]" />
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="orb orb-blue w-[450px] h-[450px] right-0 top-0 opacity-20" />
      <div className="orb orb-green w-[350px] h-[350px] -left-20 bottom-0 opacity-15" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="section-label mb-4">My Journey</div>
          <h2 className="font-bebas text-white leading-none" style={{ fontSize: 'clamp(40px, 6vw, 68px)' }}>
            Education & <span className="text-[#39FF14]">Certifications</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* ── Academic Timeline ─────────────────────────────────── */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-10"
            >
              <div className="w-10 h-10 rounded-xl bg-[#39FF14]/10 border border-[#39FF14]/25 flex items-center justify-center text-[#39FF14]">
                <GraduationCap size={20} />
              </div>
              <h3 className="font-outfit font-bold text-xl text-[#ececec]">Academic Background</h3>
            </motion.div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-[#39FF14]/40 via-[#39FF14]/15 to-transparent" />

              <div className="space-y-6">
                {education.degrees.map((degree, idx) => (
                  <motion.div
                    key={degree.id}
                    initial={{ opacity: 0, x: -25 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.15 }}
                    className="relative pl-12 group"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-5 w-8 h-8 rounded-full border-2 border-[#39FF14]/40 bg-[#070707] flex items-center justify-center group-hover:border-[#39FF14] group-hover:bg-[#39FF14]/10 transition-all duration-300">
                      <div className="w-2 h-2 rounded-full bg-[#39FF14] opacity-60 group-hover:opacity-100 transition-opacity" />
                    </div>

                    {/* Card */}
                    <div className="glass-card rounded-2xl p-6 border border-white/06 group-hover:border-[#39FF14]/25 transition-all duration-300 hover:shadow-[0_8px_32px_rgba(57,255,20,0.06)]">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <Calendar size={12} className="text-[#39FF14] opacity-60" />
                            <span className="font-fira text-xs text-[#39FF14]/70">{degree.period}</span>
                          </div>
                          <h4 className="font-outfit font-bold text-lg text-[#ececec] group-hover:text-[#39FF14] transition-colors">
                            {degree.title}
                          </h4>
                          <p className="font-outfit text-sm text-[#666] mt-0.5">{degree.institution}</p>
                        </div>
                        <div className="shrink-0 px-3 py-1.5 rounded-lg bg-[#39FF14]/08 border border-[#39FF14]/20">
                          <span className="font-fira text-xs text-[#39FF14]">{degree.score}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Certifications ────────────────────────────────────── */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-10"
            >
              <div className="w-10 h-10 rounded-xl bg-[#39FF14]/10 border border-[#39FF14]/25 flex items-center justify-center text-[#39FF14]">
                <Award size={20} />
              </div>
              <h3 className="font-outfit font-bold text-xl text-[#ececec]">Certifications</h3>
            </motion.div>

            <div className="space-y-4">
              {education.certifications.map((cert, idx) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.12 }}
                  className="glass-card rounded-2xl p-5 border border-white/06 flex items-center justify-between gap-4 hover:border-[#39FF14]/25 hover:translate-x-1 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#39FF14]/08 border border-[#39FF14]/20 flex items-center justify-center shrink-0 group-hover:bg-[#39FF14]/15 transition-colors">
                      <BookOpen size={16} className="text-[#39FF14]" />
                    </div>
                    <div>
                      <h4 className="font-outfit font-semibold text-[#ececec] group-hover:text-[#39FF14] transition-colors text-sm">
                        {cert.title}
                      </h4>
                      <div className="flex items-center gap-1.5 mt-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#39FF14] opacity-60" />
                        <span className="font-fira text-xs text-[#555]">Certified</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="font-fira text-xs text-[#555] group-hover:text-[#39FF14]/60 transition-colors">
                      {cert.date}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Fun fact box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 p-6 rounded-2xl border border-[#39FF14]/15 bg-[#39FF14]/05"
            >
              <div className="font-fira text-xs text-[#39FF14]/70 mb-2 uppercase tracking-wider">// Fun Fact</div>
              <p className="font-outfit text-sm text-[#888] leading-relaxed">
                Self-taught in many areas beyond formal education — constantly upskilling through online platforms,
                real-world projects, and building things that solve actual problems.
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;
