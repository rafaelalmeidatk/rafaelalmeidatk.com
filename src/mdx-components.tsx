import type { MDXComponents } from 'mdx/types';
import { PostHeading } from './components/markdown/PostHeading';
import { Link } from './components/Link';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a: (props) => <Link href={props.href ?? ''} {...props} />,
    h2: ({ children, ...props }) => (
      <PostHeading
        htmlTag="h2"
        className="text-3xl"
        children={children?.toString() ?? ''}
        {...props}
      />
    ),
    ...components,
  };
}
