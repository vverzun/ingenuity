import React, { FC, memo } from 'react';
import { Flex } from '@chakra-ui/react';
import { HiddenLetter } from '@atoms';
import type { SecretWordLettersProps } from './types';

const SecretWordLetters: FC<SecretWordLettersProps> = ({
  secretWordLetters,
  onLetterClick,
}) => {
  return (
    <Flex flexBasis="100%" justifyContent="space-evenly">
      {secretWordLetters.map(({ id, symbol }) => (
        <HiddenLetter
          key={id}
          id={id}
          symbol={symbol}
          onLetterClick={onLetterClick}
        />
      ))}
    </Flex>
  );
};

export default memo(SecretWordLetters);
