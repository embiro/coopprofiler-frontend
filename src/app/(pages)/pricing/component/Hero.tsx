'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import IconifyIconClient from '@/component/IconifyIconClient';
import { usePricing, Country, BillingCycle } from '@/context/PricingContext';
import PricingCalculator, { PlanType } from './PricingCalculator';

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
  planType: PlanType;
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
    planType: 'PRI',
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
    planType: 'PRI',
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
    loyaltyBonus:
      'Primary loyalty bonus: For every 100 members profiled - 5% to be rewarded to the Cooperative, once at the end of the year',
    highlight: true,
  },
  {
    id: 'STA',
    label: 'STA Plan',
    icon: 'solar:network-structure-outline',
    description: 'For Apex Bodies and STAs',
    planType: 'STA',
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
    loyaltyBonus:
      'STA loyalty bonus: For every 50 members profiled - 5% to be rewarded to the Cooperative, once at the end of the year',
  },
  {
    id: 'PARTNERS',
    label: 'Partners Plan',
    icon: 'solar:handshake-linear',
    description: 'Complete solution for Partners',
    planType: 'PARTNER',
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
  const { selectedCountry, setSelectedCountry, billingCycle, setBillingCycle, convertPrice } =
    usePricing();
  const [selectedPlan, setSelectedPlan] = useState<Tier | null>(null);
  const [planPrices, setPlanPrices] = useState<
    Record<string, { monthly: number; annual: number; twoYear: number }>
  >({});

  const getPlanPrice = (planId: Tier) => {
    const price = planPrices[planId];
    if (!price) return null;

    const displayPrice = billingCycle === 'two-year' ? price.twoYear : price.annual;
    return convertPrice(displayPrice, true);
  };

  const getCTAText = (plan: PricingPlan) => {
    if (plan.id === 'FREE') {
      return 'Start Free Trial';
    }
    return 'Get Started';
  };

  const handleGetStarted = (plan: PricingPlan) => {
    // Build URL with parameters
    const params = new URLSearchParams();
    params.set('plan', plan.planType);
    params.set('billing', billingCycle);

    // Get pricing calculator values (would need to be lifted up)
    // For now, redirect to app with basic params
    window.location.href = `https://app.coopprofiler.com/signup?${params.toString()}`;
  };

  return (
    <section className="lg:py-25 md:py-22.5 py-17.5 bg-body-bg">
      <div className="container">
        {/* Country & Currency Selector */}
        <div
          className="lg:mb-12.5 text-center md:mb-10 mb-7.5"
          data-aos="fade-up"
          data-aos-duration={500}
          data-aos-easing="ease-in-out"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="text-sm font-medium">Country & Currency:</span>
            <div className="flex gap-2">
              {(['GLOBAL', 'UG', 'RSA'] as Country[]).map(country => (
                <button
                  key={country}
                  onClick={() => setSelectedCountry(country)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    selectedCountry === country
                      ? 'bg-primary text-dark'
                      : 'bg-white text-dark hover:bg-neutral-100'
                  }`}
                >
                  {country === 'GLOBAL' ? 'Global' : country}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Billing Cycle Toggle */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-xl p-1 inline-flex gap-1">
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${
                billingCycle === 'annual'
                  ? 'bg-primary text-dark'
                  : 'text-dark hover:bg-neutral-100'
              }`}
            >
              Annual
            </button>
            <button
              onClick={() => setBillingCycle('two-year')}
              className={`px-6 py-2 rounded-lg font-medium transition-all relative ${
                billingCycle === 'two-year'
                  ? 'bg-primary text-dark'
                  : 'text-dark hover:bg-neutral-100'
              }`}
            >
              2-Year
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                Save 15%
              </span>
            </button>
          </div>
        </div>

        {/* Header */}
        <div
          className="lg:mb-12.5 text-center md:mb-10 mb-7.5"
          data-aos="fade-up"
          data-aos-duration={500}
          data-aos-easing="ease-in-out"
        >
          <h2 className="mb-2.5 lg:text-5.5xl md:text-4.6xl text-4xl">Choose Your Plan</h2>
          <p className="mb-2.5">Start with a free trial · No hidden fees · Cancel anytime</p>
        </div>

        <div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-5"
          data-aos="fade-up"
          data-aos-delay={100}
          data-aos-duration={500}
          data-aos-easing="ease-in-out"
        >
          {plans.map(plan => (
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

              {/* Pricing Calculator for paid plans */}
              {plan.id !== 'FREE' && (
                <div className="px-6 pb-4">
                  <PricingCalculator
                    planType={plan.planType}
                    onPriceChange={prices => {
                      setPlanPrices(prev => ({
                        ...prev,
                        [plan.id]: prices,
                      }));
                    }}
                  />
                </div>
              )}

              {/* Free Trial Display */}
              {plan.id === 'FREE' && (
                <div className="px-6 pb-4">
                  <div>
                    <div className="text-2xl font-bold text-black">Free</div>
                    <div className="text-xs text-dark">30 days trial</div>
                  </div>
                </div>
              )}

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
              {plan.loyaltyBonus && billingCycle === 'annual' && (
                <div className="bg-dark text-white px-6 py-4 mt-auto">
                  <p className="text-xs">{plan.loyaltyBonus}</p>
                </div>
              )}

              {/* CTA */}
              <div className="p-6 pt-4">
                {plan.id === 'FREE' ? (
                  <Link
                    href="https://app.coopprofiler.com/signup"
                    className="block w-full py-3 text-center bg-primary border-2 border-dark text-dark font-medium rounded-lg transition-all duration-300 hover:bg-dark hover:text-primary"
                  >
                    {getCTAText(plan)}
                  </Link>
                ) : (
                  <button
                    onClick={() => handleGetStarted(plan)}
                    className="block w-full py-3 text-center bg-primary border-2 border-dark text-dark font-medium rounded-lg transition-all duration-300 hover:bg-dark hover:text-primary"
                  >
                    {getCTAText(plan)}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
