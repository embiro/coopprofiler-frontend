'use client';

import React from 'react';
import Image from 'next/image';
import IconifyIconClient from '@/component/IconifyIconClient';
import { usePricing, Country, BillingCycle } from '@/context/PricingContext';
import ugFlag from '@/assets/images/navigation/ug_flag.png';
import saFlag from '@/assets/images/navigation/sa_flag.png';

type Tier = 'PRIMARY' | 'STA' | 'PARTNERS';

interface PlanFeature {
  name: string;
  available: boolean;
}

interface PricingBreakdown {
  amount: number;
  label: string;
}

interface PricingPlan {
  id: Tier;
  label: string;
  icon: string;
  description: string;
  planType: 'PRI' | 'STA' | 'PARTNER';
  userLimit: string;
  features: PlanFeature[];
  pricingBreakdown: PricingBreakdown[];
  loyaltyBonus?: string;
  highlight?: boolean;
}

const plans: PricingPlan[] = [
  {
    id: 'PRIMARY',
    label: 'Primary Plan',
    icon: 'solar:users-group-rounded-outline',
    description: 'Perfect for Primary Cooperatives',
    planType: 'PRI',
    userLimit: 'Unlimited members, 5 user',
    pricingBreakdown: [
      { amount: 24500, label: 'Cooperative' },
      { amount: 1220, label: 'Individual Member' },
    ],
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
    pricingBreakdown: [
      { amount: 36500, label: 'Cooperative' },
      { amount: 24500, label: 'Cooperative Member' },
    ],
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
    pricingBreakdown: [
      { amount: 365000, label: 'Partner' },
      { amount: 36500, label: 'Secondary Cooperative' },
      { amount: 24500, label: 'Primary Cooperative' },
      { amount: 1220, label: 'Individual Member' },
    ],
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

// Pricing structure in base currency (UGX)
const pricingRates = {
  PRI: {
    perMember: 1220,
    perCooperative: 24500,
  },
  STA: {
    perMember: 24500,
    perPrimaryCooperative: 36500,
  },
  PARTNER: {
    perPartner: 365000,
    perSecondaryCooperative: 36500,
    perPrimaryCooperative: 24500,
    perMember: 1220,
  },
};

const PricingHero = () => {
  const { selectedCountry, setSelectedCountry, billingCycle, setBillingCycle, convertPrice } =
    usePricing();

  const formatPricingBreakdown = (breakdown: PricingBreakdown[]) => {
    return breakdown.map(item => {
      const converted = convertPrice(item.amount, true);
      const period = billingCycle === 'two-year' ? '2 Yr' : 'Yr';
      return `${converted.local}/${period}/${item.label}`;
    });
  };

  const handleGetStarted = (plan: PricingPlan) => {
    const params = new URLSearchParams();
    params.set('plan', plan.planType);
    params.set('billing', billingCycle);

    window.location.href = `https://app.coopprofiler.com/signup?${params.toString()}`;
  };

  const savings = billingCycle === 'two-year' ? 15 : 0;

  return (
    <section className="lg:py-25 md:py-22.5 py-17.5 bg-body-bg">
      <div className="container">
        {/* Header */}
        <div
          className="lg:mb-12.5 text-center md:mb-10 mb-7.5"
          data-aos="fade-up"
          data-aos-duration={500}
          data-aos-easing="ease-in-out"
        >
          <h2 className="mb-2.5 lg:text-5.5xl md:text-4.6xl text-4xl">Choose Your Plan</h2>
          <p className="mb-2.5">No hidden fees · Cancel anytime</p>
        </div>

        {/* Country & Currency Selector */}
        <div
          className="mb-8 text-center"
          data-aos="fade-up"
          data-aos-delay={50}
          data-aos-duration={500}
          data-aos-easing="ease-in-out"
        >
          <div className="flex items-center justify-center gap-4 mb-4 flex-wrap">
            <span className="text-sm font-medium">Currency:</span>
            <div className="flex gap-2">
              {(['GLOBAL', 'UG', 'RSA'] as Country[]).map(country => (
                <button
                  key={country}
                  onClick={() => setSelectedCountry(country)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2 ${
                    selectedCountry === country
                      ? 'bg-primary text-dark'
                      : 'bg-white text-dark hover:bg-neutral-100'
                  }`}
                  title={
                    country === 'GLOBAL' ? 'Global' : country === 'UG' ? 'Uganda' : 'South Africa'
                  }
                >
                  {country === 'GLOBAL' ? (
                    'Global'
                  ) : country === 'UG' ? (
                    <Image
                      src={ugFlag}
                      alt="Uganda"
                      width={24}
                      height={18}
                      className="rounded-sm object-cover"
                    />
                  ) : (
                    <Image
                      src={saFlag}
                      alt="South Africa"
                      width={24}
                      height={18}
                      className="rounded-sm object-cover"
                    />
                  )}
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
              {savings > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                  Save {savings}%
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Plan Cards */}
        <div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
          data-aos="fade-up"
          data-aos-delay={150}
          data-aos-duration={500}
          data-aos-easing="ease-in-out"
        >
          {plans.map((plan) => {
            return (
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

                {/* Pricing Display */}
                <div className="px-6 pb-4">
                  <div className="space-y-3 bg-primary/10 rounded-xl p-4 border border-primary/20">
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
                    <p className="text-xs leading-relaxed">
                      {plan.loyaltyBonus}
                      {billingCycle === 'two-year' && ' (Applicable for annual billing only)'}
                    </p>
                  </div>
                )}

                {/* CTA */}
                <div className="p-6 pt-4">
                  <button
                    onClick={() => handleGetStarted(plan)}
                    className="block w-full py-3 text-center bg-primary border-2 border-dark text-dark font-medium rounded-lg transition-all duration-300 hover:bg-dark hover:text-primary"
                  >
                    Get Started
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PricingHero;
