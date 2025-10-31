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
    icon: 'solar:network-structure-outline',
    title: 'Network Dashboard',
    description:
      'Get a comprehensive view of all member cooperatives with real-time performance metrics and insights.',
  },
  {
    icon: 'solar:graph-up-outline',
    title: 'Cross-Cooperative Analytics',
    description:
      'Compare performance across your network and identify trends, opportunities, and areas needing support.',
  },
  {
    icon: 'solar:file-report-outline',
    title: 'Unified Reporting',
    description:
      'Generate aggregated reports across all cooperatives for stakeholders and regulatory compliance.',
  },
  {
    icon: 'solar:shield-check-outline',
    title: 'Compliance Monitoring',
    description:
      'Track and ensure all member cooperatives meet regulatory requirements with automated alerts.',
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
              Features That Empower Your Network
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

