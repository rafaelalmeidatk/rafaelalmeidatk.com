import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { Seo } from '../components/Seo';
import chakraTheme from '../lib/chakraTheme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={chakraTheme}>
      <Seo description="Software Developer, learning how to break stuff in different ways" />

      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
