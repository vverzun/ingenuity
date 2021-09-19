import React from 'react';
import type { FC } from 'react';
import { useRouter } from 'next/router';
import { Box, Center, Fade } from '@chakra-ui/react';
import { Switcher, TypingAnimationText } from '@atoms';

const Intro: FC = () => {
  const router = useRouter();

  const handleSwitcherClick = (): void => {
    router.replace('hidden-letters');
  };

  return (
    <Center height="100vh" flexDirection="column">
      <Box marginBottom="60px">
        <TypingAnimationText text="It's dark in here." />
      </Box>
      <Fade in transition={{ enter: { delay: 3, duration: 2 } }}>
        <Switcher onSwitcherClick={handleSwitcherClick} />
      </Fade>
    </Center>
  );
};

export default Intro;
