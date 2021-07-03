import React, { FC, memo, useContext } from 'react';
import { Text } from '@chakra-ui/react';
import { FirstPuzzleContext } from '@contexts';
import type { HiddenLetterProps } from './types';

const HiddenLetter: FC<HiddenLetterProps> = ({ id, symbol, onLetterClick }) => {
  const { areLightsOn, enteredLettersIds } = useContext(FirstPuzzleContext);

  const onClick = (): void => {
    onLetterClick({ id, symbol });
  };

  const isHidden = !enteredLettersIds.includes(id);

  return (
    <Text
      fontSize="60px"
      color={isHidden ? 'white' : 'black'}
      transition="color 500ms ease-in-out"
      _hover={{
        cursor: 'pointer',
        color: areLightsOn && isHidden ? 'black' : '',
      }}
      onClick={onClick}
    >
      {symbol}
    </Text>
  );
};

export default memo(HiddenLetter);
