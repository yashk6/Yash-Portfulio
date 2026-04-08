import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useScrollSpy } from './hooks/useScrollSpy';

function App() {
  const sections = ['home', 'about', 'skills', 'experience', 'projects', 'education', 'contact'];
  const activeSection = useScrollSpy(sections, 200);

  // Cursor glow effect
  useEffect(() => {
    const glow = document.getElementById('cursor-glow');
    if (!glow) return;
    const move = (e) => {
      glow.style.left = e.clientX + 'px';
      glow.style.top = e.clientY + 'px';
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <div className="bg-[#070707] min-h-screen text-[#ececec] font-outfit overflow-x-hidden">
      {/* Cursor glow */}
      <div id="cursor-glow" />

      <Navbar activeSection={activeSection} />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
