import React, { FC, useEffect, useState } from 'react';
import { Img } from '@chakra-ui/react';
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
    <>
      <Img
        width="100px"
        height="auto"
        display={isOn ? 'block' : 'none'}
        src="/svgs/on.svg"
        alt="light switch"
        onClick={onClick}
      />
      <Img
        width="100px"
        height="auto"
        display={isOn ? 'none' : 'block'}
        src={isOn ? '/svgs/on.svg' : '/svgs/off.svg'}
        alt="light switch"
        onClick={onClick}
      />
    </>
  );
};

export default Switcher;
