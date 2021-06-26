import React, { FC, useState } from 'react';
import { Center } from '@chakra-ui/react';
import { LightSwitch } from '@components';

const GameWithLight: FC = () => {
  const [areLightsOn, setAreLightsOn] = useState<boolean>(false);

  const handleLightSwitchClick = (): void => {
    setAreLightsOn((prevAreLightsOn) => !prevAreLightsOn);
  };

  return (
    <Center height="100vh" backgroundColor={areLightsOn ? 'black' : 'white'}>
      <LightSwitch
        areLightsOn={areLightsOn}
        onLightSwitchClick={handleLightSwitchClick}
      />
    </Center>
  );
};

export default GameWithLight;
