import Head from 'next/head';
import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import Seo from '../components/Seo';
import chakraTheme from '../lib/chakraTheme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={chakraTheme}>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Seo description="Software Developer, learning how to break stuff in different ways" />

      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
