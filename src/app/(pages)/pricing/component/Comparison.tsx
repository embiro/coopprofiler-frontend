'use client';

import React from 'react';
import IconifyIconClient from '@/component/IconifyIconClient';

type Feature = {
  name: string;
  tiers: {
    FREE: boolean;
    PRIMARY: boolean;
    STA: boolean;
    PARTNERS: boolean;
  };
};

const features: Feature[] = [
  {
    name: 'Member Management',
    tiers: { FREE: true, PRIMARY: true, STA: true, PARTNERS: true },
  },
  {
    name: 'Profile Management',
    tiers: { FREE: true, PRIMARY: true, STA: true, PARTNERS: true },
  },
  {
    name: 'Analytics/Reports',
    tiers: { FREE: true, PRIMARY: true, STA: true, PARTNERS: true },
  },
  {
    name: 'CRMI Computation',
    tiers: { FREE: true, PRIMARY: true, STA: true, PARTNERS: true },
  },
  {
    name: 'Data Export',
    tiers: { FREE: true, PRIMARY: true, STA: true, PARTNERS: true },
  },
  {
    name: 'User Account Management',
    tiers: { FREE: true, PRIMARY: true, STA: true, PARTNERS: true },
  },
  {
    name: 'Mobile App',
    tiers: { FREE: true, PRIMARY: true, STA: true, PARTNERS: true },
  },
  {
    name: 'Email Notifications',
    tiers: { FREE: true, PRIMARY: true, STA: true, PARTNERS: true },
  },
  {
    name: 'Unlimited Support',
    tiers: { FREE: true, PRIMARY: true, STA: true, PARTNERS: true },
  },
  {
    name: 'User Access Request',
    tiers: { FREE: false, PRIMARY: false, STA: false, PARTNERS: true },
  },
  {
    name: 'Custom Questions forms',
    tiers: { FREE: false, PRIMARY: false, STA: false, PARTNERS: true },
  },
  {
    name: 'API',
    tiers: { FREE: false, PRIMARY: false, STA: false, PARTNERS: true },
  },
];

const Comparison = () => {
  const renderCell = (value: boolean) => {
    if (value === true) {
      return (
        <IconifyIconClient icon="tabler:check" className="size-6 text-primary mx-auto" />
      );
    }
    if (value === false) {
      return (
        <IconifyIconClient icon="tabler:x" className="size-6 text-gray-300 mx-auto" />
      );
    }
    return <span className="text-sm text-center">{value}</span>;
  };

  return (
    <section className="bg-white lg:py-25 md:py-22.5 py-17.5">
      <div className="container">
        <div
          className="lg:mb-12.5 text-center mb-7.5"
          data-aos="fade-up"
          data-aos-duration={500}
          data-aos-easing="ease-in-out"
        >
          <h2 className="mb-2.5 lg:text-5.5xl md:text-4.6xl text-3.4xl">
            Compare Features Across Plans
          </h2>
          <p className="text-base mb-2.5">
            See what's included in each plan to choose the best fit for your cooperative
          </p>
        </div>

        <div
          className="overflow-x-auto"
          data-aos="fade-up"
          data-aos-delay={100}
          data-aos-duration={500}
          data-aos-easing="ease-in-out"
        >
          <div className="min-w-full inline-block">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-body-bg">
                  <th className="text-left p-5 text-black font-medium border-b border-neutral-200">
                    Feature
                  </th>
                  <th className="text-center p-5 text-black font-medium border-b border-neutral-200 min-w-32">
                    Free Trial
                  </th>
                  <th className="text-center p-5 text-black font-medium border-b border-neutral-200 min-w-32">
                    Primary Plan
                  </th>
                  <th className="text-center p-5 text-black font-medium border-b border-neutral-200 min-w-32">
                    STA Plan
                  </th>
                  <th className="text-center p-5 text-black font-medium border-b border-neutral-200 min-w-32">
                    Partners Plan
                  </th>
                </tr>
              </thead>
              <tbody>
                {features.map((feature, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? 'bg-white' : 'bg-body-bg'}
                  >
                    <td className="p-5 text-dark border-b border-neutral-200">
                      {feature.name}
                    </td>
                    <td className="p-5 border-b border-neutral-200">
                      {renderCell(feature.tiers.FREE)}
                    </td>
                    <td className="p-5 border-b border-neutral-200">
                      {renderCell(feature.tiers.PRIMARY)}
                    </td>
                    <td className="p-5 border-b border-neutral-200">
                      {renderCell(feature.tiers.STA)}
                    </td>
                    <td className="p-5 border-b border-neutral-200">
                      {renderCell(feature.tiers.PARTNERS)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
