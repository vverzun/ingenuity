export type Coordinates = {
  x: number;
  y: number;
};

export type MysticSquareTileProps = Coordinates & {
  onMysticSquareTileClick: ({ x, y }: { x: number; y: number }) => void;
  symbol: string;
};
