import React from 'react';
import Hero from './component/Hero';
import SocialProof from './component/SocialProof';
import AudienceRouting from './component/AudienceRouting';
import Step from './component/Step';
import Features from './component/Features';
import Pricing from './component/Pricing';
import MobileAppShowcase from './component/MobileAppShowcase';
import Testimonial from './component/Testimonial';
import CTA from './component/CTA';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home | CoopProfiler - Powering Cooperative Member Value, Legacy and Sustainability',
  description:
    'A comprehensive platform designed to empower cooperatives with data-driven insights, streamlined operations, and sustainable growth strategies.',
};

const Page = () => {
  return (
    <>
      <Hero />
      <AudienceRouting />
      <Step />
      <Features />
      <Pricing />
      <MobileAppShowcase />
      <Testimonial />
      <CTA />
      <SocialProof />
    </>
  );
};

export default Page;
