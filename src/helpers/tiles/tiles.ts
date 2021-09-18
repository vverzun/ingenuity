import type { ShiftTilesParams, ShiftTilesReturnType } from './tiles.types';

export const shiftTiles = ({
  emptyTileCoordinates,
  clickedTileCoordinates,
  mysticSquareTiles,
}: ShiftTilesParams): ShiftTilesReturnType => {
  const { y: emptyY, x: emptyX } = emptyTileCoordinates;
  const { y: clickedY, x: clickedX } = clickedTileCoordinates;

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

  return { mysticSquareTilesToSet };
};
