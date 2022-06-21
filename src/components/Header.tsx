import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import {
  Flex,
  Link,
  chakra,
  IconButton,
  LinkBox,
  Stack,
  useColorMode,
} from '@chakra-ui/react';
import { GitHubIcon } from './GitHubIcon';
import NextLink from 'next/link';

export const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      as="header"
      justifyContent="space-between"
      alignItems="stretch"
      marginX={-3}
    >
      <Stack direction="row" alignItems="center">
        <NextLink href="/" passHref>
          <Link variant="header">/</Link>
        </NextLink>

        <NextLink href="/blog" passHref>
          <Link variant="header">/blog</Link>
        </NextLink>
      </Stack>

      <Stack alignItems="center" direction="row" spacing={3}>
        <Link
          aria-label="My GitHub profile"
          href="https://github.com/rafaelalmeidatk"
          isExternal
          color="currentColor"
          transition="opacity .2s ease"
          opacity={0.7}
          _hover={{ opacity: 0.9 }}
        >
          <GitHubIcon boxSize={7} />
        </Link>

        <IconButton
          onClick={toggleColorMode}
          aria-label={`Switch to ${
            colorMode === 'light' ? 'dark' : 'light'
          } mode`}
          icon={
            colorMode === 'light' ? (
              <MoonIcon boxSize={7} />
            ) : (
              <SunIcon boxSize={7} />
            )
          }
          variant="ghost"
          transition="opacity .2s ease"
          opacity={0.7}
          _hover={{ opacity: 0.9 }}
        />
      </Stack>
    </Flex>
  );
};
