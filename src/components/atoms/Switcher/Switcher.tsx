import { Box, Fade, Img, useColorMode } from '@chakra-ui/react';
import { FADE_DELAY, FADE_DURATION } from '@constants';
import type { FC } from 'react';
import React, { memo, useEffect, useState } from 'react';

import { ConditionalFade } from '../ConditionalFade';
import type { SwitcherProps, SwitcherSound } from './Switcher.types';

const Switcher: FC<SwitcherProps> = ({
  onSwitcherClick,
  withDelayedFadeInAnimation,
}) => {
  const [switcherSound, setSwitcherSound] = useState<SwitcherSound | null>(
    null
  );

  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    setSwitcherSound({
      turnOff: new Audio('/sounds/turnOff.mp3'),
      turnOn: new Audio('/sounds/turnOn.mp3'),
    });
  }, []);

  const onClick = (): void => {
    if (colorMode === 'light') {
      switcherSound?.turnOff.play();
    } else {
      switcherSound?.turnOn.play();
    }

    onSwitcherClick();
    toggleColorMode();
  };

  return (
    <ConditionalFade
      condition={withDelayedFadeInAnimation ?? false}
      container={(children) => (
        <Fade
          in
          transition={{ enter: { delay: FADE_DELAY, duration: FADE_DURATION } }}
        >
          {children}
        </Fade>
      )}
    >
      {/* // TODO-VV: hack for pre-fetching image */}
      <Box position="relative">
        <Img
          alt="light switch"
          cursor="pointer"
          height="85px"
          onClick={onClick}
          position="absolute"
          src="/svgs/off.svg"
          visibility={colorMode === 'dark' ? 'visible' : 'hidden'}
          width="50px"
        />
        <Img
          alt="light switch"
          cursor="pointer"
          height="85px"
          onClick={onClick}
          src="/svgs/on.svg"
          visibility={colorMode === 'light' ? 'visible' : 'hidden'}
          width="50px"
        />
      </Box>
    </ConditionalFade>
  );
};

export default memo(Switcher);
