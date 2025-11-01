'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Country = 'UG' | 'RSA' | 'GLOBAL';
export type Currency = 'UGX' | 'ZAR' | 'USD';
export type BillingCycle = 'annual' | 'two-year';

export interface CountryCurrency {
  country: Country;
  currency: Currency;
  symbol: string;
  exchangeRate: number; // Rate to USD
}

export const countryCurrencies: Record<Country, CountryCurrency> = {
  UG: {
    country: 'UG',
    currency: 'UGX',
    symbol: 'UGX',
    exchangeRate: 1, // Will need actual exchange rate
  },
  RSA: {
    country: 'RSA',
    currency: 'ZAR',
    symbol: 'R',
    exchangeRate: 1, // Will need actual exchange rate
  },
  GLOBAL: {
    country: 'GLOBAL',
    currency: 'USD',
    symbol: '$',
    exchangeRate: 1,
  },
};

interface PricingContextType {
  selectedCountry: Country;
  selectedCurrency: Currency;
  currencySymbol: string;
  billingCycle: BillingCycle;
  setSelectedCountry: (country: Country) => void;
  setBillingCycle: (cycle: BillingCycle) => void;
  convertPrice: (usdPrice: number, showUSD?: boolean) => { local: string; usd: string };
}

const PricingContext = createContext<PricingContextType | undefined>(undefined);

export const usePricing = () => {
  const context = useContext(PricingContext);
  if (!context) {
    throw new Error('usePricing must be used within PricingProvider');
  }
  return context;
};

interface PricingProviderProps {
  children: ReactNode;
}

export const PricingProvider: React.FC<PricingProviderProps> = ({ children }) => {
  const [selectedCountry, setSelectedCountryState] = useState<Country>('GLOBAL');
  const [billingCycle, setBillingCycleState] = useState<BillingCycle>('annual');

  // Auto-detect country from IP (default to UG/GLOBAL)
  useEffect(() => {
    // This would ideally use an IP geolocation service
    // For now, defaulting to GLOBAL (UG content)
    setSelectedCountryState('GLOBAL');
  }, []);

  const setSelectedCountry = (country: Country) => {
    setSelectedCountryState(country);
    // Store in localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('coopprofiler-country', country);
    }
  };

  const setBillingCycle = (cycle: BillingCycle) => {
    setBillingCycleState(cycle);
    if (typeof window !== 'undefined') {
      localStorage.setItem('coopprofiler-billing-cycle', cycle);
    }
  };

  // Load from localStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedCountry = localStorage.getItem('coopprofiler-country') as Country;
      const savedBilling = localStorage.getItem('coopprofiler-billing-cycle') as BillingCycle;
      if (savedCountry && ['UG', 'RSA', 'GLOBAL'].includes(savedCountry)) {
        setSelectedCountryState(savedCountry);
      }
      if (savedBilling && ['annual', 'two-year'].includes(savedBilling)) {
        setBillingCycleState(savedBilling);
      }
    }
  }, []);

  const selectedCountryData = countryCurrencies[selectedCountry];
  const selectedCurrency = selectedCountryData.currency;
  const currencySymbol = selectedCountryData.symbol;

  // Convert price from base pricing (assuming UGX is base)
  const convertPrice = (basePrice: number, showUSD: boolean = true) => {
    // Base prices are in UGX, need to convert
    let localPrice = basePrice;
    
    if (selectedCurrency === 'ZAR') {
      // Convert UGX to ZAR (example rate, should be fetched from API)
      localPrice = basePrice * 0.005; // Approximate conversion
    } else if (selectedCurrency === 'USD') {
      // Convert UGX to USD
      localPrice = basePrice * 0.00027; // Approximate conversion
    }

    const usdPrice = basePrice * 0.00027;

    const formatLocal = (price: number) => {
      if (selectedCurrency === 'USD') {
        return `$${price.toFixed(2)}`;
      }
      return `${selectedCurrency} ${Math.round(price).toLocaleString()}`;
    };

    const formatUSD = (price: number) => {
      return `$${price.toFixed(2)}`;
    };

    return {
      local: formatLocal(localPrice),
      usd: showUSD ? formatUSD(usdPrice) : '',
    };
  };

  return (
    <PricingContext.Provider
      value={{
        selectedCountry,
        selectedCurrency,
        currencySymbol,
        billingCycle,
        setSelectedCountry,
        setBillingCycle,
        convertPrice,
      }}
    >
      {children}
    </PricingContext.Provider>
  );
};

