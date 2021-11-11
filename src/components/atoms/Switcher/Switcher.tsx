import { Fade, Img, useColorMode } from '@chakra-ui/react';
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
      <Img
        alt="light switch"
        cursor="pointer"
        onClick={onClick}
        src={colorMode === 'light' ? '/svgs/on.svg' : '/svgs/off.svg'}
        width="50px"
      />
    </ConditionalFade>
  );
};

export default memo(Switcher);
