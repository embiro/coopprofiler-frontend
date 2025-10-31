import React from 'react';
import Hero from './component/Hero';
import TermsOfUse from './component/TermsOfUse';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Use | CoopProfiler',
  description: 'Terms governing the use of CoopProfiler service for data collection, management, and analysis purposes.',
};

const Page = () => {
  return (
    <>
      <Hero />
      <TermsOfUse />
    </>
  );
};

export default Page;

