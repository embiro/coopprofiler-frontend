'use client';

import { PricingProvider } from '@/context/PricingContext';
import { ReactNode } from 'react';

export const PricingProviderWrapper = ({ children }: { children: ReactNode }) => {
  return <PricingProvider>{children}</PricingProvider>;
};

