import React, { FC, useState } from 'react';
import { Center } from '@chakra-ui/react';
import { Switcher } from '@atoms';

const FirstPuzzle: FC = () => {
  const [areLightsOn, setAreLightsOn] = useState<boolean>(true);

  const handleSwitcherClick = (): void => {
    setAreLightsOn((prevAreLightsOn) => !prevAreLightsOn);
  };

  return (
    <Center height="100vh" backgroundColor={areLightsOn ? 'white' : 'black'}>
      <Switcher isOn={areLightsOn} onSwitcherClick={handleSwitcherClick} />
    </Center>
  );
};

export default FirstPuzzle;
