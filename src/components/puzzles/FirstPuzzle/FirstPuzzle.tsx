import React, { FC, useMemo, useState } from 'react';
import { Center } from '@chakra-ui/react';
import { Switcher } from '@atoms';
import { SecretWordLetters } from '@molecules';
import { Letter } from '@atoms/types';
import { FirstPuzzleContext } from '@contexts';
import { shuffleArray } from '@helpers';

const SECRET_WORD_LETTERS: Letter[] = [
  { id: '89641f4e-4560-4798-b390-301d6f76006a', symbol: 'S' },
  { id: 'f25cfab8-31f3-46a0-abb0-f6bf96584779', symbol: 'E' },
  { id: '8adc2866-c11b-4e1d-8e24-4318ce059f7d', symbol: 'Q' },
  { id: '4aa04ceb-9918-4f72-9153-c006cf4a1a37', symbol: 'U' },
  { id: '68c02e5c-7779-4ecf-96d2-cecdeb198975', symbol: 'E' },
  { id: '566fa384-ad4b-41d6-9702-bc7e2be49c7c', symbol: 'N' },
  { id: '49483e98-4199-4365-b1b0-1e570acef2de', symbol: 'C' },
  { id: 'f1211075-0b7c-4e82-847f-4baf1466bd1b', symbol: 'E' },
];

const FirstPuzzle: FC = () => {
  const [areLightsOn, setAreLightsOn] = useState<boolean>(true);
  const [enteredLettersIds, setEnteredLettersIds] = useState<string[]>([]);

  const handleSwitcherClick = (): void => {
    setAreLightsOn((prevAreLightsOn) => !prevAreLightsOn);
  };

  const handleLetterClick = ({ id, symbol }: Letter): void => {
    if (!areLightsOn) {
      return;
    }

    const { id: correctLetterId, symbol: correctLetterSymbol } =
      SECRET_WORD_LETTERS[enteredLettersIds.length];

    if (id === correctLetterId || symbol === correctLetterSymbol) {
      setEnteredLettersIds([...enteredLettersIds, id]);
    } else {
      setEnteredLettersIds([]);
    }
  };

  const shuffledSecretWordLetters = useMemo(
    () => shuffleArray<Letter>(SECRET_WORD_LETTERS),
    []
  );

  return (
    <Center height="100vh" backgroundColor={areLightsOn ? 'white' : 'black'}>
      <Switcher isOn={areLightsOn} onSwitcherClick={handleSwitcherClick} />
      <FirstPuzzleContext.Provider value={{ areLightsOn, enteredLettersIds }}>
        <SecretWordLetters
          secretWordLetters={shuffledSecretWordLetters}
          onLetterClick={handleLetterClick}
        />
      </FirstPuzzleContext.Provider>
    </Center>
  );
};

export default FirstPuzzle;
