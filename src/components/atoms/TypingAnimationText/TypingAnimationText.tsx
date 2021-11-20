import { keyframes, Text } from '@chakra-ui/react';
import type { FC } from 'react';
import React from 'react';

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
      _after={{
        animation: `
          ${typing} 1.5s 1s steps(${text.length}) forwards,
          ${blink} .5s 3s step-end infinite
        `,
        background: 'white',
        bottom: 0,
        content: '""',
        left: 0,
        position: 'absolute',
        right: 0,
        top: 0,
        width: '0.05em',
      }}
      _before={{
        animation: `${typing} 1.5s 1s steps(${text.length}) forwards`,
        background: 'black',
        bottom: 0,
        content: '""',
        left: 0,
        position: 'absolute',
        right: 0,
        top: 0,
      }}
      color="white"
      fontSize="3.5vw"
      letterSpacing="0.45em"
      position="relative"
    >
      {text}
    </Text>
  );
};

export default TypingAnimationText;
