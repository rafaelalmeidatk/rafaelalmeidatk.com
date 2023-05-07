import fs from 'fs';
import { join } from 'path';

const postsDirectory = join(process.cwd(), 'src/posts');

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

export const getPostBySlug = async (slug: string): Promise<Post> => {
  const pageModule = await import(`../posts/${slug}.mdx`);

  return {
    slug,
    title: pageModule.meta.title,
    date: pageModule.meta.date,
    link: `/blog/${slug}`,
  };
};

export const getAllPosts = async () => {
  const slugs = getAllPostsSlug();

  const posts = await Promise.all(slugs.map((slug) => getPostBySlug(slug)));

  // Sort posts by date in descending order
  posts.sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

  return posts;
};
