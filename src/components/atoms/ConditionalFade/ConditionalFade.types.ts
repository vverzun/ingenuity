import type { ReactElement } from 'react';

export type ConditionalFadeProps = {
  condition: boolean;
  container: (children: ReactElement) => ReactElement;
  children: ReactElement;
};
