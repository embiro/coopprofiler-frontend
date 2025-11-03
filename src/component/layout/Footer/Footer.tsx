import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import IconifyIconClient from '@/component/IconifyIconClient';
import { currentYear } from '@/component/CurrentYear';
// @ts-ignore - .jfif files are not in TypeScript's default image types
import PDPO from '@/assets/images/partners/PDPO.png';
import nita from '@/assets/images/partners/nita.jpg';

const Footer = () => {
  return (
    <>
      <footer className="bg-dark pt-15 pb-10 md:pt-17.5 md:pb-10 lg:pt-25 lg:pb-10 overflow-hidden">
        <div className="container">
          <div className="grid md:grid-cols-2 md:gap-12.5 lg:grid-cols-5 lg:gap-10 gap-10">
            {/* Company Column */}
            <div className="lg:col-span-1">
              <Link href="/" className="inline-block mb-4">
                <Image
                  src="/images/logo-white.png"
                  alt="CoopProfiler"
                  width={150}
                  height={40}
                  className="h-10 w-auto"
                />
              </Link>
              <p className="mt-2.5 text-white text-sm">
                Powering Cooperative Member Value, Legacy and Sustainability.
              </p>
            </div>

            {/* Solutions Column */}
            <div className="lg:col-span-1">
              <h4 className="text-1.5xl mb-5 text-white font-semibold">Solutions</h4>
              <ul className="flex flex-col justify-start gap-2.5 leading-normal">
                <li>
                  <Link
                    href="/solutions/primary-cooperatives"
                    className="hover:text-primary text-white transition-all duration-300 text-sm"
                  >
                    For Primary Cooperatives
                  </Link>
                </li>
                <li>
                  <Link
                    href="/solutions/apex-bodies"
                    className="hover:text-primary text-white transition-all duration-300 text-sm"
                  >
                    STAs
                  </Link>
                </li>
                <li>
                  <Link
                    href="/solutions/partners"
                    className="hover:text-primary text-white transition-all duration-300 text-sm"
                  >
                    For Partners
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources Column */}
            <div className="lg:col-span-1">
              <h4 className="text-1.5xl mb-5 text-white font-semibold">Resources</h4>
              <ul className="flex flex-col justify-start gap-2.5 leading-normal">
                <li>
                  <Link
                    href="/faqs"
                    className="hover:text-primary text-white transition-all duration-300 text-sm"
                  >
                    Help Center / FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-primary text-white transition-all duration-300 text-sm"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/why-coop-profiler"
                    className="hover:text-primary text-white transition-all duration-300 text-sm"
                  >
                    Why Coop Profiler
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal Column */}
            <div className="lg:col-span-1">
              <h4 className="text-1.5xl mb-5 text-white font-semibold">Legal</h4>
              <ul className="flex flex-col justify-start gap-2.5 leading-normal">
                <li>
                  <Link
                    href="/terms-and-conditions"
                    className="hover:text-primary text-white transition-all duration-300 text-sm"
                  >
                    Terms and Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy-policy"
                    className="hover:text-primary text-white transition-all duration-300 text-sm"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company + Social Links Column */}
            <div className="lg:col-span-1">
              <h4 className="text-1.5xl mb-5 text-white font-semibold">Company</h4>
              <ul className="flex flex-col justify-start gap-2.5 leading-normal mb-7.5">
                <li>
                  <Link
                    href="https://www.tui.ug"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary text-white transition-all duration-300 text-sm"
                  >
                    Visit TUI Website
                  </Link>
                </li>
              </ul>

              {/* Social Links */}
              <div className="mt-7.5">
                <p className="text-white text-sm mb-4">Follow Us:</p>
                <div className="flex gap-4">
                  <Link
                    href="https://x.com/CoopProfiler"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex"
                    aria-label="Twitter/X"
                  >
                    <IconifyIconClient
                      icon="tabler:brand-x"
                      className="size-5 text-white transform transition duration-300 hover:scale-110 hover:text-primary"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <hr className="border-top mt-7.5 border-neutral-700 md:mt-15" />

          {/* Regulators Section */}
          <div className="pt-7.5 md:pt-10 pb-7.5 md:pb-10">
            <p className="text-white text-sm text-center mb-5 opacity-80">Regulators</p>
            <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12 opacity-60">
              <div className="flex items-center justify-center">
                <Image
                  src={PDPO}
                  alt="PDPO"
                  className="h-12 lg:h-14 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src={nita}
                  alt="NITA"
                  className="h-12 lg:h-14 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>
          </div>

          <hr className="border-top border-neutral-700" />

          <div className="flex flex-col md:flex-row justify-between items-center pt-7.5 md:pt-10 gap-4">
            <div className="text-sm text-white text-center md:text-left">
              © {currentYear} CoopProfiler. All rights reserved.
            </div>
            <div className="text-sm text-white text-center md:text-right">
              Powered by{' '}
              <Link
                href="https://www.uhuruinstitute.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-primary"
              >
                TUI
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
