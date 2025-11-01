'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import IconifyIconClient from '@/component/IconifyIconClient';
import { usePricing, Country, BillingCycle } from '@/context/PricingContext';

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
  planType: 'PRI' | 'STA' | 'PARTNER';
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

  // Calculator state
  const [numMembers, setNumMembers] = useState(100);
  const [numPrimaryCooperatives, setNumPrimaryCooperatives] = useState(5);
  const [numSTACooperatives, setNumSTACooperatives] = useState(2);

  const [calculatedPrices, setCalculatedPrices] = useState<Record<string, number>>({});

  // Calculate prices for each plan
  useEffect(() => {
    const prices: Record<string, number> = {};

    // PRI calculation
    const priBase = pricingRates.PRI.perCooperative + numMembers * pricingRates.PRI.perMember;
    prices.PRIMARY = billingCycle === 'two-year' ? priBase * 2 * 0.85 : priBase;

    // STA calculation
    const staBase =
      numPrimaryCooperatives * pricingRates.STA.perPrimaryCooperative +
      numMembers * pricingRates.STA.perMember;
    prices.STA = billingCycle === 'two-year' ? staBase * 2 * 0.85 : staBase;

    // PARTNER calculation
    const partnerBase =
      pricingRates.PARTNER.perPartner +
      numSTACooperatives * pricingRates.PARTNER.perSecondaryCooperative +
      numPrimaryCooperatives * pricingRates.PARTNER.perPrimaryCooperative +
      numMembers * pricingRates.PARTNER.perMember;
    prices.PARTNERS = billingCycle === 'two-year' ? partnerBase * 2 * 0.85 : partnerBase;

    setCalculatedPrices(prices);
  }, [numMembers, numPrimaryCooperatives, numSTACooperatives, billingCycle]);

  const getPlanPrice = (planId: Tier) => {
    if (planId === 'FREE') return null;
    const price = calculatedPrices[planId];
    if (!price) return null;
    return convertPrice(price, true);
  };

  const getCTAText = (plan: PricingPlan) => {
    if (plan.id === 'FREE') {
      return 'Start Free Trial';
    }
    return 'Get Started';
  };

  // Get features to display for each plan (showing only new features for higher plans)
  const getPlanFeatures = (plan: PricingPlan, planIndex: number) => {
    // First plan shows all features
    if (planIndex === 0) {
      return { showAll: true, features: plan.features, basePlan: null };
    }

    const previousPlan = plans[planIndex - 1];
    const previousFeatures = new Set(previousPlan.features.map(f => f.name));
    const currentFeatures = new Set(plan.features.map(f => f.name));

    // Check if current plan has all previous plan's features
    const hasAllPrevious = [...previousFeatures].every(f => currentFeatures.has(f));

    if (hasAllPrevious) {
      // Find additional features
      const additionalFeatures = plan.features.filter(f => !previousFeatures.has(f.name));

      return {
        showAll: false,
        features: additionalFeatures,
        basePlan: previousPlan.label,
      };
    }

    // Doesn't contain all previous features, show all
    return { showAll: true, features: plan.features, basePlan: null };
  };

  const handleGetStarted = (plan: PricingPlan) => {
    const params = new URLSearchParams();
    params.set('plan', plan.planType);
    params.set('billing', billingCycle);

    if (plan.planType === 'PRI') {
      params.set('members', numMembers.toString());
    } else if (plan.planType === 'STA') {
      params.set('members', numMembers.toString());
      params.set('primaryCooperatives', numPrimaryCooperatives.toString());
    } else if (plan.planType === 'PARTNER') {
      params.set('members', numMembers.toString());
      params.set('primaryCooperatives', numPrimaryCooperatives.toString());
      params.set('staCooperatives', numSTACooperatives.toString());
    }

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
          <p className="mb-2.5">Start with a free trial · No hidden fees · Cancel anytime</p>
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
              {savings > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                  Save {savings}%
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Pricing Calculator */}
        <div
          className="mb-12 max-w-4xl mx-auto bg-white rounded-2xl p-8"
          data-aos="fade-up"
          data-aos-delay={100}
          data-aos-duration={500}
          data-aos-easing="ease-in-out"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Calculate Your Price</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Number of Members - All plans */}
            <div>
              <label className="block text-sm font-medium mb-2">Number of Members</label>
              <div className="flex items-center gap-4">
                <input
                  type="range"
                  min={5}
                  max={50000}
                  value={numMembers}
                  onChange={e => setNumMembers(Number(e.target.value))}
                  className="flex-1"
                />
                <div className="w-24 text-right font-semibold">{numMembers.toLocaleString()}</div>
              </div>
            </div>

            {/* Number of Primary Cooperatives - STA and PARTNER */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Number of Primary Cooperatives
              </label>
              <div className="flex items-center gap-4">
                <input
                  type="range"
                  min={1}
                  max={500}
                  value={numPrimaryCooperatives}
                  onChange={e => setNumPrimaryCooperatives(Number(e.target.value))}
                  className="flex-1"
                />
                <div className="w-24 text-right font-semibold">{numPrimaryCooperatives}</div>
              </div>
            </div>

            {/* Number of STA Cooperatives - PARTNER only */}
            <div>
              <label className="block text-sm font-medium mb-2">Number of STA Cooperatives</label>
              <div className="flex items-center gap-4">
                <input
                  type="range"
                  min={1}
                  max={100}
                  value={numSTACooperatives}
                  onChange={e => setNumSTACooperatives(Number(e.target.value))}
                  className="flex-1"
                />
                <div className="w-24 text-right font-semibold">{numSTACooperatives}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Plan Cards */}
        <div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-5"
          data-aos="fade-up"
          data-aos-delay={150}
          data-aos-duration={500}
          data-aos-easing="ease-in-out"
        >
          {plans.map((plan, planIndex) => {
            const price = getPlanPrice(plan.id);
            const { showAll, features, basePlan } = getPlanFeatures(plan, planIndex);

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
                  {plan.id === 'FREE' ? (
                    <>
                      <div className="text-2xl font-bold text-black">Free</div>
                      <div className="text-xs text-dark">30 days trial</div>
                    </>
                  ) : price ? (
                    <>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-black">{price.local}</span>
                        {price.usd && <span className="text-xs text-dark">({price.usd} USD)</span>}
                      </div>
                      <div className="text-xs text-dark mt-1">
                        per {billingCycle === 'two-year' ? '2 years' : 'year'}
                      </div>
                    </>
                  ) : (
                    <div className="text-sm text-dark">Calculate your price above</div>
                  )}
                </div>

                {/* User Limit */}
                <div className="px-6 pb-4">
                  <p className="text-xs text-dark">{plan.userLimit}</p>
                </div>

                {/* Features */}
                <div className="px-6 pb-4 flex-grow">
                  <div className="space-y-2">
                    {showAll ? (
                      // Show all features for first plan
                      features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <IconifyIconClient
                            icon="tabler:check"
                            className="size-5 text-primary flex-shrink-0"
                          />
                          <span className="text-sm">{feature.name}</span>
                        </div>
                      ))
                    ) : (
                      // Show base plan reference + additional features
                      <>
                        <div className="flex items-center gap-2 mb-2">
                          <IconifyIconClient
                            icon="tabler:check"
                            className="size-5 text-primary flex-shrink-0"
                          />
                          <span className="text-sm font-medium">Everything in {basePlan}</span>
                        </div>
                        {features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <IconifyIconClient
                              icon="tabler:plus"
                              className="size-5 text-primary flex-shrink-0"
                            />
                            <span className="text-sm">{feature.name}</span>
                          </div>
                        ))}
                      </>
                    )}
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
                      disabled={!price}
                      className="block w-full py-3 text-center bg-primary border-2 border-dark text-dark font-medium rounded-lg transition-all duration-300 hover:bg-dark hover:text-primary disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {getCTAText(plan)}
                    </button>
                  )}
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
