import type { FC } from 'react';
import type { ConditionalFadeProps } from '../types';

const ConditionalFade: FC<ConditionalFadeProps> = ({
  condition,
  container,
  children,
}) => (condition ? container(children) : children);

export default ConditionalFade;
