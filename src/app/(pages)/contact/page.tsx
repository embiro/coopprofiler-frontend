import React from 'react';
import Contact from './component/Contact';
import Solution from './component/Solution';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | CoopProfiler',
  description: 'Get in touch with the CoopProfiler team. We\'re here to help you transform your cooperative\'s data management.',
};

const Page = () => {
  return (
    <>
      
      <Contact />
      <Solution />
      
    </>
  );
};

export default Page;
