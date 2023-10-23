'use client';

import { FC, ReactNode, useEffect } from 'react';
import Gleap from 'gleap';

export const GleapInit: FC<{ children?: ReactNode }> = ({ children }) => {
  useEffect(() => {
    Gleap.initialize("X5C0grjFCjUMbZKi131MjZLaGRwg2iKH");
  });

  return <>{children}</>;
};