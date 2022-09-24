import clsx from 'clsx';
import { Post } from '../lib/posts';
import { formatPostDateShort } from '../lib/postTime';
import { Link } from './Link';

type BlogPostsListProps = {
  posts: Post[];
  size: 'compact' | 'full';
};

export const BlogPostsList = ({ posts, size }: BlogPostsListProps) => {
  return (
    <ul className="mt-5 space-y-1 divide-y divide-neutral-800">
      {posts.map((post, i) => (
        <li
          key={post.slug}
          className={clsx(
            'py-1.5 transition-opacity hover:opacity-70',
            size === 'compact' ? 'text-md' : 'text-xl'
          )}
        >
          <Link href={post.link} className="text-current font-normal">
            <div className="flex flex-col sm:flex-row py-2 sm:items-center">
              <div className="flex-1 mr-3 truncate">{post.title}</div>
              <span className="shrink-0">{formatPostDateShort(post.date)}</span>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};
