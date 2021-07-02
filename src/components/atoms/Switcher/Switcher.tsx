import React, { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import SwitcherOn from '@svgs/on.svg';
import SwitcherOff from '@svgs/off.svg';
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
      layout="fill"
      src={isOn ? SwitcherOn : SwitcherOff}
      alt="light switch"
      onClick={onClick}
    />
  );
};

export default Switcher;
