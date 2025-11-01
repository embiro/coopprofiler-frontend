import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <>
      <section className="relative min-h-[450px] lg:min-h-[550px] flex items-center overflow-hidden max-w-[90%] mx-auto rounded-[16px] mt-10 mb-10">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/people_using_tech.png')`,
          }}
        >
          {/* Dark Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/70 to-transparent" />
        </div>

        {/* Content */}
        <div className="container relative z-10 py-10 lg:py-25 md:py-15">
          <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-30 gap-8 items-center">
            <div data-aos="fade-right" className="text-white">
              {/* Small label/badge */}
              <div className="bg-primary/20 backdrop-blur-sm border border-primary/30 py-0.5 px-3 rounded-full font-medium text-xs inline-flex mb-3.5 text-primary">
                CoopProfiler Platform
              </div>

              {/* Main Headline */}
              <h1 className="text-white lg:text-5xl md:text-4.5xl text-3xl mb-4 font-bold leading-tight">
                Powering Cooperative Member Value, Legacy and Sustainability.
              </h1>

              {/* Description */}
              <p className="lg:mt-4 lg:mb-8 mt-2.5 mb-6 text-white/90 text-base lg:text-lg max-w-xl">
                The all-in-one platform for cooperatives to collect, analyze, and report on member
                and business data for informed decision-making and sustainable growth.
              </p>

              {/* CTAs */}
              <div className="flex gap-3 flex-wrap">
                <Link
                  href="/pricing-1"
                  className="py-3 md:px-7 px-6 inline-flex bg-primary font-semibold rounded-2xl text-dark transition-all duration-300 hover:bg-primary/90 hover:scale-105 shadow-lg text-sm lg:text-base"
                >
                  Get Started Free
                </Link>
                <Link
                  href="#how-it-works"
                  className="py-3 md:px-7 px-6 inline-flex border-2 border-white/30 backdrop-blur-sm font-medium rounded-2xl text-white transition-all duration-300 hover:bg-white/10 hover:border-white/50 text-sm lg:text-base"
                >
                  See How It Works
                </Link>
              </div>
            </div>

            {/* Right side - empty as background image is used */}
            <div className="hidden lg:block" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
