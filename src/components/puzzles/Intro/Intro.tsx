import React from 'react';
import type { FC } from 'react';
import { useRouter } from 'next/router';
import { Box, Center } from '@chakra-ui/react';
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
      <Switcher
        withDelayedFadeInAnimation
        onSwitcherClick={handleSwitcherClick}
      />
    </Center>
  );
};

export default Intro;
