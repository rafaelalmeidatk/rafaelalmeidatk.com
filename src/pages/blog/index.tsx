import React from 'react';
import { GetStaticProps } from 'next';
import { Post, getAllPosts } from '../../lib/posts';
import Seo from '../../components/Seo';
import { Layout } from '../../components/Layout';
import { Header } from '../../components/Header';
import { BlogPostsList } from '../../components/BlogPostsList';
import { Box, Heading } from '@chakra-ui/react';

export const config = {
  unstable_runtimeJS: false,
};

type BlogProps = {
  posts: Post[];
};

const Blog = ({ posts }: BlogProps) => (
  <Layout>
    <Seo title="Blog" description="My blog posts" />

    <Header />

    <Box flex="1 1 auto">
      <Heading as="h1" mt={14} mb={8} textAlign="center">
        Blog posts
      </Heading>

      <BlogPostsList posts={posts} size="full" />
    </Box>
  </Layout>
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
