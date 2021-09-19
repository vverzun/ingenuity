import React, { memo } from 'react';
import type { FC } from 'react';
import { Flex, useColorModeValue } from '@chakra-ui/react';
import type { MysticSquareTileProps } from './MysticSquareTile.types';

const MysticSquareTile: FC<MysticSquareTileProps> = ({
  y,
  x,
  symbol,
  onMysticSquareTileClick,
}) => {
  const color = useColorModeValue('white', 'black');
  const backgroundColor = useColorModeValue('black', 'white');

  const onClick = (): void => {
    onMysticSquareTileClick({ y, x });
  };

  return (
    <Flex
      width="50px"
      height="50px"
      alignItems="center"
      justifyContent="center"
      cursor="pointer"
      onClick={onClick}
    >
      <Flex
        width="100%"
        height="100%"
        alignItems="center"
        justifyContent="center"
        fontSize="30px"
        color={color}
        backgroundColor={backgroundColor}
        _active={{
          w: '40px',
          h: '40px',
          fontSize: '25px',
        }}
      >
        {symbol}
      </Flex>
    </Flex>
  );
};

export default memo(MysticSquareTile);
