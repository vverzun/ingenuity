import type { Coordinates, Letter } from '@atoms/types';
import { MYSTIC_SQUARE_TILES } from '@constants';
import { getRandomNumber } from '@helpers';

import type { GetIsPuzzleSolvedParams, ShiftTilesParams } from './tiles.types';

export const getRandomTileCoordinates = (
  emptyTileCoordinates: Coordinates
): Coordinates => {
  const axes: Array<keyof Coordinates> = ['y', 'x'];
  const randomAxis = axes[getRandomNumber({ max: 1, min: 0 })];

  const randomClickedTileCoordinates = { ...emptyTileCoordinates };

  randomClickedTileCoordinates[randomAxis] = getRandomNumber({
    excl: emptyTileCoordinates[randomAxis],
    max: 3,
    min: 0,
  });

  return randomClickedTileCoordinates;
};

export const shiftTiles = ({
  clickedTileCoordinates,
  emptyTileCoordinates,
  mysticSquareTiles,
}: ShiftTilesParams): Array<Letter[]> => {
  const { x: emptyX, y: emptyY } = emptyTileCoordinates;
  const { x: clickedX, y: clickedY } = clickedTileCoordinates;

  let { x: currentX, y: currentY } = { ...emptyTileCoordinates };
  const mysticSquareTilesToSet = JSON.parse(JSON.stringify(mysticSquareTiles));

  if (emptyY < clickedY && emptyX === clickedX) {
    while (!(currentY === clickedY && currentX === clickedX)) {
      mysticSquareTilesToSet[currentY][currentX] =
        mysticSquareTiles[currentY + 1][currentX];
      currentY += 1;
    }
  } else if (emptyY > clickedY && emptyX === clickedX) {
    while (!(currentY === clickedY && currentX === clickedX)) {
      mysticSquareTilesToSet[currentY][currentX] =
        mysticSquareTiles[currentY - 1][currentX];
      currentY -= 1;
    }
  } else if (emptyY === clickedY && emptyX < clickedX) {
    while (!(currentY === clickedY && currentX === clickedX)) {
      mysticSquareTilesToSet[currentY][currentX] =
        mysticSquareTiles[currentY][currentX + 1];
      currentX += 1;
    }
  } else {
    while (!(currentY === clickedY && currentX === clickedX)) {
      mysticSquareTilesToSet[currentY][currentX] =
        mysticSquareTiles[currentY][currentX - 1];
      currentX -= 1;
    }
  }

  mysticSquareTilesToSet[clickedY][clickedX] =
    mysticSquareTiles[emptyY][emptyX];

  return mysticSquareTilesToSet;
};

export const getIsPuzzleSolved = ({
  emptyTileCoordinates,
  mysticSquareTiles,
}: GetIsPuzzleSolvedParams): boolean => {
  const { x: emptyX, y: emptyY } = emptyTileCoordinates;
  if (emptyY !== 3 && emptyX !== 3) {
    return false;
  }

  return mysticSquareTiles.every((row, y) =>
    row.every(
      (letter, x) =>
        MYSTIC_SQUARE_TILES[y][x].id === letter.id ||
        MYSTIC_SQUARE_TILES[y][x].symbol === letter.symbol
    )
  );
};
