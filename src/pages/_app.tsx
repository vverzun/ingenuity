/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import type { FC } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '@styles';
import '@fontsource/major-mono-display';

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Ingenuity</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  </>
);

export default App;
