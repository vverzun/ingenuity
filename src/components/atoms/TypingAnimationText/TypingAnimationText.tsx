import React, { FC } from 'react';
import { keyframes, Text } from '@chakra-ui/react';
import { TypingAnimationTextProps } from './types';

const TypingAnimationText: FC<TypingAnimationTextProps> = ({ text }) => {
  const typing = keyframes`
    from { width: 0 }
    to { width: 300px }
  `;

  const blinkingCaret = keyframes`
    from, to { border-color: transparent }
    50% { border-color: black; }
  `;

  return (
    <Text
      fontSize="30px"
      color="white"
      overflow="hidden"
      borderRight=".15em solid black"
      whiteSpace="nowrap"
      margin="0 auto"
      letterSpacing=".15em"
      animation={`
        ${typing} 1.5s steps(20, end),
        ${blinkingCaret} .75s step-end infinite
      `}
    >
      {text}
    </Text>
  );
};

export default TypingAnimationText;
