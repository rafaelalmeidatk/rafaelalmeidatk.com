import { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { Seo } from '../components/Seo';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider defaultTheme="dark" attribute="class">
      <Seo description="Software Engineer building full-stack web applications with React, Node.js, TypeScript, and PostgreSQL" />

      {/* @ts-expect-error: this is gonna be fixed once I move to the app dir */}
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
