import { HiddenLetter, Switcher, TypingAnimationText } from '@atoms';
import type { Letter } from '@atoms/types';
import { Box, Center, Flex, useColorMode } from '@chakra-ui/react';
import { HIDDEN_LETTERS } from '@constants';
import { shuffleArray } from '@helpers';
import router from 'next/router';
import type { FC } from 'react';
import React, { useMemo, useState } from 'react';

const HiddenLettersPuzzle: FC = () => {
  const [isPuzzleSolved, setIsPuzzleSolved] = useState<boolean>(false);
  const [enteredLettersIds, setEnteredLettersIds] = useState<string[]>([]);

  const { colorMode } = useColorMode();

  const handleSwitcherClick = (): void => {
    if (isPuzzleSolved) {
      router.replace('/mystic-square');
      return;
    }

    if (enteredLettersIds.length === HIDDEN_LETTERS.length) {
      setIsPuzzleSolved(true);
    }
  };

  const handleLetterClick = ({ id, symbol }: Letter): void => {
    if (
      colorMode === 'dark' ||
      enteredLettersIds.length === HIDDEN_LETTERS.length
    ) {
      return;
    }

    const correctLetter = HIDDEN_LETTERS[enteredLettersIds.length];

    if (id === correctLetter.id || symbol === correctLetter.symbol) {
      setEnteredLettersIds([...enteredLettersIds, id]);
    } else {
      setEnteredLettersIds([]);
    }
  };

  const shuffledHiddenLetters = useMemo(
    () => shuffleArray<Letter>(HIDDEN_LETTERS),
    []
  );

  return (
    <Center flexDirection="column" height="100vh">
      {isPuzzleSolved ? (
        <>
          <Box marginBottom="60px">
            <TypingAnimationText text="That was easy... huh?" />
          </Box>
          <Switcher
            onSwitcherClick={handleSwitcherClick}
            withDelayedFadeInAnimation
          />
        </>
      ) : (
        <>
          <Box marginBottom="60px">
            <Switcher onSwitcherClick={handleSwitcherClick} />
          </Box>
          <Flex alignSelf="stretch" justifyContent="space-evenly">
            {shuffledHiddenLetters.map(({ id, symbol }) => (
              <HiddenLetter
                key={id}
                enteredLettersIds={enteredLettersIds}
                id={id}
                onLetterClick={handleLetterClick}
                symbol={symbol}
              />
            ))}
          </Flex>
        </>
      )}
    </Center>
  );
};

export default HiddenLettersPuzzle;
