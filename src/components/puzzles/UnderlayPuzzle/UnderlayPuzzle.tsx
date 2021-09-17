import React, { useMemo, useState } from 'react';
import type { FC } from 'react';
import { Box, Center, Flex } from '@chakra-ui/react';
import { Switcher, TypingAnimationText } from '@atoms';
import { SecretWordLetters } from '@molecules';
import type { Letter } from '@atoms/types';
import { SECRET_WORD_LETTERS } from '@constants';
import { UnderlayPuzzleContext } from '@contexts';
import { shuffleArray } from '@helpers';

const UnderlayPuzzle: FC = () => {
  const [isPuzzleSolved, setIsPuzzleSolved] = useState<boolean>(false);
  const [areLightsOn, setAreLightsOn] = useState<boolean>(true);
  const [enteredLettersIds, setEnteredLettersIds] = useState<string[]>([]);

  const handleSwitcherClick = (): void => {
    setAreLightsOn((prevAreLightsOn) => !prevAreLightsOn);

    if (enteredLettersIds.length === SECRET_WORD_LETTERS.length) {
      setIsPuzzleSolved(true);
    }
  };

  const handleLetterClick = ({ id, symbol }: Letter): void => {
    if (
      !areLightsOn ||
      enteredLettersIds.length === SECRET_WORD_LETTERS.length
    ) {
      return;
    }

    const correctLetter = SECRET_WORD_LETTERS[enteredLettersIds.length];

    if (id === correctLetter.id || symbol === correctLetter.symbol) {
      setEnteredLettersIds([...enteredLettersIds, id]);
    } else {
      setEnteredLettersIds([]);
    }
  };

  const shuffledSecretWordLetters = useMemo(() => {
    return shuffleArray<Letter>(SECRET_WORD_LETTERS);
  }, []);

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
            <UnderlayPuzzleContext.Provider
              value={{ areLightsOn, enteredLettersIds }}
            >
              <SecretWordLetters
                secretWordLetters={shuffledSecretWordLetters}
                onLetterClick={handleLetterClick}
              />
            </UnderlayPuzzleContext.Provider>
          </Flex>
        </>
      )}
    </Center>
  );
};

export default UnderlayPuzzle;
