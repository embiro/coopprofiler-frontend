import React from 'react';
import IconifyIconClient from '@/component/IconifyIconClient';
import Link from 'next/link';

type PricingPlan = {
  title: string;
  description?: string;
  pricing: string[];
  memberLimits: {
    members: string;
    users: string;
  };
  features: string[];
  loyaltyBonus?: string;
};

const pricingPlans: PricingPlan[] = [
  {
    title: 'FREE TRIAL',
    description: 'Free 30 days trial.',
    pricing: [],
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
  },
  {
    title: 'PRIMARY PLAN',
    pricing: ['UGX 24500/Yr/ Cooperative', 'UGX 1220/Yr/ Individual Member'],
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
    pricing: ['UGX 36500/Yr/Cooperative', 'UGX 24500/Yr/Cooperative Member'],
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
    pricing: [
      'UGX 365000/Yr/Partner',
      'UGX 36500/Yr/Secondary Cooperative',
      'UGX 24500/Yr/Primary Cooperative',
      'UGX 1220/Yr/Individual Member',
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
  // Helper function to get features comparison
  const getFeatureComparison = (plan: PricingPlan, planIndex: number) => {
    if (planIndex === 0) {
      // First plan shows all features
      return { basePlan: null, additionalFeatures: plan.features, showComparison: false };
    }

    const previousPlan = pricingPlans[planIndex - 1];
    const previousFeatures = new Set(previousPlan.features);
    const currentFeatures = new Set(plan.features);

    // Check if all previous features are in current plan
    const hasAllPrevious = [...previousFeatures].every(f => currentFeatures.has(f));

    if (hasAllPrevious) {
      // Find additional features
      const additionalFeatures = plan.features.filter(f => !previousFeatures.has(f));

      if (additionalFeatures.length === 0) {
        // Same features as previous plan
        return {
          basePlan: previousPlan.title,
          additionalFeatures: [],
          showComparison: true,
          isSame: true,
        };
      }

      return {
        basePlan: previousPlan.title,
        additionalFeatures,
        showComparison: true,
        isSame: false,
      };
    }

    // Doesn't contain all previous features, show all
    return { basePlan: null, additionalFeatures: plan.features, showComparison: false };
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
              Choose the plan that fits your needs
            </h2>
            <p className="text-base mb-2.5 max-w-2xl mx-auto">
              Flexible pricing options designed for cooperatives of all sizes
            </p>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 lg:gap-7.5">
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
                  {plan.pricing.length > 0 && (
                    <div className="space-y-3 mb-4 bg-primary/10 rounded-xl p-4 border border-primary/20">
                      {plan.pricing.map((price, idx) => (
                        <p
                          key={idx}
                          className="text-base lg:text-lg font-bold leading-tight"
                          style={{ color: '#000' }}
                        >
                          {price}
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
                    {(() => {
                      const comparison = getFeatureComparison(plan, index);

                      if (comparison.showComparison && comparison.basePlan) {
                        if (comparison.isSame) {
                          // Same as previous plan, but may have loyalty bonus
                          return (
                            <>
                              <div className="flex gap-2.5 items-start">
                                <IconifyIconClient
                                  icon="tabler:circle-check"
                                  className="size-5 lg:size-6 text-primary flex-shrink-0 mt-0.5"
                                />
                                <span className="text-sm lg:text-base text-neutral-700 italic">
                                  Same features as {comparison.basePlan}
                                </span>
                              </div>
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
                            </>
                          );
                        } else {
                          // Everything from previous + additional features
                          return (
                            <>
                              <div className="flex gap-2.5 items-start">
                                <IconifyIconClient
                                  icon="tabler:circle-check"
                                  className="size-5 lg:size-6 text-primary flex-shrink-0 mt-0.5"
                                />
                                <span className="text-sm lg:text-base text-neutral-700 font-medium">
                                  Everything under {comparison.basePlan} +
                                </span>
                              </div>
                              {comparison.additionalFeatures.map((feature, idx) => (
                                <div key={idx} className="flex gap-2.5 items-start">
                                  <IconifyIconClient
                                    icon="tabler:circle-check"
                                    className="size-5 lg:size-6 text-primary flex-shrink-0 mt-0.5"
                                  />
                                  <span className="text-sm lg:text-base text-neutral-700">
                                    {feature}
                                  </span>
                                </div>
                              ))}
                            </>
                          );
                        }
                      } else {
                        // Show all features normally
                        return plan.features.map((feature, idx) => (
                          <div key={idx} className="flex gap-2.5 items-start">
                            <IconifyIconClient
                              icon="tabler:circle-check"
                              className="size-5 lg:size-6 text-primary flex-shrink-0 mt-0.5"
                            />
                            <span className="text-sm lg:text-base text-neutral-700">{feature}</span>
                          </div>
                        ));
                      }
                    })()}
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
