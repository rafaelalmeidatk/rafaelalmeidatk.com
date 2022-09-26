import { Link } from '../../Link';
import slugify from 'slugify';

type PostHeadingProps = {
  htmlTag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
  children: string;
};

export const PostHeading = ({
  htmlTag: Tag,
  className,
  children,
}: PostHeadingProps) => {
  const id = slugify(children, { lower: true });

  return (
    <Tag id={id} className={className}>
      <Link
        href={`#${id}`}
        variant="text"
        className="relative hover:before:content-['#'] hover:before:absolute hover:before:left-[-1.5ch]"
      >
        {children}
      </Link>
    </Tag>
  );
};
