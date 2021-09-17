import React, { useEffect, useState } from 'react';
import type { FC } from 'react';
import { Img } from '@chakra-ui/react';
import type { SwitcherSound, SwitcherProps } from './Switcher.types';

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
    <Img
      width="50px"
      src={isOn ? '/svgs/on.svg' : '/svgs/off.svg'}
      alt="light switch"
      onClick={onClick}
    />
  );
};

export default Switcher;
