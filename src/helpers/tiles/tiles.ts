import type { Letter, Coordinates } from '@atoms/types';
import { getRandomNumber } from '@helpers';
import type { ShiftTilesParams } from './tiles.types';

export const getRandomTileCoordinates = (
  emptyTileCoordinates: Coordinates
): Coordinates => {
  const axes: Array<keyof Coordinates> = ['y', 'x'];
  const randomAxis = axes[getRandomNumber({ min: 0, max: 1 })];

  const randomClickedTileCoordinates = { ...emptyTileCoordinates };

  randomClickedTileCoordinates[randomAxis] = getRandomNumber({
    min: 0,
    max: 3,
    excl: emptyTileCoordinates[randomAxis],
  });

  return randomClickedTileCoordinates;
};

export const shiftTiles = ({
  emptyTileCoordinates,
  clickedTileCoordinates,
  mysticSquareTiles,
}: ShiftTilesParams): Array<Letter[]> => {
  const { y: emptyY, x: emptyX } = emptyTileCoordinates;
  const { y: clickedY, x: clickedX } = clickedTileCoordinates;

  const isEmptyTileClicked =
    emptyTileCoordinates.y === clickedTileCoordinates.y &&
    emptyTileCoordinates.x === clickedTileCoordinates.x;
  const isTileBlocked =
    emptyTileCoordinates.y !== clickedTileCoordinates.y &&
    emptyTileCoordinates.x !== clickedTileCoordinates.x;

  if (isEmptyTileClicked || isTileBlocked) {
    return mysticSquareTiles;
  }

  let { y: currentY, x: currentX } = { ...emptyTileCoordinates };
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
