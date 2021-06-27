import React, { FC } from 'react';
import { Box, Image } from '@chakra-ui/react';
import type { LightSwitchProps } from './types';

const LightSwitch: FC<LightSwitchProps> = ({
  areLightsOn,
  onLightSwitchClick,
}) => (
  <Box>
    <Image
      src={areLightsOn ? '/pngs/on.png' : '/pngs/off.png'}
      alt="light switch"
      ignoreFallback
      onClick={onLightSwitchClick}
    />
  </Box>
);

export default LightSwitch;
