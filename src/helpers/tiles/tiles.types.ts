import type { Letter, Coordinates } from '@atoms/types';

export type ShiftTilesParams = {
  emptyTileCoordinates: Coordinates;
  clickedTileCoordinates: Coordinates;
  mysticSquareTiles: Array<Letter[]>;
};
