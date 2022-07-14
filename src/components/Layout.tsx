import { Container } from '@chakra-ui/react';

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Container marginY={[4, 8, 14]} maxW="70ch">
      {children}
    </Container>
  );
};
