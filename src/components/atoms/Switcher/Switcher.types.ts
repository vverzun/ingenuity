export type SwitcherSound = {
  turnOn: HTMLAudioElement;
  turnOff: HTMLAudioElement;
};

export type SwitcherProps = {
  onSwitcherClick: () => void;
};
