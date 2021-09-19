export type SwitcherProps = {
  withDelayedFadeInAnimation?: boolean;
  onSwitcherClick: () => void;
};

export type SwitcherSound = {
  turnOn: HTMLAudioElement;
  turnOff: HTMLAudioElement;
};
