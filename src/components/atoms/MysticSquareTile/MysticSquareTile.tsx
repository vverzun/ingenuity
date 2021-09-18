import React, { memo } from 'react';
import type { FC } from 'react';
import { Flex } from '@chakra-ui/react';
import type { MysticSquareTileProps } from './MysticSquareTile.types';

const MysticSquareTile: FC<MysticSquareTileProps> = ({
  x,
  y,
  symbol,
  onMysticSquareTileClick,
}) => {
  const onClick = (): void => {
    onMysticSquareTileClick({ x, y });
  };

  return (
    <Flex
      w="50px"
      h="50px"
      alignItems="center"
      justifyContent="center"
      fontSize="30px"
      color="white"
      bg="black"
      cursor="pointer"
      _active={{
        w: '45px',
        h: '45px',
        fontSize: '25px',
      }}
      onClick={onClick}
    >
      {symbol}
    </Flex>
  );
};

export default memo(MysticSquareTile);
