'use client';

import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from './icons';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      aria-label="Toggle dark and light theme"
      className="transition w-10 opacity-70 hover:opacity-90"
    >
      <MoonIcon size={7} className="inline-block dark:hidden" />
      <SunIcon size={8} className="hidden dark:inline-block" />
    </button>
  );
};

export default ThemeToggle;
