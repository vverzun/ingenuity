import { Flex, useColorModeValue } from '@chakra-ui/react';
import type { FC } from 'react';
import React, { memo } from 'react';

import type { MysticSquareTileProps } from './MysticSquareTile.types';

const MysticSquareTile: FC<MysticSquareTileProps> = ({
  onMysticSquareTileClick,
  symbol,
  x,
  y,
}) => {
  const color = useColorModeValue('white', 'black');
  const backgroundColor = useColorModeValue('black', 'white');

  const onClick = (): void => {
    onMysticSquareTileClick({ x, y });
  };

  return (
    <Flex
      alignItems="center"
      cursor="pointer"
      height="50px"
      justifyContent="center"
      onClick={onClick}
      width="50px"
    >
      <Flex
        _active={{
          fontSize: '25px',
          h: '40px',
          w: '40px',
        }}
        alignItems="center"
        backgroundColor={backgroundColor}
        color={color}
        fontSize="30px"
        height="100%"
        justifyContent="center"
        width="100%"
      >
        {symbol}
      </Flex>
    </Flex>
  );
};

export default memo(MysticSquareTile);
