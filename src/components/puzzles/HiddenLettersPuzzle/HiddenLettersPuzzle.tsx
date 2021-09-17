import React, { useMemo, useState } from 'react';
import type { FC } from 'react';
import { Box, Center, Flex } from '@chakra-ui/react';
import { HiddenLetter, Switcher, TypingAnimationText } from '@atoms';
import type { Letter } from '@atoms/types';
import { HIDDEN_LETTERS } from '@constants';
import { HiddenLettersPuzzleContext } from '@contexts';
import { shuffleArray } from '@helpers';

const HiddenLettersPuzzle: FC = () => {
  const [isPuzzleSolved, setIsPuzzleSolved] = useState<boolean>(false);
  const [areLightsOn, setAreLightsOn] = useState<boolean>(true);
  const [enteredLettersIds, setEnteredLettersIds] = useState<string[]>([]);

  const handleSwitcherClick = (): void => {
    setAreLightsOn((prevAreLightsOn) => !prevAreLightsOn);

    if (enteredLettersIds.length === HIDDEN_LETTERS.length) {
      setIsPuzzleSolved(true);
    }
  };

  const handleLetterClick = ({ id, symbol }: Letter): void => {
    if (!areLightsOn || enteredLettersIds.length === HIDDEN_LETTERS.length) {
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
    <Center
      flexDirection="column"
      height="100vh"
      backgroundColor={areLightsOn ? 'white' : 'black'}
    >
      {isPuzzleSolved ? (
        <TypingAnimationText text="That was easy...huh?" />
      ) : (
        <>
          <Box marginBottom="60px">
            <Switcher
              isOn={areLightsOn}
              onSwitcherClick={handleSwitcherClick}
            />
          </Box>
          <Flex justifyContent="space-evenly" alignSelf="stretch">
            <HiddenLettersPuzzleContext.Provider
              value={{ areLightsOn, enteredLettersIds }}
            >
              {shuffledHiddenLetters.map(({ id, symbol }) => (
                <HiddenLetter
                  key={id}
                  id={id}
                  symbol={symbol}
                  onLetterClick={handleLetterClick}
                />
              ))}
            </HiddenLettersPuzzleContext.Provider>
          </Flex>
        </>
      )}
    </Center>
  );
};

export default HiddenLettersPuzzle;
