import React, { useMemo, useState } from 'react';
import type { FC } from 'react';
import { Box, Center, Flex, useColorMode } from '@chakra-ui/react';
import { HiddenLetter, Switcher, TypingAnimationText } from '@atoms';
import type { Letter } from '@atoms/types';
import { HIDDEN_LETTERS } from '@constants';
import { shuffleArray } from '@helpers';

const HiddenLettersPuzzle: FC = () => {
  const [isPuzzleSolved, setIsPuzzleSolved] = useState<boolean>(false);
  const [enteredLettersIds, setEnteredLettersIds] = useState<string[]>([]);

  const { colorMode } = useColorMode();

  const handleSwitcherClick = (): void => {
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
        <TypingAnimationText text="That was easy...huh?" />
      ) : (
        <>
          <Box marginBottom="60px">
            <Switcher onSwitcherClick={handleSwitcherClick} />
          </Box>
          <Flex justifyContent="space-evenly" alignSelf="stretch">
            {shuffledHiddenLetters.map(({ id, symbol }) => (
              <HiddenLetter
                key={id}
                id={id}
                symbol={symbol}
                enteredLettersIds={enteredLettersIds}
                onLetterClick={handleLetterClick}
              />
            ))}
          </Flex>
        </>
      )}
    </Center>
  );
};

export default HiddenLettersPuzzle;
