import type { GetRandomNumberParams } from './random.types';

export const getRandomNumber = ({
  min,
  max,
  excl,
}: GetRandomNumberParams): number => {
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  return randomNumber === excl
    ? getRandomNumber({ min, max, excl })
    : randomNumber;
};
