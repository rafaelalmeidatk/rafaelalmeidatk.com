import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { Seo } from '../components/Seo';
import chakraTheme from '../lib/chakraTheme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={chakraTheme}>
      <Seo description="Software Engineer building full-stack web applications with React, Node.js, TypeScript, and PostgreSQL" />

      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
