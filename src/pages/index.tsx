import React from 'react';
import {
  Text,
  Container,
  Heading,
  Stack,
  Link,
  chakra,
  keyframes,
  Box,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { getAllPosts, Post } from '../lib/posts';
import { GetStaticProps } from 'next';
import { Header } from '../components/Header';
import { Projects } from '../components/Projects';
import { BlogPostsList } from '../components/BlogPostsList';

const gradientText = keyframes`
  0% { background-position: 0 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0 50%; }
`;

type HomeProps = {
  posts: Post[];
};

const Home = ({ posts }: HomeProps) => {
  return (
    <Container marginY={[14, 14]} maxW="70ch">
      <Header />

      <Stack spacing={12} mt={14}>
        <Box>
          <Text fontSize="2xl">Hi there,</Text>
          <Heading as="h1" fontSize="5xl">
            I'm{' '}
            <chakra.span
              // yeah I got these colors from Vercel :P
              bg="linear-gradient(90deg, #ff4d4d, #f9cb28)"
              bgClip="text"
              bgSize="200%"
              sx={{ WebkitTextFillColor: 'transparent' }}
              animation={`${gradientText} 10s linear infinite`}
            >
              Rafael Almeida
            </chakra.span>{' '}
            ✌
          </Heading>
          <Text opacity={0.8}>
            I'm a Software Engineer building full-stack web applications with
            React, Node.js, TypeScript, and PostgreSQL. I like to hang out in
            Discord communities to help other developers, you will probably find
            me in{' '}
            <Link href="https://www.reactiflux.com/" isExternal>
              Reactiflux
            </Link>{' '}
            or the{' '}
            <Link href="https://nextjs.org/discord" isExternal>
              Next.js Discord
            </Link>
          </Text>
        </Box>

        <Projects />

        <Box>
          <Heading>
            <NextLink href="/blog" passHref>
              <Link color="inherit">Blog</Link>
            </NextLink>
          </Heading>
          <BlogPostsList posts={posts} size="compact" />
        </Box>
      </Stack>
    </Container>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<{ posts: Post[] }> = async () => {
  const posts = getAllPosts();

  return {
    props: {
      posts,
    },
  };
};
