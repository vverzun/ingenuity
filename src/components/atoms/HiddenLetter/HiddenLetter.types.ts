export type HiddenLetterProps = {
  id: string;
  symbol: string;
  onLetterClick: (letter: Letter) => void;
};

export type Letter = Omit<HiddenLetterProps, 'onLetterClick'>;
