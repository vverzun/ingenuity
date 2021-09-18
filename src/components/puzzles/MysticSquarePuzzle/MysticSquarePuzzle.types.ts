import type { Letter, Coordinates } from '@atoms/types';

export type MysticSquareState = {
  mysticSquareTiles: Array<Letter[]>;
  emptyTileCoordinates: Coordinates;
};
