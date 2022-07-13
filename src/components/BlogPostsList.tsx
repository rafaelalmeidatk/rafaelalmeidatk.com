import {
  List,
  ListItem,
  Stack,
  Text,
  chakra,
  Box,
  BoxProps,
  useColorModeValue,
} from '@chakra-ui/react';
import { Post } from '../lib/posts';
import { formatPostDateShort } from '../lib/postTime';
import NextLink from 'next/link';

type BlogPostsListProps = BoxProps & {
  posts: Post[];
  size: 'compact' | 'full';
};

export const BlogPostsList = ({
  posts,
  size,
  ...props
}: BlogPostsListProps) => {
  const borderColor = useColorModeValue('gray.800', 'whiteAlpha.200');

  return (
    <Box {...props}>
      <List mt={5} spacing={1}>
        {posts.map((post, i) => (
          <ListItem
            key={post.slug}
            as="li"
            py={1.5}
            fontSize={size === 'compact' ? 'md' : 'xl'}
            transition="opacity 0.2s ease"
            _hover={{ opacity: 0.7 }}
            borderBottom={i !== posts.length - 1 ? '1px solid' : undefined}
            borderColor={borderColor}
          >
            <NextLink href={post.link}>
              <a>
                <Stack
                  direction={['column', 'row']}
                  spacing={0}
                  py={2}
                  alignItems={['unset', 'center']}
                >
                  <Text
                    flex={1}
                    mr={3}
                    noOfLines={size === 'compact' ? 1 : undefined}
                  >
                    {post.title}
                  </Text>
                  <chakra.span flexShrink={0} fontSize="md">
                    {formatPostDateShort(post.date)}
                  </chakra.span>
                </Stack>
              </a>
            </NextLink>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
