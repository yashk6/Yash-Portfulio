import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

// Skill proficiency levels (%)
const SKILL_LEVELS = {
  'JavaScript': 90,
  'Python': 65,
  'HTML5': 95,
  'CSS3': 88,
  'React.js': 92,
  'React Router': 85,
  'Tailwind CSS': 88,
  'Git': 80,
  'GitHub': 82,
  'VS Code': 90,
  'Chrome DevTools': 78,
  'Responsive Design': 90,
  'REST API Integration': 80,
  'Firebase Auth': 70,
  'UI/UX Fundamentals': 75,
};

const TECH_LOGOS = [
  { name: 'React', emoji: '⚛️' },
  { name: 'JavaScript', emoji: '🟨' },
  { name: 'TypeScript', emoji: '🔷' },
  { name: 'HTML5', emoji: '🟧' },
  { name: 'CSS3', emoji: '🔵' },
  { name: 'Python', emoji: '🐍' },
  { name: 'Git', emoji: '🔀' },
  { name: 'GitHub', emoji: '🐙' },
  { name: 'Tailwind', emoji: '💨' },
  { name: 'Vite', emoji: '⚡' },
  { name: 'Firebase', emoji: '🔥' },
  { name: 'Figma', emoji: '🎨' },
];

const SkillBar = ({ name, level }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="group">
      <div className="flex justify-between items-center mb-1.5">
        <span className="font-outfit text-sm text-[#ccc] group-hover:text-[#39FF14] transition-colors">{name}</span>
        <span className="font-fira text-xs text-[#555]">{level}%</span>
      </div>
      <div className="skill-bar-track">
        <div
          className="skill-bar-fill"
          style={{
            width: isInView ? `${level}%` : '0%',
            transition: 'width 1.3s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        />
      </div>
    </div>
  );
};

const Skills = () => {
  const { skills } = portfolioData;

  const categories = [
    { title: 'Languages', icon: '{ }', skills: skills.languages },
    { title: 'Frameworks & Libraries', icon: '⚛', skills: skills.frameworks },
    { title: 'Tools & Platforms', icon: '🛠', skills: skills.tools },
    { title: 'Other Expertise', icon: '✦', skills: skills.other },
  ];

  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      {/* Subtle bg */}
      <div className="absolute inset-0 bg-[#0a0a0a]" />
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="orb orb-blue w-[500px] h-[500px] -left-40 top-1/3 opacity-25" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="section-label mb-4">Technical Arsenal</div>
          <h2 className="font-bebas text-white leading-none" style={{ fontSize: 'clamp(40px, 6vw, 68px)' }}>
            Skills & <span className="text-[#39FF14]">Technologies</span>
          </h2>
        </motion.div>

        {/* Skill bars grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12 mb-20">
          {categories.map((cat, ci) => (
            <motion.div
              key={ci}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: ci * 0.1 }}
              className="glass-card rounded-2xl p-7 border border-white/05 hover:border-[#39FF14]/20 transition-all"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{cat.icon}</span>
                <h3 className="font-outfit font-bold text-[#ececec] text-lg">{cat.title}</h3>
              </div>
              <div className="space-y-4">
                {cat.skills.map((skill, i) => (
                  <SkillBar key={i} name={skill} level={SKILL_LEVELS[skill] ?? 75} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech ticker strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label mb-6 justify-center">Also Comfortable With</div>
          <div className="relative overflow-hidden border border-white/05 rounded-2xl bg-[#0d0d0d] py-5">
            <div className="flex gap-8 animate-ticker whitespace-nowrap">
              {[...TECH_LOGOS, ...TECH_LOGOS].map((t, i) => (
                <div key={i} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/05 bg-white/02 shrink-0 hover:border-[#39FF14]/30 hover:bg-[#39FF14]/05 transition-all cursor-default group">
                  <span className="text-lg">{t.emoji}</span>
                  <span className="font-outfit text-sm text-[#666] group-hover:text-[#39FF14] transition-colors">{t.name}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
