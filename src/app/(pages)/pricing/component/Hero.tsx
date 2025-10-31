'use client';

import React from 'react';
import Link from 'next/link';
import IconifyIconClient from '@/component/IconifyIconClient';

type Tier = 'FREE' | 'PRIMARY' | 'STA' | 'PARTNERS';

interface PlanFeature {
  name: string;
  available: boolean;
}

interface PricingPlan {
  id: Tier;
  label: string;
  icon: string;
  description: string;
  pricing: { label: string; amount: number; unit: string }[];
  userLimit: string;
  features: PlanFeature[];
  loyaltyBonus?: string;
  highlight?: boolean;
}

const plans: PricingPlan[] = [
  {
    id: 'FREE',
    label: 'Free Trial',
    icon: 'solar:gift-outline',
    description: 'Free 30 days trial.',
    pricing: [],
    userLimit: 'Unlimited members, 5 user',
    features: [
      { name: 'Member Management', available: true },
      { name: 'Profile Management', available: true },
      { name: 'Analytics/Reports', available: true },
      { name: 'CRMI Computation', available: true },
      { name: 'Data Export', available: true },
      { name: 'User Account Management', available: true },
      { name: 'Mobile App', available: true },
      { name: 'Email Notifications', available: true },
      { name: 'Unlimited Support', available: true },
    ],
  },
  {
    id: 'PRIMARY',
    label: 'Primary Plan',
    icon: 'solar:users-group-rounded-outline',
    description: 'Perfect for Primary Cooperatives',
    pricing: [
      { label: 'UGX 24500/Yr/Cooperative', amount: 24500, unit: 'year' },
      { label: 'UGX 1220/Yr/Individual Member', amount: 1220, unit: 'year' },
    ],
    userLimit: 'Unlimited members, 5 user',
    features: [
      { name: 'Member Management', available: true },
      { name: 'Profile Management', available: true },
      { name: 'Analytics/Reports', available: true },
      { name: 'CRMI Computation', available: true },
      { name: 'Data Export', available: true },
      { name: 'User Account Management', available: true },
      { name: 'Mobile App', available: true },
      { name: 'Email Notifications', available: true },
      { name: 'Unlimited Support', available: true },
    ],
    loyaltyBonus: 'Primary loyalty bonus: For every 100 members profiled - 5% to be rewarded to the Cooperative, once at the end of the year',
    highlight: true,
  },
  {
    id: 'STA',
    label: 'STA Plan',
    icon: 'solar:network-structure-outline',
    description: 'For Apex Bodies and STAs',
    pricing: [
      { label: 'UGX 36500/Yr/Cooperative', amount: 36500, unit: 'year' },
      { label: 'UGX 24500/Yr/Cooperative Member', amount: 24500, unit: 'year' },
    ],
    userLimit: 'Unlimited members, 5 user',
    features: [
      { name: 'Member Management', available: true },
      { name: 'Profile Management', available: true },
      { name: 'Analytics/Reports', available: true },
      { name: 'CRMI Computation', available: true },
      { name: 'Data Export', available: true },
      { name: 'User Account Management', available: true },
      { name: 'Mobile App', available: true },
      { name: 'Email Notifications', available: true },
      { name: 'Unlimited Support', available: true },
    ],
    loyaltyBonus: 'STA loyalty bonus: For every 50 members profiled - 5% to be rewarded to the Cooperative, once at the end of the year',
  },
  {
    id: 'PARTNERS',
    label: 'Partners Plan',
    icon: 'solar:handshake-linear',
    description: 'Complete solution for Partners',
    pricing: [
      { label: 'UGX 365000/Yr/Partner', amount: 365000, unit: 'year' },
      { label: 'UGX 36500/Yr/Secondary Cooperative', amount: 36500, unit: 'year' },
      { label: 'UGX 24500/Yr/Primary Cooperative', amount: 24500, unit: 'year' },
      { label: 'UGX 1220/Yr/Individual Member', amount: 1220, unit: 'year' },
    ],
    userLimit: 'Unlimited members, 5 user',
    features: [
      { name: 'Member Management', available: true },
      { name: 'Profile Management', available: true },
      { name: 'Analytics/Reports', available: true },
      { name: 'CRMI Computation', available: true },
      { name: 'Data Export', available: true },
      { name: 'User Access Request', available: true },
      { name: 'User Account Management', available: true },
      { name: 'Mobile App', available: true },
      { name: 'Email Notifications', available: true },
      { name: 'Custom Questions forms', available: true },
      { name: 'API', available: true },
      { name: 'Unlimited Support', available: true },
    ],
  },
];

const Hero = () => {
  return (
    <section className="lg:py-25 md:py-22.5 py-17.5 bg-body-bg">
      <div className="container">
        <div
          className="lg:mb-12.5 text-center md:mb-10 mb-7.5"
          data-aos="fade-up"
          data-aos-duration={500}
          data-aos-easing="ease-in-out"
        >
          <h2 className="mb-2.5 lg:text-5.5xl md:text-4.6xl text-4xl">
            Choose Your Plan
          </h2>
          <p className="mb-2.5">
            Start with a free trial · No hidden fees · Cancel anytime
          </p>
        </div>

        <div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-5"
          data-aos="fade-up"
          data-aos-delay={100}
          data-aos-duration={500}
          data-aos-easing="ease-in-out"
        >
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`bg-white rounded-2xl overflow-hidden flex flex-col ${
                plan.highlight ? 'ring-2 ring-primary' : ''
              }`}
            >
              {/* Header */}
              <div className="p-6 pb-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="size-12 bg-primary rounded-full flex items-center justify-center">
                    <IconifyIconClient icon={plan.icon} className="size-6 text-black" />
                  </div>
                  <h3 className="text-1.5xl">{plan.label}</h3>
                </div>
                <p className="text-sm text-dark mb-4">{plan.description}</p>
              </div>

              {/* Pricing */}
              <div className="px-6 pb-4">
                {plan.pricing.length > 0 ? (
                  <div className="space-y-2">
                    {plan.pricing.map((price, idx) => (
                      <div key={idx}>
                        <div className="text-2xl font-bold text-black">
                          UGX {price.amount.toLocaleString()}
                        </div>
                        <div className="text-xs text-dark">{price.label}</div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div>
                    <div className="text-2xl font-bold text-black">Free</div>
                    <div className="text-xs text-dark">30 days trial</div>
                  </div>
                )}
              </div>

              {/* User Limit */}
              <div className="px-6 pb-4">
                <p className="text-xs text-dark">{plan.userLimit}</p>
              </div>

              {/* Features */}
              <div className="px-6 pb-4 flex-grow">
                <div className="space-y-2">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <IconifyIconClient
                        icon="tabler:check"
                        className="size-5 text-primary flex-shrink-0"
                      />
                      <span className="text-sm">{feature.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Loyalty Bonus */}
              {plan.loyaltyBonus && (
                <div className="bg-dark text-white px-6 py-4 mt-auto">
                  <p className="text-xs">{plan.loyaltyBonus}</p>
                </div>
              )}

              {/* CTA */}
              <div className="p-6 pt-4">
                <Link
                  href="/contact"
                  className="block w-full py-3 text-center bg-primary border-2 border-dark text-dark font-medium rounded-lg transition-all duration-300 hover:bg-dark hover:text-primary"
                >
                  SELECT PLAN
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
