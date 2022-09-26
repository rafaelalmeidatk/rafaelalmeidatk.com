import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { MDXComponents } from 'mdx/types';
import { Seo } from '../Seo';
import { PostHeading } from './markdown/PostHeading';
import { Layout } from '../Layout';
import { Header } from '../Header';
import { Heading } from '../Heading';
import { formatPostDate } from '../../lib/postTime';
import { Link } from '../Link';

const markdownComponents: MDXComponents = {
  a: (props) => <Link href={props.href ?? ''} {...props} />,
  h2: ({ children, ...props }) => (
    <PostHeading
      htmlTag="h2"
      className="text-3xl"
      children={children?.toString() ?? ''}
      {...props}
    />
  ),
};

type PostProps = {
  meta: {
    title: string;
    description: string;
    date: string;
  };
  children: React.ReactNode;
};

export const Post = ({ children, meta }: PostProps) => {
  return (
    <>
      <Seo title={meta.title} description={meta.description} isPost />

      <Layout>
        <Header />

        <article>
          <header className="mt-14 mb-8 text-center">
            <Heading as="h1">{meta.title}</Heading>
            <time
              className="block mt-1.5 text-md opacity-80"
              dateTime={meta.date}
            >
              {formatPostDate(meta.date)}
            </time>
          </header>

          <MDXProvider components={markdownComponents}>
            <section className="prose text-lg dark:prose-dark max-w-none">
              {children}
            </section>
          </MDXProvider>
        </article>
      </Layout>
    </>
  );
};
