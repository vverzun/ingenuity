import { MysticSquareTile, Switcher, TypingAnimationText } from '@atoms';
import type { Coordinates } from '@atoms/types';
import { Box, Center, Grid, useColorModeValue } from '@chakra-ui/react';
import { MYSTIC_SQUARE_TILES } from '@constants';
import {
  getIsPuzzleSolved,
  getRandomTileCoordinates,
  shiftTiles,
} from '@helpers';
import type { FC } from 'react';
import React, { useCallback, useRef, useState } from 'react';

import type { MysticSquareState } from './MysticSquarePuzzle.types';

const MysticSquarePuzzle: FC = () => {
  const [isPuzzleSolved, setIsPuzzleSolved] = useState<boolean>(false);
  const [areTilesShuffled, setAreTilesShuffled] = useState<boolean>(false);
  const [mysticSquareState, setMysticSquareState] = useState<MysticSquareState>(
    {
      emptyTileCoordinates: {
        x: 3,
        y: 3,
      },
      mysticSquareTiles: MYSTIC_SQUARE_TILES,
    }
  );

  const areTilesShuffledRef = useRef(areTilesShuffled);
  areTilesShuffledRef.current = areTilesShuffled;
  const mysticSquareStateRef = useRef(mysticSquareState);
  mysticSquareStateRef.current = mysticSquareState;

  const handleMysticSquareTileClick = (
    clickedTileCoordinates: Coordinates
  ): void => {
    const { emptyTileCoordinates, mysticSquareTiles } =
      mysticSquareStateRef.current;

    const isEmptyTileClicked =
      emptyTileCoordinates.y === clickedTileCoordinates.y &&
      emptyTileCoordinates.x === clickedTileCoordinates.x;
    const isTileBlocked =
      emptyTileCoordinates.y !== clickedTileCoordinates.y &&
      emptyTileCoordinates.x !== clickedTileCoordinates.x;

    if (isEmptyTileClicked || isTileBlocked) {
      return;
    }

    setMysticSquareState({
      emptyTileCoordinates: clickedTileCoordinates,
      mysticSquareTiles: shiftTiles({
        clickedTileCoordinates,
        emptyTileCoordinates,
        mysticSquareTiles,
      }),
    });
  };

  const shuffleTiles = useCallback(() => {
    if (areTilesShuffledRef.current) {
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
    if (areTilesShuffled && getIsPuzzleSolved(mysticSquareStateRef.current)) {
      setIsPuzzleSolved(true);
    } else {
      shuffleTiles();

      setTimeout(() => {
        setAreTilesShuffled(true);
      }, 5000);
    }
  };

  const gridBackgroundColor = useColorModeValue('white', 'black');
  const gridBorderColor = useColorModeValue('black', 'white');

  return (
    <Center flexDirection="column" height="100vh">
      {isPuzzleSolved ? (
        <>
          <Box>
            <TypingAnimationText text="End..." />
          </Box>
        </>
      ) : (
        <>
          <Grid
            alignItems="center"
            backgroundColor={gridBackgroundColor}
            border={`5px solid ${gridBorderColor}`}
            gap="5px"
            justifyItems="center"
            marginBottom="60px"
            padding="5px"
            templateColumns="repeat(4, 1fr)"
            templateRows="repeat(4, 1fr)"
          >
            {mysticSquareState.mysticSquareTiles.map((row, y) =>
              row.map((letter, x) => (
                <MysticSquareTile
                  key={letter.id}
                  onMysticSquareTileClick={handleMysticSquareTileClick}
                  symbol={letter.symbol}
                  x={x}
                  y={y}
                />
              ))
            )}
          </Grid>
          <Switcher
            onSwitcherClick={handleSwitcherClick}
            withDelayedFadeInAnimation
          />
        </>
      )}
    </Center>
  );
};

export default MysticSquarePuzzle;
