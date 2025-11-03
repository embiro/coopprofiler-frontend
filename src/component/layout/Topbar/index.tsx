'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import IconifyIconClient from '@/component/IconifyIconClient';
import dynamic from 'next/dynamic';
import { usePricing, Country } from '@/context/PricingContext';
import ugFlag from '@/assets/images/navigation/ug_flag.png';
import saFlag from '@/assets/images/navigation/sa_flag.png';
import coopLogo from '@/assets/images/navigation/coop_profiler_logo.png';
const MobileMenu = dynamic(() => import('./component/MobileMenu'));
const NavMenu = dynamic(() => import('./component/NavMenu'));

const Topbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`bg-white sticky top-0 inset-x-0 w-screen z-20 transition-all duration-300 ${
          isSticky ? 'shadow-md' : ''
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between py-2.5 lg:py-4.5">
            <div className="text-lg font-bold">
              <Link href="/">
                <Image
                  src={coopLogo}
                  alt="COOP PROFILER Logo"
                  width={200}
                  height={50}
                  className="h-14 lg:h-16 w-auto"
                />
              </Link>
            </div>
            <NavMenu />
            <div className="flex flex-row justify-center items-center md:gap-3 gap-2.5">
              {/* Secondary CTA - Login (Ghost button) */}
              <div className="md:flex hidden">
                <Link
                  href="https://app.coopprofiler.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark hover:text-primary border-2 border-transparent hover:border-primary rounded-2xl px-6 py-3 font-medium transition-all duration-300"
                >
                  Login
                </Link>
              </div>

              {/* Primary CTA - Get Started */}
              <div className="md:flex hidden">
                <Link
                  href="/pricing-1"
                  className="bg-dark text-white hover:bg-primary/90 hover:scale-105 rounded-xl px-5 py-2.5 font-semibold transition-all duration-300 shadow-md text-sm"
                >
                  Get Started
                </Link>
              </div>

              {/* Country Selector */}
              <CountrySelector />

              {/* Mobile menu button */}
              <div className="flex lg:hidden">
                <button
                  type="button"
                  className="bg-dark  text-white focus:text-black focus:bg-primary inline-flex justify-center items-center rounded-2xl md:size-13 size-11 p-3.5 font-medium transition-all duration-300"
                  aria-haspopup="dialog"
                  aria-expanded="false"
                  aria-controls="mobileMenuOffcanvas"
                  onClick={() => setMenuOpen(true)}
                >
                  <IconifyIconClient icon="tabler:menu-2" className="text-2xl size-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <MobileMenu isOpen={isMenuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
};

// Country Selector Component
const CountrySelector = () => {
  const { selectedCountry, setSelectedCountry } = usePricing();

  const countries: { code: Country; label: string; flag?: any }[] = [
    { code: 'GLOBAL', label: 'Global' },
    { code: 'UG', label: 'Uganda', flag: ugFlag },
    { code: 'RSA', label: 'South Africa', flag: saFlag },
  ];

  return (
    <div className="relative md:flex hidden">
      <div className="flex items-center gap-1 bg-body-bg rounded-lg px-2 py-1.5">
        {countries.map(country => (
          <button
            key={country.code}
            onClick={() => setSelectedCountry(country.code)}
            className={`px-2 py-1 text-xs font-medium rounded transition-all flex items-center gap-1.5 ${
              selectedCountry === country.code ? 'bg-primary text-dark' : 'text-dark hover:bg-white'
            }`}
            title={country.label}
          >
            {country.flag ? (
              <Image
                src={country.flag}
                alt={country.label}
                width={20}
                height={15}
                className="rounded-sm object-cover"
              />
            ) : (
              <span>{country.label}</span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Topbar;
