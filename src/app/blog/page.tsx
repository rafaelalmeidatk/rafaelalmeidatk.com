import React from 'react';
import { getAllPosts } from '../../lib/posts';
import { Heading } from '../../components/Heading';
import { BlogPostsList } from '../../components/BlogPostsList';
import { ResolvingMetadata } from 'next';
import { createMetadata } from '../../lib/metadata';

export const generateMetadata = async (
  props: unknown,
  parent: ResolvingMetadata
) => {
  const parentMetadata = await parent;
  return createMetadata(
    {
      title: 'Blog',
      path: '/blog',
    },
    parentMetadata
  );
};

const Blog = async () => {
  const posts = await getAllPosts();

  return (
    <div className="flex-1">
      <Heading
        as="h1"
        className="mt-4 sm:mt-8 md:mt-14 mb-4 md:mb-8 text-center"
      >
        Blog posts
      </Heading>

      <BlogPostsList posts={posts} size="full" />
    </div>
  );
};

export default Blog;
