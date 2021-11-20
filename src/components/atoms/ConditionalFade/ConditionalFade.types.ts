import type { ReactElement } from 'react';

export type ConditionalFadeProps = {
  children: ReactElement;
  condition: boolean;
  container: (children: ReactElement) => ReactElement;
};
