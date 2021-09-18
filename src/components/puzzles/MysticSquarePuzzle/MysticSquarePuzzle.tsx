import React, { useState } from 'react';
import type { FC } from 'react';
import { Center, Grid } from '@chakra-ui/react';
import { MYSTIC_SQUARE_TILES } from '@constants';
import { MysticSquareTile } from '@atoms';
import type { Coordinates } from '@atoms/types';
import { shiftTiles } from '@helpers';
import type { MysticSquareState } from './MysticSquarePuzzle.types';

const MysticSquarePuzzle: FC = () => {
  const [mysticSquareState, setMysticSquareState] = useState<MysticSquareState>(
    {
      mysticSquareTiles: MYSTIC_SQUARE_TILES,
      emptyTileCoordinates: {
        y: 3,
        x: 3,
      },
    }
  );

  const handleMysticSquareTileClick = (
    clickedTileCoordinates: Coordinates
  ): void => {
    const { mysticSquareTiles, emptyTileCoordinates } = mysticSquareState;

    const isEmptyTileClicked =
      emptyTileCoordinates.y === clickedTileCoordinates.y &&
      emptyTileCoordinates.x === clickedTileCoordinates.x;
    const isTileBlocked =
      emptyTileCoordinates.y !== clickedTileCoordinates.y &&
      emptyTileCoordinates.x !== clickedTileCoordinates.x;

    if (isEmptyTileClicked || isTileBlocked) {
      return;
    }

    const { mysticSquareTilesToSet } = shiftTiles({
      emptyTileCoordinates,
      clickedTileCoordinates,
      mysticSquareTiles,
    });

    setMysticSquareState({
      mysticSquareTiles: mysticSquareTilesToSet,
      emptyTileCoordinates: clickedTileCoordinates,
    });
  };

  return (
    <Center height="100vh">
      <Grid
        alignItems="center"
        justifyItems="center"
        templateColumns="repeat(4, 1fr)"
        templateRows="repeat(4, 1fr)"
        gap="5px"
        padding="5px"
        border="5px solid black"
        background="white"
      >
        {mysticSquareState.mysticSquareTiles.map((row, y) =>
          row.map((letter, x) => (
            <MysticSquareTile
              key={letter.id}
              x={x}
              y={y}
              symbol={letter.symbol}
              onMysticSquareTileClick={handleMysticSquareTileClick}
            />
          ))
        )}
      </Grid>
    </Center>
  );
};

export default MysticSquarePuzzle;
