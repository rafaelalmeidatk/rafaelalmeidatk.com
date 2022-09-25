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
  pre: (props) => <div className="mt-3 -mx-4 md:mx-0" {...props} />,
  h2: (props) => (
    <PostHeading
      htmlTag="h2"
      className="mt-10 mb-4 text-3xl font-semibold"
      {...props}
    />
  ),
  p: (props) => <p className="mt-3 text-lg leading-relaxed" {...props} />,
  code: CodeBlock,
  blockquote: (props) => (
    <blockquote
      className="mt-3 px-3 border-l-4 border-l-neutral-800 italic"
      {...props}
    />
  ),
  ul: (props) => (
    <ul className="list-disc mt-3 pl-8 text-lg space-y-3" {...props} />
  ),
  ol: (props) => (
    <ol className="list-decimal mt-3 pl-8 text-lg space-y-3" {...props} />
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
            <section className="[&_code]:bg-neutral-800 [&_code]:text-sm [&_code]:font-semibold [&_code]:py-1 [&_code]:px-1.5">
              {children}
            </section>
          </MDXProvider>
        </article>
      </Layout>
    </>
  );
};
