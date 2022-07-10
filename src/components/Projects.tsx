import { ExternalLinkIcon } from '@chakra-ui/icons';
import {
  Box,
  BoxProps,
  Flex,
  GridItem,
  Heading,
  LinkBox,
  LinkOverlay,
  SimpleGrid,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

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

export const Projects = (props: BoxProps) => {
  const borderColor = useColorModeValue('gray.800', 'whiteAlpha.200');

  return (
    <Box {...props}>
      <Heading>Projects</Heading>

      <SimpleGrid mt={5} spacing={6} columns={[1, 2]}>
        {projects.map((project) => (
          <GridItem
            key={project.id}
            as={LinkBox}
            role="group"
            border="1px solid"
            borderColor={borderColor}
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
    </Box>
  );
};
