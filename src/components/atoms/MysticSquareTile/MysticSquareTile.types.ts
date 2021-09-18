export type Coordinates = {
  y: number;
  x: number;
};

export type MysticSquareTileProps = Coordinates & {
  symbol: string;
  onMysticSquareTileClick: ({ x, y }: { y: number; x: number }) => void;
};
