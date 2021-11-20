import { ColorModeScript } from '@chakra-ui/react';
import { theme } from '@styles';
import NextDocument, { Head, Html, Main, NextScript } from 'next/document';
import type { ReactElement } from 'react';
import React from 'react';

export default class Document extends NextDocument {
  render(): ReactElement {
    return (
      <Html lang="en">
        <Head />
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
