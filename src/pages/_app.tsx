/* eslint-disable react/jsx-props-no-spreading */
import '@fontsource/major-mono-display';

import { ChakraProvider } from '@chakra-ui/react';
import { FADE_DURATION } from '@constants';
import { theme } from '@styles';
import { AnimatePresence, motion } from 'framer-motion';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import type { FC } from 'react';
import React from 'react';

const App: FC<AppProps> = ({ Component, pageProps, router }) => {
  const routeChangeAnimationVariants = {
    animate: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
    initial: {
      opacity: 0,
    },
  };

  return (
    <>
      <Head>
        <title>Ingenuity</title>
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <ChakraProvider theme={theme}>
        <AnimatePresence exitBeforeEnter>
          <motion.div
            key={router.route}
            animate="animate"
            exit="exit"
            initial="initial"
            transition={{ duration: FADE_DURATION }}
            variants={routeChangeAnimationVariants}
          >
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </ChakraProvider>
    </>
  );
};

export default App;
