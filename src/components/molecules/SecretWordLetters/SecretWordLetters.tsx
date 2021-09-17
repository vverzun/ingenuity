import React, { memo } from 'react';
import type { FC } from 'react';
import { HiddenLetter } from '@atoms';
import type { SecretWordLettersProps } from './SecretWordLetters.types';

const SecretWordLetters: FC<SecretWordLettersProps> = ({
  secretWordLetters,
  onLetterClick,
}) => {
  return (
    <>
      {secretWordLetters.map(({ id, symbol }) => (
        <HiddenLetter
          key={id}
          id={id}
          symbol={symbol}
          onLetterClick={onLetterClick}
        />
      ))}
    </>
  );
};

export default memo(SecretWordLetters);
