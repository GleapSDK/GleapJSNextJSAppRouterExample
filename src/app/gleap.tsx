'use client';

import { FC, ReactNode, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Gleap from 'gleap';

export const GleapInit: FC<{ children?: ReactNode }> = ({ children }) => {
  const searchParams = useSearchParams();

  useEffect(() => {
    const widgetKey = searchParams.get('widgetKey');
    if (widgetKey) {
      Gleap.initialize(widgetKey);
    }
  }, [searchParams]);

  return <>{children}</>;
};