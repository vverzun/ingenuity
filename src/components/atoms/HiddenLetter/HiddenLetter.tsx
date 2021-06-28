import React, { FC, useState } from 'react';
import { Center, Text } from '@chakra-ui/react';
import type { HiddenLetterProps } from './types';

const HiddenLetter: FC<HiddenLetterProps> = ({ letter, onLetterClick }) => {
  const [isHidden, setIsHidden] = useState<boolean>(true);

  const onClick = (): void => {
    setIsHidden((prevIsHidden) => !prevIsHidden);
    onLetterClick(letter);
  };

  return (
    <Center>
      <Text
        fontSize="60px"
        color={isHidden ? 'white' : 'black'}
        onClick={onClick}
      >
        {letter}
      </Text>
    </Center>
  );
};

export default HiddenLetter;
