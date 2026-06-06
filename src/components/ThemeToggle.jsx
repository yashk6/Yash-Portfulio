import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(() => {
    const stored = localStorage.getItem('theme');
    return stored ? stored === 'dark' : true;
  });

  useEffect(() => {
    const root = document.documentElement;
      if (isDark) {
        root.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
      } else {
        root.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
      }
  }, [isDark]);

  const toggle = () => setIsDark(!isDark);

  return (
    <button
      onClick={toggle}
      className="flex items-center gap-1 px-3 py-1 rounded-lg border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/05 text-[var(--color-text-main)] hover:bg-[var(--color-primary)]/10 transition"
      aria-label="Toggle theme"
    >
      {isDark ? <Moon size={16} /> : <Sun size={16} />}
    </button>
  );
};

export default ThemeToggle;
