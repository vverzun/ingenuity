import type { Coordinates, Letter } from '@atoms/types';

export type ShiftTilesParams = {
  clickedTileCoordinates: Coordinates;
  emptyTileCoordinates: Coordinates;
  mysticSquareTiles: Array<Letter[]>;
};
