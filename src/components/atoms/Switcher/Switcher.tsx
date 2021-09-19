import React, { useEffect, useState } from 'react';
import type { FC } from 'react';
import { Img, useColorMode } from '@chakra-ui/react';
import type { SwitcherSound, SwitcherProps } from './Switcher.types';

const Switcher: FC<SwitcherProps> = ({ onSwitcherClick }) => {
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
    <Img
      src={colorMode === 'light' ? '/svgs/on.svg' : '/svgs/off.svg'}
      alt="light switch"
      width="50px"
      cursor="pointer"
      onClick={onClick}
    />
  );
};

export default Switcher;
