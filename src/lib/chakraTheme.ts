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
  colors: {
    darkBg: '#141414',
  },
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        bg: mode('white', 'darkBg')(props),
      },
    }),
  },
  components: {
    Heading: {
      baseStyle: {
        fontWeight: 'semibold',
      },
    },
    Link: {
      baseStyle: (props: StyleFunctionProps) => ({
        color: mode('blue.600', 'blue.200')(props),
        fontWeight: 'semibold',
      }),
      variants: {
        header: (props: StyleFunctionProps) => ({
          color: mode('blackAlpha.900', 'white')(props),
          fontFamily: 'monospace',
          fontWeight: 'normal',
          textDecoration: 'underline',
          paddingX: 3,
          paddingY: 1,
          fontSize: 'md',
          transition: 'opacity 0.2s ease',
          _hover: {
            opacity: 0.8,
            textDecoration: 'none',
          },
        }),
      },
    },
  },
});

export default theme;
