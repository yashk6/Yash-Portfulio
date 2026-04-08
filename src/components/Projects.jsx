import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { ExternalLink, Github, Star, ArrowUpRight, Tag } from 'lucide-react';

const PROJECT_COLORS = [
  { accent: '#39FF14', bg: 'rgba(57,255,20,0.06)', border: 'rgba(57,255,20,0.2)' },
  { accent: '#00c6ff', bg: 'rgba(0,198,255,0.06)', border: 'rgba(0,198,255,0.2)' },
  { accent: '#bf5af2', bg: 'rgba(191,90,242,0.06)', border: 'rgba(191,90,242,0.2)' },
];

const ProjectCard = ({ project, index }) => {
  const [hovered, setHovered] = useState(false);
  const color = PROJECT_COLORS[index % PROJECT_COLORS.length];

  return (
    <motion.div
      variants={{
        hidden: { y: 30, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative glass-card rounded-2xl overflow-hidden flex flex-col group transition-all duration-500 hover:-translate-y-2"
      style={{
        border: hovered ? `1px solid ${color.border}` : '1px solid rgba(255,255,255,0.06)',
        boxShadow: hovered ? `0 20px 60px ${color.bg}, 0 0 0 1px ${color.border}` : 'none',
      }}
    >
      {/* Top gradient bar */}
      <div
        className="h-1 w-full transition-all duration-500"
        style={{ background: hovered ? `linear-gradient(90deg, ${color.accent}, transparent)` : 'transparent' }}
      />

      {/* Mock preview area */}
      <div
        className="relative h-44 overflow-hidden flex items-center justify-center transition-all duration-500"
        style={{ background: hovered ? color.bg : 'rgba(255,255,255,0.02)' }}
      >
        {/* Abstract code lines decoration */}
        <div className="absolute inset-4 opacity-20">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="h-2 rounded-full mb-2 transition-all duration-700"
              style={{
                background: color.accent,
                width: `${30 + ((i * 23) % 55)}%`,
                opacity: hovered ? 0.4 + i * 0.05 : 0.15,
                transform: hovered ? `scaleX(1)` : `scaleX(0.6)`,
                transformOrigin: 'left',
                transitionDelay: `${i * 50}ms`,
              }}
            />
          ))}
        </div>

        {/* Big project number */}
        <span
          className="font-bebas text-[7rem] leading-none select-none transition-all duration-500 relative z-10"
          style={{
            color: color.accent,
            opacity: hovered ? 0.12 : 0.06,
            transform: hovered ? 'scale(1.1)' : 'scale(1)',
          }}
        >
          {String(index + 1).padStart(2, '0')}
        </span>

        {/* Featured badge */}
        {project.featured && (
          <div
            className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-outfit font-bold"
            style={{ background: color.bg, border: `1px solid ${color.border}`, color: color.accent }}
          >
            <Star size={10} fill="currentColor" /> Featured
          </div>
        )}

        {/* Hover overlay links */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex items-center justify-center gap-4 z-20"
              style={{ background: `linear-gradient(to top, ${color.bg}, rgba(7,7,7,0.5))` }}
            >
              {project.liveUrl !== '#' && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-outfit font-bold text-sm transition-all"
                  style={{
                    background: color.accent,
                    color: '#070707',
                    boxShadow: `0 0 20px ${color.bg}`,
                  }}
                >
                  Live Demo <ExternalLink size={14} />
                </a>
              )}
              {project.githubUrl !== '#' && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-outfit font-bold text-sm border text-[#ececec] hover:text-white transition-all"
                  style={{ borderColor: 'rgba(255,255,255,0.15)' }}
                >
                  <Github size={14} /> Code
                </a>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Content */}
      <div className="p-7 flex flex-col flex-grow">
        <div className="flex items-start justify-between mb-3">
          <div>
            <div className="font-fira text-xs mb-1.5" style={{ color: color.accent, opacity: 0.7 }}>
              {project.date || 'Ongoing'}
            </div>
            <h3
              className="font-outfit font-bold text-xl text-[#ececec] transition-colors duration-300"
              style={{ color: hovered ? color.accent : '#ececec' }}
            >
              {project.title}
            </h3>
          </div>
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 shrink-0 mt-1"
            style={{
              background: hovered ? color.accent : 'rgba(255,255,255,0.05)',
              color: hovered ? '#070707' : '#555',
            }}
          >
            <ArrowUpRight size={16} />
          </div>
        </div>

        <p className="font-outfit text-sm text-[#666] leading-relaxed mb-6 flex-grow">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="flex items-center gap-1 text-xs font-fira px-2.5 py-1 rounded-md transition-colors"
              style={{
                background: color.bg,
                color: hovered ? color.accent : '#666',
                border: `1px solid ${hovered ? color.border : 'transparent'}`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="orb orb-purple w-[500px] h-[500px] -right-20 top-1/4 opacity-25" />
      <div className="orb orb-green w-[350px] h-[350px] left-0 bottom-1/4 opacity-20" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 flex flex-col sm:flex-row sm:items-end justify-between gap-6"
        >
          <div>
            <div className="section-label mb-4">What I've Built</div>
            <h2 className="font-bebas text-white leading-none" style={{ fontSize: 'clamp(40px, 6vw, 68px)' }}>
              Featured <span className="text-[#39FF14]">Projects</span>
            </h2>
          </div>
          <p className="font-outfit text-[#555] max-w-xs text-sm">
            Real-world applications built with modern tech stacks and production-ready quality.
          </p>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7"
        >
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-14 text-center"
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/10 rounded-xl font-outfit font-semibold text-[#777] hover:border-[#39FF14]/40 hover:text-[#39FF14] transition-all group"
          >
            <Github size={18} />
            View All on GitHub
            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;
