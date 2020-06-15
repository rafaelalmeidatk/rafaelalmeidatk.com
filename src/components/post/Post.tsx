import React from 'react';
import assert from 'assert';
import { MDXProvider } from '@mdx-js/react';
import BlogLayout from '../blog/Layout';
import BlogHeader from '../blog/Header';
import Seo from '../Seo';
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
    description: string;
    date: string;
  };
  children: React.ReactNode;
};

const Post = ({ children, meta }: PostProps) => {
  assert(meta.title, 'The post is missing a title!');
  assert(meta.description, 'The post is missing a description!');
  assert(meta.date, 'The post is missing a date!');

  return (
    <>
      <Seo title={meta.title} description={meta.description} isPost />

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
};

export default Post;
