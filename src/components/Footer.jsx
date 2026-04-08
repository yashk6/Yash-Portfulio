import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const { personal } = portfolioData;
  const year = new Date().getFullYear();

  const links = ['About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact'];

  const scrollTo = (id) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/05">
      {/* Top gradient fade */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#39FF14]/30 to-transparent" />

      <div className="container mx-auto px-6 max-w-6xl py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg border border-[#39FF14]/40 flex items-center justify-center">
                <span className="font-bebas text-[#39FF14] text-lg neon-text">YK</span>
              </div>
              <span className="font-outfit font-bold text-[#ececec]">
                Yash<span className="text-[#39FF14]">.</span>
              </span>
            </div>
            <p className="font-outfit text-sm text-[#555] leading-relaxed max-w-xs">
              Frontend Developer crafting pixel-perfect, performant web experiences with React.js and modern tooling.
            </p>
          </div>

          {/* Quick Nav */}
          <div>
            <h4 className="font-fira text-xs text-[#555] uppercase tracking-wider mb-5">Navigation</h4>
            <div className="grid grid-cols-2 gap-2">
              {links.map((link) => (
                <button
                  key={link}
                  onClick={() => scrollTo(link)}
                  className="text-left font-outfit text-sm text-[#666] hover:text-[#39FF14] transition-colors py-1"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Contact shortcuts */}
          <div>
            <h4 className="font-fira text-xs text-[#555] uppercase tracking-wider mb-5">Connect</h4>
            <div className="space-y-3">
              <a
                href={`mailto:${personal.email}`}
                className="flex items-center gap-3 font-outfit text-sm text-[#666] hover:text-[#39FF14] transition-colors group"
              >
                <Mail size={15} className="shrink-0 opacity-60 group-hover:opacity-100" />
                {personal.email}
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 font-outfit text-sm text-[#666] hover:text-[#39FF14] transition-colors group"
              >
                <Linkedin size={15} className="shrink-0 opacity-60 group-hover:opacity-100" />
                linkedin.com/in/yash-kalyani
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 font-outfit text-sm text-[#666] hover:text-[#39FF14] transition-colors group"
              >
                <Github size={15} className="shrink-0 opacity-60 group-hover:opacity-100" />
                github.com/yashkalyani
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/05">
          <p className="font-fira text-xs text-[#444]">
            © {year} Yash Sachin Kalyani — Built with{' '}
            <span className="text-[#39FF14]">React</span> +{' '}
            <span className="text-[#39FF14]">Vite</span>
          </p>

          <div className="flex items-center gap-4">
            <a href={personal.linkedin} target="_blank" rel="noreferrer"
              className="w-9 h-9 rounded-lg border border-white/08 flex items-center justify-center text-[#555] hover:border-[#39FF14]/40 hover:text-[#39FF14] transition-all">
              <Linkedin size={16} />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer"
              className="w-9 h-9 rounded-lg border border-white/08 flex items-center justify-center text-[#555] hover:border-[#39FF14]/40 hover:text-[#39FF14] transition-all">
              <Github size={16} />
            </a>
            <a href={`mailto:${personal.email}`}
              className="w-9 h-9 rounded-lg border border-white/08 flex items-center justify-center text-[#555] hover:border-[#39FF14]/40 hover:text-[#39FF14] transition-all">
              <Mail size={16} />
            </a>

            {/* Back to top */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-9 h-9 rounded-lg border border-[#39FF14]/25 bg-[#39FF14]/05 flex items-center justify-center text-[#39FF14] hover:bg-[#39FF14]/15 hover:neon-border transition-all ml-2"
              title="Back to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
