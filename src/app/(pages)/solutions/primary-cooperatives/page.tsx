import React from 'react';
import Hero from './component/Hero';
import ProblemSolution from './component/ProblemSolution';
import Features from './component/Features';
import Benefits from './component/Benefits';
import Faq from './component/Faq';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Solutions for Primary Cooperatives | CoopProfiler',
  description: 'Measure your cooperative\'s true resilience with the world\'s first Cooperative Resilience Measurement Index. Built specifically for cooperatives, not generic member management.',
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

