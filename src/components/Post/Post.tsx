import React from 'react';
import Head from 'next/head';
import { MDXProvider } from '@mdx-js/react';
import BlogWrapper from '../Blog/BlogWrapper';
import BlogHeader from '../Blog/BlogHeader';
import PostHeader from './PostHeader';
import CodeBlock from './CodeBlock';
import Link from './Link';
import styles from './Post.module.css';

export const config = {
  unstable_runtimeJS: false,
};

const components = {
  a: Link,
  pre: (props: any) => <div {...props} />,
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

    <BlogWrapper>
      <BlogHeader isBlogPost />

      <article>
        <PostHeader title={meta.title} time={meta.date} />

        <MDXProvider components={components}>
          <section className={styles.post}>{children}</section>
        </MDXProvider>
      </article>
    </BlogWrapper>
  </>
);

export default Post;
