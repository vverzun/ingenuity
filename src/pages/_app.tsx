/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import type { FC } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { AnimatePresence, motion } from 'framer-motion';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '@styles';
import '@fontsource/major-mono-display';

const App: FC<AppProps> = ({ Component, pageProps, router }) => {
  const routeChangeAnimationVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  };

  return (
    <>
      <Head>
        <title>Ingenuity</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ChakraProvider theme={theme}>
        <AnimatePresence exitBeforeEnter>
          <motion.div
            key={router.route}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 2 }}
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
