import React from 'react';
import PricingHero from './component/PricingHero';
import Comparison from './component/Comparison';
import TrustBadges from './component/TrustBadges';
import Faq from './component/Faq';
import CTA from './component/CTA';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing | CoopProfiler',
  description:
    'Choose the right plan for your cooperative. Transparent pricing for Primary Cooperatives, Apex Bodies, and Partners.',
};

const Page = () => {
  return (
    <>
      <PricingHero />
      <Comparison />
      <TrustBadges />
      <Faq />
      <CTA />
    </>
  );
};

export default Page;
