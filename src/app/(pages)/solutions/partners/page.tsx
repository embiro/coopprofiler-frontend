import React from 'react';
import Hero from './component/Hero';
import ProblemSolution from './component/ProblemSolution';
import Features from './component/Features';
import Benefits from './component/Benefits';
import Faq from './component/Faq';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Solutions for Partners | CoopProfiler',
  description: 'Partner with cooperatives more effectively. Access standardized data, verify impact, and build stronger partnerships.',
};

const Page = () => {
  return (
    <>
      <Hero />
      <ProblemSolution />
      <Features />
      <Benefits />
      <Faq />
    </>
  );
};

export default Page;

