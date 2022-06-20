import { Flex, Link, chakra } from '@chakra-ui/react';

export const Header = () => {
  return (
    <Flex
      as="header"
      justifyContent="space-between"
      alignItems="stretch"
      marginX={-3}
    >
      <Link variant="header">/</Link>

      <Flex>
        <Link variant="header" mr={1}>
          /blog
        </Link>
        <Link variant="header">/github</Link>
      </Flex>
    </Flex>
  );
};
