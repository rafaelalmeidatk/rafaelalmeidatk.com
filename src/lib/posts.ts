import fs from 'fs';
import { join } from 'path';

const postsDirectory = join(process.cwd(), 'src/pages/blog');

export type Post = {
  slug: string;
  title: string;
  date: string;
  link: string;
};

export const getAllPostsSlug = () => {
  return (
    fs
      .readdirSync(postsDirectory)
      // ignore index file
      .filter((filename) => filename !== 'index.tsx')
      // remove .mdx extension from filename
      .map((filename) => filename.replace(/\.mdx$/, ''))
  );
};

export const getPostBySlug = (slug: string): Post => {
  const pageModule = require(`../pages/blog/${slug}.mdx`);

  return {
    slug,
    title: pageModule.meta.title,
    date: pageModule.meta.date,
    link: `/blog/${slug}`,
  };
};

export const getAllPosts = () => {
  const slugs = getAllPostsSlug();

  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

  return posts;
};
