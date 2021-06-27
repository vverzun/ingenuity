import React, { FC, memo } from 'react';
import { Text } from '@chakra-ui/react';
import { getRandomNumberInclusively } from '@helpers';
import { useViewport } from '@hooks';
import type { RandomlyPositionedLetterProps } from './types';

const SWITCHER_HEIGHT = 300;
const SWITCHER_WIDTH = 300;
const LETTER_HEIGHT = 60;
const LETTER_WIDTH = 25;

const RandomlyPositionedLetter: FC<RandomlyPositionedLetterProps> = ({
  letter,
}) => {
  const { width, height } = useViewport();

  const randomTopOffset = getRandomNumberInclusively(
    0,
    (height - SWITCHER_HEIGHT) / 2 - LETTER_HEIGHT
  );
  const randomRightOffset = getRandomNumberInclusively(
    0,
    (width - SWITCHER_WIDTH) / 2 - LETTER_WIDTH
  );

  return (
    <Text
      position="absolute"
      top={randomTopOffset}
      right={randomRightOffset}
      width="25px"
      fontSize="60px"
      lineHeight="60px"
      textAlign="center"
      verticalAlign="middle"
      color="#fff"
    >
      {letter}
    </Text>
  );
};

export default memo(RandomlyPositionedLetter);
