import React, { FC, memo, useContext } from 'react';
import { Center, Text } from '@chakra-ui/react';
import { FirstPuzzleContext } from '@contexts';
import type { HiddenLetterProps } from './types';

const HiddenLetter: FC<HiddenLetterProps> = ({ id, symbol, onLetterClick }) => {
  const { areLightsOn, enteredLetters } = useContext(FirstPuzzleContext);

  const onClick = (): void => {
    onLetterClick({ id, symbol });
  };

  const isHidden = !enteredLetters.includes(id);

  return (
    <Center>
      <Text
        fontSize="60px"
        color={isHidden ? 'white' : 'black'}
        _hover={{
          cursor: 'pointer',
          color: areLightsOn && isHidden ? 'black' : '',
        }}
        onClick={onClick}
      >
        {symbol}
      </Text>
    </Center>
  );
};

export default memo(HiddenLetter);
