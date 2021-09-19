import React, { useCallback, useRef, useState } from 'react';
import type { FC } from 'react';
import { Center, Grid, useColorModeValue } from '@chakra-ui/react';
import { MysticSquareTile, Switcher } from '@atoms';
import type { Coordinates } from '@atoms/types';
import { MYSTIC_SQUARE_TILES } from '@constants';
import { getRandomTileCoordinates, shiftTiles } from '@helpers';
import type { MysticSquareState } from './MysticSquarePuzzle.types';

const MysticSquarePuzzle: FC = () => {
  const [isTilesShuffled, setIsTilesShuffled] = useState<boolean>(false);
  const [mysticSquareState, setMysticSquareState] = useState<MysticSquareState>(
    {
      mysticSquareTiles: MYSTIC_SQUARE_TILES,
      emptyTileCoordinates: {
        y: 3,
        x: 3,
      },
    }
  );

  const isTilesShuffledRef = useRef(isTilesShuffled);
  isTilesShuffledRef.current = isTilesShuffled;
  const mysticSquareStateRef = useRef(mysticSquareState);
  mysticSquareStateRef.current = mysticSquareState;

  const handleMysticSquareTileClick = (
    clickedTileCoordinates: Coordinates
  ): void => {
    const { mysticSquareTiles, emptyTileCoordinates } =
      mysticSquareStateRef.current;

    setMysticSquareState({
      mysticSquareTiles: shiftTiles({
        emptyTileCoordinates,
        clickedTileCoordinates,
        mysticSquareTiles,
      }),
      emptyTileCoordinates: clickedTileCoordinates,
    });
  };

  const shuffleTiles = useCallback(() => {
    if (isTilesShuffledRef.current) {
      return;
    }

    handleMysticSquareTileClick(
      getRandomTileCoordinates(
        mysticSquareStateRef.current.emptyTileCoordinates
      )
    );

    setTimeout(shuffleTiles, 0);
  }, []);

  const handleSwitcherClick = (): void => {
    shuffleTiles();

    setTimeout(() => {
      setIsTilesShuffled(true);
    }, 5000);
  };

  const gridBackgroundColor = useColorModeValue('white', 'black');
  const gridBorderColor = useColorModeValue('black', 'white');

  return (
    <Center height="100vh" flexDirection="column">
      <Grid
        alignItems="center"
        justifyItems="center"
        templateColumns="repeat(4, 1fr)"
        templateRows="repeat(4, 1fr)"
        gap="5px"
        marginBottom="60px"
        padding="5px"
        border={`5px solid ${gridBorderColor}`}
        backgroundColor={gridBackgroundColor}
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
      <Switcher
        withDelayedFadeInAnimation
        onSwitcherClick={handleSwitcherClick}
      />
    </Center>
  );
};

export default MysticSquarePuzzle;
