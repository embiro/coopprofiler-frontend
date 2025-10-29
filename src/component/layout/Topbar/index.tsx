'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import IconifyIconClient from '@/component/IconifyIconClient';
import dynamic from 'next/dynamic';
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
                  src="/images/logo_green.jpg"
                  alt="COOP PROFILER Logo"
                  width={150}
                  height={40}
                  className="h-8.5 lg:h-9 w-auto"
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
                  className="bg-dark text-white hover:bg-primary/90 hover:scale-105 rounded-2xl px-7.5 py-3.5 font-semibold transition-all duration-300 shadow-md"
                >
                  Get Started
                </Link>
              </div>

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

export default Topbar;
