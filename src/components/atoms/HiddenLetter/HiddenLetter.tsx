import React, { memo } from 'react';
import type { FC } from 'react';
import { Text, useColorMode } from '@chakra-ui/react';
import type { HiddenLetterProps } from './HiddenLetter.types';

const HiddenLetter: FC<HiddenLetterProps> = ({
  id,
  symbol,
  enteredLettersIds,
  onLetterClick,
}) => {
  const { colorMode } = useColorMode();

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
        color: colorMode === 'light' && isHidden ? 'black' : undefined,
      }}
      onClick={onClick}
    >
      {symbol}
    </Text>
  );
};

export default memo(HiddenLetter);
