import React, { FC, useEffect, useState } from 'react';
import { Center } from '@chakra-ui/react';
import { LightSwitch, RandomlyPositionedLetter } from '@components';
import type { LightSwitchSound } from './types';

const GameWithLight: FC = () => {
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
      <RandomlyPositionedLetter letter="S" />
      <RandomlyPositionedLetter letter="E" />
      <RandomlyPositionedLetter letter="Q" />
      <RandomlyPositionedLetter letter="U" />
      <RandomlyPositionedLetter letter="A" />
      <RandomlyPositionedLetter letter="N" />
      <RandomlyPositionedLetter letter="C" />
      <RandomlyPositionedLetter letter="E" />
    </Center>
  );
};

export default GameWithLight;
