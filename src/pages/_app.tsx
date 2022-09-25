import { AppProps } from 'next/app';
// import { ChakraProvider } from '@chakra-ui/react';
import { ThemeProvider } from 'next-themes';
import { Seo } from '../components/Seo';
import chakraTheme from '../lib/chakraTheme';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider defaultTheme="dark" attribute="class">
      {/* <ChakraProvider theme={chakraTheme}> */}
      <Seo description="Software Engineer building full-stack web applications with React, Node.js, TypeScript, and PostgreSQL" />

      <Component {...pageProps} />
      {/* </ChakraProvider> */}
    </ThemeProvider>
  );
}

export default MyApp;
