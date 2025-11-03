'use client';

import Link from 'next/link';
import React from 'react';
import IconifyIconClient from '@/component/IconifyIconClient';
import dynamic from 'next/dynamic';

// Dynamically import Map component to avoid SSR issues with leaflet
const Map = dynamic(() => import('./Map'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-96 bg-body-bg border border-neutral-200 rounded-2xl flex items-center justify-center">
      <div className="text-gray-400">Loading map...</div>
    </div>
  ),
});

const Solution = () => {
  return (
    <>
      <section className="bg-white lg:py-25 md:py-22.5 py-17.5">
        <div className="container">
          <div
            className="grid md:grid-cols-3 gap-5"
            data-aos="fade-up"
            data-aos-delay={150}
            data-aos-duration={500}
            data-aos-easing="ease-in-out"
          >
            <div className="bg-body-bg lg:p-7.5 p-5 rounded-2xl">
              <div className="size-12.5 bg-dark rounded-full inline-flex items-center justify-center mb-5">
                <IconifyIconClient icon="solar:letter-linear" className="size-6 text-primary" />
              </div>
              <h3 className="text-2xl mb-2.5">Email Us</h3>
              <p className="mb-2.5">Send us an email anytime!</p>
              <Link href="mailto:business@coopprofiler.com" className="text-primary underline">
                business@coopprofiler.com
              </Link>
            </div>

            <div className="bg-body-bg lg:p-7.5 p-5 rounded-2xl">
              <div className="size-12.5 bg-dark rounded-full inline-flex items-center justify-center mb-5">
                <IconifyIconClient icon="solar:phone-calling-linear" className="size-6 text-primary" />
              </div>
              <h3 className="text-2xl mb-2.5">Call Us</h3>
              <p className="mb-2.5">Give us a call Monday - Friday</p>
              <div className="flex flex-col gap-1">
                <Link href="tel:+256414581453" className="text-primary underline text-sm">
                  +256 414 581453
                </Link>
                <Link href="tel:+256200917823" className="text-primary underline text-sm">
                  +256 200 917823
                </Link>
              </div>
            </div>

            <div className="bg-body-bg lg:p-7.5 p-5 rounded-2xl">
              <div className="size-12.5 bg-dark rounded-full inline-flex items-center justify-center mb-5">
                <IconifyIconClient icon="solar:map-point-outline" className="size-6 text-primary" />
              </div>
              <h3 className="text-2xl mb-2.5">Visit Us</h3>
              <p className="mb-2.5">Our office location</p>
              <div className="text-primary text-sm">
                <p>Plot 1, Katalima Crescent, Naguru</p>
                <p>P.O.Box 130337, Kampala (U)</p>
              </div>
            </div>
          </div>

          {/* Map */}
          <div
            className="mt-12.5"
            data-aos="fade-up"
            data-aos-delay={200}
            data-aos-duration={500}
            data-aos-easing="ease-in-out"
          >
            <Map />
          </div>
        </div>
      </section>
    </>
  );
};

export default Solution;
