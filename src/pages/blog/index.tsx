import React from 'react';
import { GetStaticProps } from 'next';
import BlogHeader from '../../components/blog/Header';
import BlogLayout from '../../components/blog/Layout';
import BlogPostsList from '../../components/blog/BlogPostsList';
import { Post, getAllPosts } from '../../lib/posts';
import BlogPageTitle from '../../components/blog/PageTitle';
import Seo from '../../components/Seo';

type BlogProps = {
  posts: Post[];
};

const Blog = ({ posts }: BlogProps) => (
  <>
    <Seo title="Blog" description="My blog posts" />

    <BlogLayout>
      <BlogHeader />

      <main>
        <BlogPageTitle />

        <BlogPostsList posts={posts} />
      </main>
    </BlogLayout>
  </>
);

export default Blog;

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts();

  return {
    props: {
      posts,
    },
  };
};