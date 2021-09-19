import React, { memo, useEffect, useState } from 'react';
import type { FC } from 'react';
import { Fade, Img, useColorMode } from '@chakra-ui/react';
import { FADE_DELAY, FADE_DURATION } from '@constants';
import { ConditionalFade } from '../ConditionalFade';
import type { SwitcherProps, SwitcherSound } from './Switcher.types';

const Switcher: FC<SwitcherProps> = ({
  withDelayedFadeInAnimation,
  onSwitcherClick,
}) => {
  const [switcherSound, setSwitcherSound] = useState<SwitcherSound | null>(
    null
  );

  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    setSwitcherSound({
      turnOn: new Audio('/sounds/turnOn.mp3'),
      turnOff: new Audio('/sounds/turnOff.mp3'),
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
        src={colorMode === 'light' ? '/svgs/on.svg' : '/svgs/off.svg'}
        alt="light switch"
        width="50px"
        cursor="pointer"
        onClick={onClick}
      />
    </ConditionalFade>
  );
};

export default memo(Switcher);
