import React, { FC } from 'react';
import { Box, Image } from '@chakra-ui/react';
import { LightSwitchProps } from './types';

const LightSwitch: FC<LightSwitchProps> = ({
  areLightsOn,
  onLightSwitchClick,
}) => (
  <Box>
    <Image
      src={areLightsOn ? '/pngs/on.png' : '/pngs/off.png'}
      alt="light switch"
      onClick={onLightSwitchClick}
    />
  </Box>
);

export default LightSwitch;
