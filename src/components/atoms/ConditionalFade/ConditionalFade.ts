import type { FC } from 'react';

import type { ConditionalFadeProps } from '../types';

const ConditionalFade: FC<ConditionalFadeProps> = ({
  children,
  condition,
  container,
}) => (condition ? container(children) : children);

export default ConditionalFade;
