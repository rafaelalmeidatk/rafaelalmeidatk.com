import React from 'react';
import { GetStaticProps } from 'next';
import { Post, getAllPosts } from '../../lib/posts';
import { Seo } from '../../components/Seo';
import { Layout } from '../../components/Layout';
import { Header } from '../../components/Header';
import { Heading } from '../../components/Heading';
import { BlogPostsList } from '../../components/BlogPostsList';

type BlogProps = {
  posts: Post[];
};

const Blog = ({ posts }: BlogProps) => (
  <Layout>
    <Seo title="Blog" description="My blog posts" />

    <Header />

    <div className="flex-1">
      <Heading
        as="h1"
        className="mt-4 sm:mt-8 md:mt-14 mb-4 md:mb-8 text-center"
      >
        Blog posts
      </Heading>

      <BlogPostsList posts={posts} size="full" />
    </div>
  </Layout>
);

export default Blog;

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts();

  return {
    props: {
      posts,
    },
  };
};
