import { Text, useColorMode } from '@chakra-ui/react';
import type { FC } from 'react';
import React, { memo } from 'react';

import type { HiddenLetterProps } from './HiddenLetter.types';

const HiddenLetter: FC<HiddenLetterProps> = ({
  enteredLettersIds,
  id,
  onLetterClick,
  symbol,
}) => {
  const { colorMode } = useColorMode();

  const onClick = (): void => {
    onLetterClick({ id, symbol });
  };

  const isHidden = !enteredLettersIds.includes(id);

  return (
    <Text
      _hover={{
        color: colorMode === 'light' && isHidden ? 'black' : undefined,
        cursor: 'pointer',
      }}
      color={isHidden ? 'white' : 'black'}
      fontSize="60px"
      onClick={onClick}
      sx={{
        '-webkit-tap-highlight-color': 'rgba(0,0,0,0)',
      }}
      transition="color 0.5s ease-in-out"
    >
      {symbol}
    </Text>
  );
};

export default memo(HiddenLetter);
