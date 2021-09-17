export type SwitcherSound = {
  turnOn: HTMLAudioElement;
  turnOff: HTMLAudioElement;
};

export type SwitcherProps = {
  isOn: boolean;
  onSwitcherClick: () => void;
};
