import React, { FC } from 'react';
import { Box, Image } from '@chakra-ui/react';
import { SwitcherProps } from './types';

const Switcher: FC<SwitcherProps> = ({ areLightsOn, onLightsSwitch }) => (
  <Box>
    <Image
      src={areLightsOn ? '/pngs/on.png' : '/pngs/off.png'}
      alt="switcher"
      onClick={onLightsSwitch}
    />
  </Box>
);

export default Switcher;
