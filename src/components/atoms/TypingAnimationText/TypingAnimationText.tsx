import React, { FC } from 'react';
import { keyframes, Text } from '@chakra-ui/react';
import { TypingAnimationTextProps } from './types';

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
      width="max-content"
      position="relative"
      color="white"
      fontSize="clamp(0.75rem, 3vw + 0.75rem, 4rem)"
      letterSpacing="0.45em"
      _before={{
        content: '""',
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        background: 'black',
        animation: `${typing} 1.5s steps(${text.length}) 1s forwards`,
      }}
      _after={{
        content: '""',
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        width: '0.1em',
        background: 'white',
        animation: `
          ${typing} 1.5s steps(${text.length}) 1s forwards,
          ${blink} .5s step-end infinite
        `,
      }}
    >
      {text}
    </Text>
  );
};

export default TypingAnimationText;
