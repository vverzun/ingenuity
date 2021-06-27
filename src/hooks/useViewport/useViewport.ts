import { useEffect, useState } from 'react';
import type { UseViewport } from './types';

const useViewport = (): UseViewport => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);

    const handleWindowResize = (): void => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return {
    width,
    height,
  } as const;
};

export default useViewport;
