import React from 'react';
import Hero from './component/Hero';
import Value from './component/Value';
import Vision from './component/Vision';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Why Coop Profiler | CoopProfiler',
  description: 'Is your co-op data working for you or against you? Discover how CoopProfiler was born from the exact challenges cooperatives face every day.',
};

const Page = () => {
  return (
    <>
      <Hero />
      <Value />
      <Vision />
    </>
  );
};

export default Page;

