import type { GetRandomNumberParams } from './random.types';

export const getRandomNumber = ({
  excl,
  max,
  min,
}: GetRandomNumberParams): number => {
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  return randomNumber === excl
    ? getRandomNumber({ excl, max, min })
    : randomNumber;
};
