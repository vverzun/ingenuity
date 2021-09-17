import { createContext } from 'react';
import type { HiddenLettersPuzzleContextValue } from './types';

const HiddenLettersPuzzleContext =
  createContext<HiddenLettersPuzzleContextValue>(
    {} as HiddenLettersPuzzleContextValue
  );

export default HiddenLettersPuzzleContext;
