import { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { Seo } from '../components/Seo';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider defaultTheme="dark" attribute="class">
      <Seo description="Software Engineer building full-stack web applications with React, Node.js, TypeScript, and PostgreSQL" />

      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
