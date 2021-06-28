import React, { FC, useEffect, useState } from 'react';
import { Center } from '@chakra-ui/react';
import { LightSwitch } from '@components';
import type { LightSwitchSound } from './types';

const FirstPuzzle: FC = () => {
  const [areLightsOn, setAreLightsOn] = useState<boolean>(false);
  const [lightSwitchSound, setLightSwitchSound] =
    useState<LightSwitchSound | null>(null);

  useEffect(() => {
    setLightSwitchSound({
      turnOn: new Audio('/sounds/turnOn.mp3'),
      turnOff: new Audio('/sounds/turnOff.mp3'),
    });
  }, []);

  const handleLightSwitchClick = (): void => {
    setAreLightsOn((prevAreLightsOn) => !prevAreLightsOn);

    if (areLightsOn) {
      lightSwitchSound?.turnOff.play();
    } else {
      lightSwitchSound?.turnOn.play();
    }
  };

  return (
    <Center
      height="100vh"
      backgroundColor={areLightsOn ? 'black' : 'white'}
      position="relative"
    >
      <LightSwitch
        areLightsOn={areLightsOn}
        onLightSwitchClick={handleLightSwitchClick}
      />
    </Center>
  );
};

export default FirstPuzzle;
