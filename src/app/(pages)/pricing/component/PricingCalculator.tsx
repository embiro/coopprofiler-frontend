'use client';

import React, { useState, useEffect } from 'react';
import { usePricing, Country, BillingCycle } from '@/context/PricingContext';
import IconifyIconClient from '@/component/IconifyIconClient';

export type PlanType = 'PRI' | 'STA' | 'PARTNER';

interface PricingCalculatorProps {
  planType: PlanType;
  onPriceChange?: (price: { monthly: number; annual: number; twoYear: number }) => void;
}

// Pricing structure in base currency (UGX)
const pricingRates = {
  PRI: {
    perMember: 1220, // UGX per member per year
    perCooperative: 24500, // UGX per cooperative per year
  },
  STA: {
    perMember: 24500, // UGX per cooperative member per year
    perPrimaryCooperative: 36500, // UGX per primary cooperative per year
  },
  PARTNER: {
    perPartner: 365000, // UGX per partner per year
    perSecondaryCooperative: 36500, // UGX per secondary cooperative per year
    perPrimaryCooperative: 24500, // UGX per primary cooperative per year
    perMember: 1220, // UGX per individual member per year
  },
};

const PricingCalculator: React.FC<PricingCalculatorProps> = ({ planType, onPriceChange }) => {
  const { selectedCountry, selectedCurrency, currencySymbol, billingCycle, convertPrice } =
    usePricing();

  // State for sliders based on plan type
  const [numMembers, setNumMembers] = useState(100);
  const [numPrimaryCooperatives, setNumPrimaryCooperatives] = useState(5);
  const [numSTACooperatives, setNumSTACooperatives] = useState(2);

  const [calculatedPrice, setCalculatedPrice] = useState(0);

  useEffect(() => {
    let baseAnnualPrice = 0;

    switch (planType) {
      case 'PRI':
        baseAnnualPrice = pricingRates.PRI.perCooperative + numMembers * pricingRates.PRI.perMember;
        break;
      case 'STA':
        baseAnnualPrice =
          numPrimaryCooperatives * pricingRates.STA.perPrimaryCooperative +
          numMembers * pricingRates.STA.perMember;
        break;
      case 'PARTNER':
        baseAnnualPrice =
          pricingRates.PARTNER.perPartner +
          numSTACooperatives * pricingRates.PARTNER.perSecondaryCooperative +
          numPrimaryCooperatives * pricingRates.PARTNER.perPrimaryCooperative +
          numMembers * pricingRates.PARTNER.perMember;
        break;
    }

    // Apply billing cycle multiplier
    let finalPrice = baseAnnualPrice;
    if (billingCycle === 'two-year') {
      // Typically 2-year plans have additional discount (e.g., 15% more off annual)
      finalPrice = baseAnnualPrice * 2 * 0.85; // 15% discount on 2-year
    } else {
      finalPrice = baseAnnualPrice;
    }

    setCalculatedPrice(finalPrice);

    if (onPriceChange) {
      const monthly = finalPrice / 12;
      const annual = finalPrice;
      const twoYear = baseAnnualPrice * 2 * 0.85;
      onPriceChange({ monthly, annual, twoYear });
    }
  }, [
    planType,
    numMembers,
    numPrimaryCooperatives,
    numSTACooperatives,
    billingCycle,
    onPriceChange,
  ]);

  const priceDisplay = convertPrice(calculatedPrice, true);
  const savings = billingCycle === 'two-year' ? 15 : 0;

  const getSliderMax = (type: string) => {
    switch (type) {
      case 'members':
        return planType === 'PRI' ? 50000 : 100000;
      case 'primaryCooperatives':
        return planType === 'STA' ? 100 : 500;
      case 'staCooperatives':
        return 100;
      default:
        return 100;
    }
  };

  const getSliderMin = (type: string) => {
    return type === 'members' ? 5 : 1;
  };

  return (
    <div className="space-y-6 p-6 bg-body-bg rounded-2xl">
      <h3 className="text-xl font-bold mb-4">Calculate Your Price</h3>

      {/* Number of Members Slider - All plans */}
      <div>
        <label className="block text-sm font-medium mb-2">Number of Members</label>
        <div className="flex items-center">
          <input
            type="range"
            min={getSliderMin('members')}
            max={getSliderMax('members')}
            value={numMembers}
            onChange={e => setNumMembers(Number(e.target.value))}
            className="flex-1"
          />
          <div className="font-semibold min-w-[3rem]">{numMembers.toLocaleString()}</div>
        </div>
      </div>

      {/* Number of Primary Cooperatives - STA and PARTNER */}
      {(planType === 'STA' || planType === 'PARTNER') && (
        <div>
          <label className="block text-sm font-medium mb-2">Number of Primary Cooperatives</label>
          <div className="flex items-center">
            <input
              type="range"
              min={getSliderMin('primaryCooperatives')}
              max={getSliderMax('primaryCooperatives')}
              value={numPrimaryCooperatives}
              onChange={e => setNumPrimaryCooperatives(Number(e.target.value))}
              className="flex-1"
            />
            <div className="font-semibold min-w-[3rem]">{numPrimaryCooperatives}</div>
          </div>
        </div>
      )}

      {/* Number of STA Cooperatives - PARTNER only */}
      {planType === 'PARTNER' && (
        <div>
          <label className="block text-sm font-medium mb-2">Number of STA Cooperatives</label>
          <div className="flex items-center">
            <input
              type="range"
              min={getSliderMin('staCooperatives')}
              max={getSliderMax('staCooperatives')}
              value={numSTACooperatives}
              onChange={e => setNumSTACooperatives(Number(e.target.value))}
              className="flex-1"
            />
            <div className="font-semibold min-w-[3rem]">{numSTACooperatives}</div>
          </div>
        </div>
      )}

      {/* Price Display */}
      <div className="pt-4 border-t border-neutral-200">
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-bold">{priceDisplay.local}</span>
          {priceDisplay.usd && <span className="text-sm text-dark">({priceDisplay.usd} USD)</span>}
        </div>
        <div className="text-sm text-dark mt-1">
          per {billingCycle === 'two-year' ? '2 years' : 'year'}
          {savings > 0 && <span className="ml-2 text-primary font-semibold">Save {savings}%</span>}
        </div>
      </div>
    </div>
  );
};

export default PricingCalculator;
