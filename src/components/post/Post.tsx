import React from 'react';
import Head from 'next/head';
import { MDXProvider } from '@mdx-js/react';
import BlogLayout from '../blog/Layout';
import BlogHeader from '../blog/Header';
import PostHeader from './markdown/Heading';
import CodeBlock from './markdown/CodeBlock';
import Link from './markdown/Link';
import styles from './Post.module.css';

const markdownComponents = {
  a: Link,
  pre: (props: React.HTMLProps<HTMLDivElement>) => <div {...props} />,
  code: CodeBlock,
};

type PostProps = {
  meta: {
    title: string;
    date: string;
  };
  children: React.ReactNode;
};

const Post = ({ children, meta }: PostProps) => (
  <>
    <Head>
      <title>{meta.title} | Rafael Almeida</title>
    </Head>

    <BlogLayout>
      <BlogHeader isBlogPost />

      <main>
        <article>
          <PostHeader title={meta.title} time={meta.date} />

          <MDXProvider components={markdownComponents}>
            <section className={styles.post}>{children}</section>
          </MDXProvider>
        </article>
      </main>
    </BlogLayout>
  </>
);

export default Post;
