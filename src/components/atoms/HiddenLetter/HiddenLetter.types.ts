export type HiddenLetterProps = {
  id: string;
  symbol: string;
  enteredLettersIds: string[];
  onLetterClick: (letter: Letter) => void;
};

export type Letter = Omit<
  HiddenLetterProps,
  'enteredLettersIds' | 'onLetterClick'
>;
