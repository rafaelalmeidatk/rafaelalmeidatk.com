import React from 'react';
import Head from 'next/head';
import BlogWrapper from '../Blog/BlogWrapper';
import BlogHeader from '../Blog/BlogHeader';
import PostHeader from './PostHeader';
import styles from './Post.module.css';

type PostProps = {
  meta: {
    title: string;
    date: number;
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

        <section className={styles.post}>{children}</section>
      </article>
    </BlogWrapper>
  </>
);

export default Post;
