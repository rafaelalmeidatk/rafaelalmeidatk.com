'use client';

import { useTheme } from 'next-themes';
import { GitHubIcon, MoonIcon, SunIcon } from './icons';
import NextLink from 'next/link';

const MENU_ITEMS = ['/', '/blog'];

export const Header = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <header className="flex justify-between items-center -mx-3">
      <nav className="flex items-center space-x-2">
        {MENU_ITEMS.map((item) => (
          <NextLink
            key={item}
            href={item}
            className="font-mono underline px-3 py-1 transition hover:opacity-80 hover:no-underline"
          >
            {item}
          </NextLink>
        ))}
      </nav>

      <div className="flex items-center space-x-3">
        <a
          aria-label="My GitHub profile"
          href="https://github.com/rafaelalmeidatk"
          target="_blank"
          rel="noopener"
          className="block transition opacity-70 hover:opacity-90"
        >
          <GitHubIcon size={7} />
        </a>

        <button
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          className="transition w-10 opacity-70 hover:opacity-90"
        >
          {theme === 'light' ? <MoonIcon size={7} /> : <SunIcon size={8} />}
        </button>
      </div>
    </header>
  );
};
