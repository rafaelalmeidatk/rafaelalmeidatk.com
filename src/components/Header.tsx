import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { useColorMode } from '@chakra-ui/react';
import { GitHubIcon } from './GitHubIcon';
import NextLink from 'next/link';

const MENU_ITEMS = ['/', '/blog'];

export const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <header className="flex justify-between items-center -mx-3">
      <nav className="flex items-center space-x-2">
        {MENU_ITEMS.map((item) => (
          <NextLink key={item} href={item}>
            <a className="font-mono underline px-3 py-1 transition hover:opacity-80 hover:no-underline">
              {item}
            </a>
          </NextLink>
        ))}
      </nav>

      <div className="flex items-center space-x-3">
        <a
          aria-label="My GitHub profile"
          href="https://github.com/rafaelalmeidatk"
          target="_blank"
          rel="noopener"
          className="block transition  opacity-70 hover:opacity-90"
        >
          <GitHubIcon boxSize={7} />
        </a>

        <button
          onClick={toggleColorMode}
          aria-label={`Switch to ${
            colorMode === 'light' ? 'dark' : 'light'
          } mode`}
          className="transition w-10 opacity-70 hover:opacity-90"
        >
          {colorMode === 'light' ? (
            <MoonIcon boxSize={7} />
          ) : (
            <SunIcon boxSize={7} />
          )}
        </button>
      </div>
    </header>
  );
};
