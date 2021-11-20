import { useRouter } from 'next/router';
import type { FC } from 'react';
import { useEffect } from 'react';

const Custom404: FC = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace('/');
  });

  return null;
};

export default Custom404;
