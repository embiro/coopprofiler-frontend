'use client';

import React from 'react';
import IconifyIconClient from '@/component/IconifyIconClient';
import Link from 'next/link';
import { usePricing } from '@/context/PricingContext';

interface PricingBreakdown {
  amount: number;
  label: string;
}

type PricingPlan = {
  title: string;
  description?: string;
  pricingBreakdown: PricingBreakdown[];
  memberLimits: {
    members: string;
    users: string;
  };
  features: string[];
  loyaltyBonus?: string;
};

const pricingPlans: PricingPlan[] = [
  {
    title: 'PRIMARY PLAN',
    pricingBreakdown: [
      { amount: 24500, label: 'Cooperative' },
      { amount: 1220, label: 'Individual Member' },
    ],
    memberLimits: {
      members: 'Unlimited members',
      users: '5 user',
    },
    features: [
      'Member Management',
      'Profile Management',
      'Analytics/Reports',
      'CRMI Computation',
      'Data Export',
      'User Account Management',
      'Mobile App',
      'Email Notifications',
      'Unlimited Support',
    ],
    loyaltyBonus:
      'Primary loyalty bonus: For every 100 members profiled - 5% to be rewarded to the Cooperative, once at the end of the year',
  },
  {
    title: 'STA PLAN',
    pricingBreakdown: [
      { amount: 36500, label: 'Cooperative' },
      { amount: 24500, label: 'Cooperative Member' },
    ],
    memberLimits: {
      members: 'Unlimited members',
      users: '5 user',
    },
    features: [
      'Member Management',
      'Profile Management',
      'Analytics/Reports',
      'CRMI Computation',
      'Data Export',
      'User Account Management',
      'Mobile App',
      'Email Notifications',
      'Unlimited Support',
    ],
    loyaltyBonus:
      'STA loyalty bonus: For every 50 members profiled - 5% to be rewarded to the Cooperative, once at the end of the year',
  },
  {
    title: 'PARTNERS PLAN',
    pricingBreakdown: [
      { amount: 365000, label: 'Partner' },
      { amount: 36500, label: 'Secondary Cooperative' },
      { amount: 24500, label: 'Primary Cooperative' },
      { amount: 1220, label: 'Individual Member' },
    ],
    memberLimits: {
      members: 'Unlimited members',
      users: '5 user',
    },
    features: [
      'Member Management',
      'Profile Management',
      'Analytics/Reports',
      'CRMI Computation',
      'Data Export',
      'User Access Request',
      'User Account Management',
      'Mobile App',
      'Email Notifications',
      'Custom Questions forms',
      'API',
      'Unlimited Support',
    ],
  },
];

const Pricing = () => {
  const { convertPrice, billingCycle } = usePricing();

  const formatPricingBreakdown = (breakdown: PricingBreakdown[]) => {
    return breakdown.map(item => {
      const converted = convertPrice(item.amount, true);
      const period = billingCycle === 'two-year' ? '2 Yr' : 'Yr';
      return `${converted.local}/${period}/${item.label}`;
    });
  };

  return (
    <>
      <section className="bg-white lg:py-25 md:py-22.5 py-17.5">
        <div className="container">
          <div
            className="text-center mb-10 lg:mb-12.5"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
          >
            <div className="bg-primary py-0.5 px-3.75 rounded-full font-medium text-sm inline-flex mb-2.5 text-dark">
              Pricing Plans
            </div>
            <h2 className="mb-2.5 lg:text-5.5xl md:text-4.6xl text-3.4xl">
              Choose the plan that best fits you
            </h2>
            <p className="text-base mb-2.5 max-w-2xl mx-auto">
              Flexible pricing options designed for cooperatives of all sizes
            </p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 lg:gap-7.5">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-neutral-200 hover:border-primary hover:shadow-lg transition-all duration-300 flex flex-col overflow-hidden"
                data-aos="fade-up"
                data-aos-delay={index * 150}
                data-aos-duration="600"
                data-aos-easing="ease-in-out"
              >
                {/* Header */}
                <div className="p-6 lg:p-7.5 border-b border-neutral-200">
                  <h3 className="text-1.5xl lg:text-2xl font-bold text-dark mb-3">{plan.title}</h3>
                  {plan.description && (
                    <p className="text-base text-neutral-600 mb-4">{plan.description}</p>
                  )}
                  {plan.pricingBreakdown.length > 0 && (
                    <div className="space-y-3 mb-4 bg-primary/10 rounded-xl p-4 border border-primary/20">
                      {formatPricingBreakdown(plan.pricingBreakdown).map((priceText, idx) => (
                        <p
                          key={idx}
                          className="text-base lg:text-lg font-bold leading-tight"
                          style={{ color: '#000' }}
                        >
                          {priceText}
                        </p>
                      ))}
                    </div>
                  )}
                  <div className="flex flex-col gap-2 text-sm text-neutral-600">
                    <span>{plan.memberLimits.members}</span>
                    <span>{plan.memberLimits.users}</span>
                  </div>
                </div>

                {/* Features List */}
                <div className="flex-grow p-6 lg:p-7.5">
                  <div className="space-y-3.5">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex gap-2.5 items-start">
                        <IconifyIconClient
                          icon="tabler:circle-check"
                          className="size-5 lg:size-6 text-primary flex-shrink-0 mt-0.5"
                        />
                        <span className="text-sm lg:text-base text-neutral-700">{feature}</span>
                      </div>
                    ))}
                    {plan.loyaltyBonus && (
                      <div className="flex gap-2.5 items-start">
                        <IconifyIconClient
                          icon="tabler:circle-check"
                          className="size-5 lg:size-6 text-primary flex-shrink-0 mt-0.5"
                        />
                        <span className="text-sm lg:text-base text-neutral-700">
                          {plan.loyaltyBonus}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Footer with Button */}
                <div className="bg-primary p-6 lg:p-7.5">
                  <Link
                    href="/contact"
                    className="block w-full py-3 lg:py-3.5 text-center border-2 border-dark text-dark font-semibold rounded-xl hover:bg-dark hover:text-white transition-all duration-300"
                  >
                    SELECT PLAN
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
