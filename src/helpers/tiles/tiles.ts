import type { Coordinates, Letter } from '@atoms/types';
import { getRandomNumber } from '@helpers';

import type { ShiftTilesParams } from './tiles.types';

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

  const isEmptyTileClicked =
    emptyTileCoordinates.y === clickedTileCoordinates.y &&
    emptyTileCoordinates.x === clickedTileCoordinates.x;
  const isTileBlocked =
    emptyTileCoordinates.y !== clickedTileCoordinates.y &&
    emptyTileCoordinates.x !== clickedTileCoordinates.x;

  if (isEmptyTileClicked || isTileBlocked) {
    return mysticSquareTiles;
  }

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
