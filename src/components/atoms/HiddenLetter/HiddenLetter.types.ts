export type HiddenLetterProps = {
  enteredLettersIds: string[];
  id: string;
  onLetterClick: (letter: Letter) => void;
  symbol: string;
};

export type Letter = Omit<
  HiddenLetterProps,
  'enteredLettersIds' | 'onLetterClick'
>;
