import React, { FC, memo } from 'react';
import { Center } from '@chakra-ui/react';
import { HiddenLetter } from '@atoms';
import type { SecretWordLettersProps } from './types';

const SecretWordLetters: FC<SecretWordLettersProps> = ({
  secretWordLetters,
  onLetterClick,
}) => {
  return (
    <Center>
      {secretWordLetters.map(({ id, symbol }) => (
        <HiddenLetter
          key={id}
          id={id}
          symbol={symbol}
          onLetterClick={onLetterClick}
        />
      ))}
    </Center>
  );
};

export default memo(SecretWordLetters);
