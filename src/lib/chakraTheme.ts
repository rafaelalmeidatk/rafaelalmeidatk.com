import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  fonts: {
    heading: 'Inter, Helvetica, system-ui, sans-serif',
    body: 'Inter, Helvetica, system-ui, sans-serif',
  },
  components: {
    Heading: {
      baseStyle: {
        fontWeight: 'semibold',
      },
    },
  },
});

export default theme;
