export type SwitcherProps = {
  onSwitcherClick: () => void;
  withDelayedFadeInAnimation?: boolean;
};

export type SwitcherSound = {
  turnOff: HTMLAudioElement;
  turnOn: HTMLAudioElement;
};
