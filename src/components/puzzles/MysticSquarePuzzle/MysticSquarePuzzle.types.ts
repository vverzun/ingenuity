import type { Coordinates, Letter } from '@atoms/types';

export type MysticSquareState = {
  emptyTileCoordinates: Coordinates;
  mysticSquareTiles: Array<Letter[]>;
};
