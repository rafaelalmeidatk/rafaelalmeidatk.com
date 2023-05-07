import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from './providers';

import './globals.css';
import { Header } from '../components/Header';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

const title: Metadata['title'] = {
  template: '%s | Rafael Almeida',
  default: 'Rafael Almeida',
};

const description =
  'Software Engineer building full-stack web applications with React, Node.js, TypeScript, and PostgreSQL';

export const metadata: Metadata = {
  metadataBase: new URL('https://rafaelalmeidatk.com'),
  title,
  description,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title,
    description,
    siteName: 'Rafael Almeida',
    locale: 'en_US',
    type: 'website',
    url: '/',
  },
  twitter: {
    title,
    description,
    card: 'summary',
    site: '@rafaelalmeidatk',
    creator: '@rafaelalmeidatk',
  },
};

type RootLayoutProps = { children: React.ReactNode };

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html
      lang="en"
      className={inter.className}
      // next-themes updates this element
      suppressHydrationWarning
    >
      <body className="text-gray-900 dark:text-gray-200">
        <div className="px-4 mx-auto max-w-[75ch] my-4 sm:my-8 md:my-14">
          <Header />

          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
