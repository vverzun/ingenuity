import { createContext } from 'react';
import type { FirstPuzzleContextValue } from './types';

const FirstPuzzleContext = createContext<FirstPuzzleContextValue>(
  {} as FirstPuzzleContextValue
);

export default FirstPuzzleContext;
