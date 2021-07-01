import React, { FC, useEffect, useState } from 'react';
import { Image } from '@chakra-ui/react';
import type { SwitcherSound, SwitcherProps } from './types';

const Switcher: FC<SwitcherProps> = ({ isOn, onSwitcherClick }) => {
  const [switcherSound, setSwitcherSound] = useState<SwitcherSound | null>(
    null
  );

  useEffect(() => {
    setSwitcherSound({
      turnOn: new Audio('/sounds/turnOn.mp3'),
      turnOff: new Audio('/sounds/turnOff.mp3'),
    });
  }, []);

  const onClick = (): void => {
    if (isOn) {
      switcherSound?.turnOff.play();
    } else {
      switcherSound?.turnOn.play();
    }

    onSwitcherClick();
  };

  return (
    <Image
      src={isOn ? '/pngs/on.png' : '/pngs/off.png'}
      alt="light switch"
      ignoreFallback
      onClick={onClick}
    />
  );
};

export default Switcher;
