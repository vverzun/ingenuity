import React, { FC, memo, useContext } from 'react';
import { Text } from '@chakra-ui/react';
import { UnderlayPuzzleContext } from '@contexts';
import type { HiddenLetterProps } from './types';

const HiddenLetter: FC<HiddenLetterProps> = ({ id, symbol, onLetterClick }) => {
  const { areLightsOn, enteredLettersIds } = useContext(UnderlayPuzzleContext);

  const onClick = (): void => {
    onLetterClick({ id, symbol });
  };

  const isHidden = !enteredLettersIds.includes(id);

  return (
    <Text
      fontSize="60px"
      color={isHidden ? 'white' : 'black'}
      transition="color 500ms ease-in-out"
      sx={{
        '-webkit-tap-highlight-color': 'rgba(0,0,0,0)',
      }}
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
