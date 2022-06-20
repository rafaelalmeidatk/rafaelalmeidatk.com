import { extendTheme, ThemeConfig } from '@chakra-ui/react';
import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools';

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
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        bg: mode('white', 'blackAlpha.900')(props),
      },
    }),
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
