import { getRandomNumber } from '../random';

export const shuffleArray = <T>(array: T[]): T[] => {
  const shuffledArray = [...array];

  for (let i = shuffledArray.length - 1; i > 0; i -= 1) {
    const j = getRandomNumber({ min: 0, max: i });

    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  return shuffledArray;
};
