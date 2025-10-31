import React from 'react';
import Hero from './component/Hero';
import PrivacyPolicy from './component/PrivacyPolicy';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | CoopProfiler',
  description: 'CoopProfiler data privacy policy for the hosted instance. Learn about data collection, processing, and protection measures.',
};


const Page = () => {
  return (
    <>
      
      <Hero />
      <PrivacyPolicy />
      
    </>
  );
};

export default Page;
