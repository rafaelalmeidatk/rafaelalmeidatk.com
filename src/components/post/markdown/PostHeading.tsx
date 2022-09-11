import { As, Box, Link } from '@chakra-ui/react';
import slugify from 'slugify';

type PostHeadingProps = {
  htmlTag: As;
  children: string;
};

export const PostHeading = ({ htmlTag, children }: PostHeadingProps) => {
  const id = slugify(children, { lower: true });

  return (
    <Box as={htmlTag} id={id}>
      <Link
        color="inherit"
        href={`#${id}`}
        position="relative"
        _hover={{
          textDecoration: 'underline',
          _before: {
            content: `'#'`,
            position: 'absolute',
            left: '-1.5ch',
          },
        }}
        _focus={{
          outline: 'none',
          textDecoration: 'underline',
        }}
      >
        {children}
      </Link>
    </Box>
  );
};
