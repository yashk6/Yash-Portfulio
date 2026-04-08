import { useState, useEffect } from 'react';

export function useScrollSpy(sections, offset = 150) {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          if (section.offsetTop <= scrollPosition) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger initially
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections, offset]);

  return activeSection;
}
