import { createContext } from 'react';
import type { UnderlayPuzzleContextValue } from './types';

const UnderlayPuzzleContext = createContext<UnderlayPuzzleContextValue>(
  {} as UnderlayPuzzleContextValue
);

export default UnderlayPuzzleContext;
