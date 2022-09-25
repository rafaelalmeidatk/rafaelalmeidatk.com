import React from 'react';
import assert from 'assert';
import { MDXProvider, MDXProviderComponents } from '@mdx-js/react';
import { Seo } from '../Seo';
import CodeBlock from './markdown/CodeBlock';
import { PostHeading } from './markdown/PostHeading';
import { Layout } from '../Layout';
import { Header } from '../Header';
import { Heading } from '../Heading';
import { formatPostDate } from '../../lib/postTime';
import { Link } from '../Link';

const markdownComponents: MDXProviderComponents = {
  a: Link,
  pre: (props) => (
    <div className="mt-3 -mx-4 rounded-none md:rounded-xl md:mx-0" {...props} />
  ),
  h2: (props) => <PostHeading htmlTag="h2" className="text-3xl" {...props} />,
  code: CodeBlock,
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
  assert(meta.title, 'The post is missing a title!');
  assert(meta.description, 'The post is missing a description!');
  assert(meta.date, 'The post is missing a date!');

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
            <section className="prose prose-lg dark:prose-dark max-w-none">
              {children}
            </section>
          </MDXProvider>
        </article>
      </Layout>
    </>
  );
};
