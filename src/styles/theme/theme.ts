import type { ThemeConfig } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import type { StyleFunctionProps } from '@chakra-ui/theme-tools';
import { mode } from '@chakra-ui/theme-tools';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      backgroundColor: mode('white', 'black')(props),
      transition: 'background-color 0.2s ease',
    },
    div: {
      transition:
        'background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease',
    },
  }),
};

const theme = extendTheme({
  config,
  fonts: {
    body: 'Major Mono Display',
    heading: 'Major Mono Display',
  },
  styles,
});

export default theme;
