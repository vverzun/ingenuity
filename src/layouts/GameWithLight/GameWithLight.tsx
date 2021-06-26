import React, { FC, useState } from 'react';
import { Center } from '@chakra-ui/react';
import { Switcher } from '@components';

const GameWithLight: FC = () => {
  const [areLightsOn, setAreLightsOn] = useState<boolean>(false);

  const handleLightsSwitch = (): void => {
    setAreLightsOn((prevAreLightsOn) => !prevAreLightsOn);
  };

  return (
    <Center height="100vh" backgroundColor={areLightsOn ? 'black' : 'white'}>
      <Switcher areLightsOn={areLightsOn} onLightsSwitch={handleLightsSwitch} />
    </Center>
  );
};

export default GameWithLight;
