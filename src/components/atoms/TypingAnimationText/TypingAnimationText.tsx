import React from 'react';
import type { FC } from 'react';
import { keyframes, Text } from '@chakra-ui/react';
import type { TypingAnimationTextProps } from './TypingAnimationText.types';

const TypingAnimationText: FC<TypingAnimationTextProps> = ({ text }) => {
  const typing = keyframes`
    to {
      left: 100%;
    }
  `;

  const blink = keyframes`
    from, to {
      background: transparent;
    }

    50% {
      background: white;
    }
  `;

  return (
    <Text
      position="relative"
      color="white"
      fontSize="3vw"
      letterSpacing="0.45em"
      _before={{
        content: '""',
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        background: 'black',
        animation: `${typing} 1.5s steps(${text.length}) forwards`,
      }}
      _after={{
        content: '""',
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        width: '0.05em',
        background: 'white',
        animation: `
          ${typing} 1.5s steps(${text.length}) forwards,
          ${blink} .5s 2s step-end infinite
        `,
      }}
    >
      {text}
    </Text>
  );
};

export default TypingAnimationText;
