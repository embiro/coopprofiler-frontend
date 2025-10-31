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
    icon: 'solar:shield-check-outline',
    title: 'Verification & Trust',
    description:
      'Access verified data from your partner cooperatives with transparent, auditable reporting that builds trust.',
  },
  {
    icon: 'solar:chart-2-outline',
    title: 'Impact Measurement',
    description:
      'Real-time insights into partnership effectiveness and measurable impact metrics that demonstrate value.',
  },
  {
    icon: 'solar:folder-with-files-outline',
    title: 'Standardized Reports',
    description:
      'Get consistent, professional reports across all partner cooperatives for easy comparison and analysis.',
  },
  {
    icon: 'solar:handshake-linear',
    title: 'Partnership Dashboard',
    description:
      'Monitor all your partner cooperatives from a single dashboard with custom views and automated insights.',
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
              Features That Strengthen Partnerships
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

