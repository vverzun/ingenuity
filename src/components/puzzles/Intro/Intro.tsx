import { Switcher, TypingAnimationText } from '@atoms';
import { Box, Center } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import type { FC } from 'react';
import React from 'react';

const Intro: FC = () => {
  const router = useRouter();

  const handleSwitcherClick = (): void => {
    router.replace('hidden-letters');
  };

  return (
    <Center flexDirection="column" height="100vh">
      <Box marginBottom="60px">
        <TypingAnimationText text="It's dark in here." />
      </Box>
      <Switcher
        onSwitcherClick={handleSwitcherClick}
        withDelayedFadeInAnimation
      />
    </Center>
  );
};

export default Intro;
