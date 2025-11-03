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

  // Function to detect country from browser locale/timezone
  const detectCountryFromBrowser = (): Country | null => {
    if (typeof window === 'undefined') return null;

    try {
      // Check browser locale
      const locale = navigator.language || (navigator as any).userLanguage || '';
      const localeLower = locale.toLowerCase();
      console.log('[Location Detection] Browser locale:', locale);

      // Check for Uganda indicators
      if (localeLower.includes('ug') || localeLower.includes('en-ug')) {
        console.log('[Location Detection] ✅ Detected Uganda from browser locale');
        return 'UG';
      }
      // Check for South Africa indicators
      if (
        localeLower.includes('za') ||
        localeLower.includes('en-za') ||
        localeLower.includes('af-za')
      ) {
        console.log('[Location Detection] ✅ Detected South Africa from browser locale');
        return 'RSA';
      }

      // Check timezone
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const timezoneLower = timezone.toLowerCase();
      console.log('[Location Detection] Browser timezone:', timezone);

      if (timezoneLower.includes('kampala') || timezoneLower.includes('east_africa')) {
        console.log('[Location Detection] ✅ Detected Uganda from browser timezone');
        return 'UG';
      }
      if (
        timezoneLower.includes('johannesburg') ||
        timezoneLower.includes('cape_town') ||
        timezoneLower.includes('africa/johannesburg')
      ) {
        console.log('[Location Detection] ✅ Detected South Africa from browser timezone');
        return 'RSA';
      }

      console.log('[Location Detection] ❌ No UG/RSA detected from browser (locale/timezone)');
    } catch (error) {
      console.warn('[Location Detection] Error detecting country from browser:', error);
    }

    return null;
  };

  // Function to detect country from IP geolocation
  const detectCountryFromIP = async (): Promise<Country | null> => {
    console.log('[Location Detection] 🌐 Starting IP geolocation detection...');
    try {
      // Using ip-api.com (free, no API key required, 45 requests/minute limit)
      const response = await fetch('https://ipapi.co/json/', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      });

      if (!response.ok) throw new Error('Failed to fetch location');

      const data = await response.json();
      const countryCode = data.country_code?.toUpperCase();
      console.log('[Location Detection] IP geolocation response:', {
        country_code: countryCode,
        country_name: data.country_name,
      });

      // Map country codes to our Country type
      if (countryCode === 'UG') {
        console.log('[Location Detection] ✅ Detected Uganda from IP geolocation');
        return 'UG';
      }
      if (countryCode === 'ZA') {
        console.log('[Location Detection] ✅ Detected South Africa from IP geolocation');
        return 'RSA';
      }

      console.log(
        `[Location Detection] ⚠️ Detected country ${countryCode} from IP, but not UG/RSA`
      );
    } catch (error) {
      console.warn('[Location Detection] ❌ Primary IP geolocation failed:', error);
      // Fallback to alternative service if first one fails
      try {
        console.log('[Location Detection] 🔄 Trying fallback IP geolocation service...');
        const response = await fetch('https://ip-api.com/json/?fields=countryCode', {
          method: 'GET',
          headers: {
            Accept: 'application/json',
          },
        });

        if (response.ok) {
          const data = await response.json();
          const countryCode = data.countryCode?.toUpperCase();
          console.log('[Location Detection] Fallback IP geolocation response:', {
            countryCode,
          });

          if (countryCode === 'UG') {
            console.log('[Location Detection] ✅ Detected Uganda from fallback IP geolocation');
            return 'UG';
          }
          if (countryCode === 'ZA') {
            console.log(
              '[Location Detection] ✅ Detected South Africa from fallback IP geolocation'
            );
            return 'RSA';
          }

          console.log(
            `[Location Detection] ⚠️ Detected country ${countryCode} from fallback IP, but not UG/RSA`
          );
        }
      } catch (fallbackError) {
        console.warn('[Location Detection] ❌ Fallback IP geolocation also failed:', fallbackError);
      }
    }

    console.log('[Location Detection] ❌ No UG/RSA detected from IP geolocation');
    return null;
  };

  const setSelectedCountry = (country: Country) => {
    console.log(
      `[Location Detection] 💾 Setting country to: ${country} and saving to localStorage`
    );
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

  // Load from localStorage and auto-detect country on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      console.log('[Location Detection] 🚀 Starting location detection process...');
      // First, check if user has a saved preference
      const savedCountry = localStorage.getItem('coopprofiler-country') as Country;
      const savedBilling = localStorage.getItem('coopprofiler-billing-cycle') as BillingCycle;

      if (savedCountry && ['UG', 'RSA', 'GLOBAL'].includes(savedCountry)) {
        // User has a saved preference, use it
        console.log(
          `[Location Detection] 📦 Found saved country preference: ${savedCountry} (skipping auto-detection)`
        );
        setSelectedCountryState(savedCountry);
      } else {
        console.log(
          '[Location Detection] 🔍 No saved preference found, starting auto-detection...'
        );
        // No saved preference, try to auto-detect
        // First try browser-based detection (fast, no API call)
        const browserCountry = detectCountryFromBrowser();
        if (browserCountry && (browserCountry === 'UG' || browserCountry === 'RSA')) {
          // User is in Uganda or South Africa
          console.log(
            `[Location Detection] ✅ Auto-detected and setting country to: ${browserCountry}`
          );
          setSelectedCountry(browserCountry);
        } else {
          // Browser detection didn't find UG/RSA, try IP geolocation
          console.log(
            '[Location Detection] 🔄 Browser detection unsuccessful, trying IP geolocation...'
          );
          detectCountryFromIP()
            .then(ipCountry => {
              if (ipCountry && (ipCountry === 'UG' || ipCountry === 'RSA')) {
                // User is in Uganda or South Africa
                console.log(
                  `[Location Detection] ✅ Auto-detected and setting country to: ${ipCountry}`
                );
                setSelectedCountry(ipCountry);
              } else {
                // User is in another country or location detection failed/disabled
                // Set to GLOBAL
                console.log(
                  `[Location Detection] 🌍 Setting country to GLOBAL (detected country: ${ipCountry || 'none'}, or detection failed)`
                );
                setSelectedCountry('GLOBAL');
              }
            })
            .catch(() => {
              // Location detection failed or is disabled
              // Set to GLOBAL
              console.log(
                '[Location Detection] ❌ Location detection failed/disabled, setting to GLOBAL'
              );
              setSelectedCountry('GLOBAL');
            });
        }
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
