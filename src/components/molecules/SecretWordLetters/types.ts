import type { Letter } from '@atoms/types';

export type SecretWordLettersProps = {
  secretWordLetters: Letter[];
  onLetterClick: (letter: Letter) => void;
};
