import React from 'react';
import {
  Text,
  Container,
  Heading,
  Stack,
  SimpleGrid,
  GridItem,
  Flex,
  ListItem,
  Link,
  List,
  chakra,
  LinkBox,
  LinkOverlay,
  keyframes,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { getAllPosts, Post } from '../lib/posts';
import { formatPostDateShort } from '../lib/postTime';
import { GetStaticProps } from 'next';
import NextLink from 'next/link';
import { Header } from '../components/Header';

const projects = [
  {
    id: 'twitter-fullstack-clone',
    title: 'Twitter Fullstack Clone',
    link: 'https://github.com/rafaelalmeidatk/twitter-fullstack-clone',
    description:
      'Fullstack clone of Twitter, created with React, Next.js, Apollo, Node.js, Express, GraphQL, PostgreSQL, and Docker',
  },
  {
    id: 'discord-react-clone',
    title: 'Discord React Clone',
    link: 'https://github.com/rafaelalmeidatk/discord-react-clone',
    description: "Front-end replication of Discord's app made with React",
  },
  {
    id: 'hitbox',
    title: 'Hitbox',
    link: 'https://github.com/rafaelalmeidatk/hitbox',
    description:
      'Program for creating animations based on a sprite sheet, you can edit the frames and colliders and see the results in real time',
  },
  {
    id: 'super-pete',
    title: 'Super Pete The Pirate',
    link: 'https://github.com/rafaelalmeidatk/Super-Pete-The-Pirate',
    description: 'Source code of the game "Super Pete, The Pirate"',
  },
];

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

      <Text fontSize="2xl" mt={14}>
        Hi there,
      </Text>
      <Heading as="h1" fontSize="5xl">
        I'm{' '}
        <chakra.span
          bg="linear-gradient(90deg,#ff4d4d,#f9cb28)"
          bgClip="text"
          bgSize="200%"
          sx={{ WebkitTextFillColor: 'transparent' }}
          animation={`${gradientText} 10s linear infinite`}
        >
          Rafael Almeida
        </chakra.span>{' '}
        👋
      </Heading>
      <Text mt={3} opacity={0.8}>
        Software Engineer building full-stack web applications with React,
        Node.js, TypeScript, and PostgreSQL. I like to hang out in Discord
        communities to help other developers, you will probably find me in{' '}
        <Link href="https://www.reactiflux.com/" isExternal>
          Reactiflux
        </Link>{' '}
        or the{' '}
        <Link href="https://nextjs.org/discord" isExternal>
          Next.js Discord
        </Link>
      </Text>

      <Heading mt={12}>Projects</Heading>

      <SimpleGrid mt={5} spacing={6} columns={[1, 2]}>
        {projects.map((project) => (
          <GridItem
            key={project.id}
            as={LinkBox}
            role="group"
            border="1px solid"
            borderColor="gray.700"
            borderRadius="md"
            py={3}
            px={4}
            position="relative"
            top={0}
            transition="all 0.2s ease"
            _hover={{
              top: '-2px',
              opacity: 0.9,
            }}
          >
            <Flex alignItems="center">
              <Text fontSize="lg" fontWeight="semibold">
                <LinkOverlay href={project.link} isExternal>
                  {project.title}
                </LinkOverlay>
              </Text>

              <ExternalLinkIcon
                ml={2}
                boxSize={3}
                opacity={0}
                transition="opacity .2s ease"
                _groupHover={{ opacity: 1 }}
              />
            </Flex>
            <Text fontSize="sm" opacity={0.8} pointerEvents="none">
              {project.description}
            </Text>
          </GridItem>
        ))}
      </SimpleGrid>

      <Heading mt={12}>Blog</Heading>

      <List
        mt={3}
        spacing={1}
        border="1px solid"
        borderColor="gray.700"
        borderRadius="md"
      >
        {posts.map((post) => (
          <ListItem
            key={post.slug}
            as="li"
            py={1.5}
            px={3}
            fontSize="lg"
            transition="opacity 0.2s ease"
            _hover={{ opacity: 0.7 }}
            borderBottom="1px solid"
            borderColor="gray.700"
          >
            <NextLink href={post.link}>
              <a>
                <Stack direction={['column', 'row']} spacing={0} py={2}>
                  <Text flex={1} mr={3} noOfLines={1}>
                    {post.title}
                  </Text>
                  <chakra.span flexShrink={0}>
                    {formatPostDateShort(post.date)}
                  </chakra.span>
                </Stack>
              </a>
            </NextLink>
          </ListItem>
        ))}
      </List>
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
