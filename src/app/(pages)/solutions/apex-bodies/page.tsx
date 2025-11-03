import React from 'react';
import Hero from './component/Hero';
import ProblemSolution from './component/ProblemSolution';
import Features from './component/Features';
import Benefits from './component/Benefits';
import Faq from './component/Faq';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Solutions for STAs | CoopProfiler',
  description:
    'Lead with confidence. Manage multiple cooperatives, track performance, and strengthen your network with CoopProfiler.',
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
