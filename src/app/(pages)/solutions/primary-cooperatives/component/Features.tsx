'use client';
import React from 'react';
import IconifyIconClient from '@/component/IconifyIconClient';

export type Feature = {
  icon: string;
  title: string;
  description: string;
};

export const features: Feature[] = [
  {
    icon: 'solar:database-duotone',
    title: 'Cooperative Resilience Measurement Index',
    description:
      'The world\'s first framework tracking adherence to 10 cooperative values and 7 universal principles to measure true resilience.',
  },
  {
    icon: 'solar:document-text-duotone',
    title: 'Dynamic Document Centre',
    description:
      'Store and validate registration certificates, audit reports, and meeting minutes to ensure data authenticity.',
  },
  {
    icon: 'solar:code-2-duotone',
    title: 'API Enabled Integration',
    description:
      'Connect with existing software for seamless data sharing, promoting collaboration and efficient regulation.',
  },
  {
    icon: 'solar:wifi-router-round-duotone',
    title: 'Offline & Online Capabilities',
    description:
      'Collect data anywhere, even without internet. Automatic synchronization when connection is restored.',
  },
];

const Features = () => {
  return (
    <>
      <section className="bg-white lg:py-25 md:py-22.5 py-17.5">
        <div className="container">
          <div
            className="mb-12.5 text-center"
            data-aos="fade-up"
            data-aos-duration={600}
            data-aos-easing="ease-in-out"
          >
            <h2 className="lg:text-5.5xl md:text-4.6xl text-3.4xl mb-2.5">
              Features That Matter to You
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((feature, idx) => (
              <div
                key={idx}
                data-aos="fade-up"
                data-aos-delay={idx * 100}
                data-aos-duration={500}
                data-aos-easing="ease-in-out"
              >
                <div className="bg-body-bg lg:p-7.5 p-5 rounded-2xl flex flex-col lg:gap-25 md:gap-2.5 gap-7.5 h-full">
                  <IconifyIconClient icon={feature.icon} className="lg:size-12 size-10 text-primary" />
                  <h3 className="text-1.5xl">{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;

