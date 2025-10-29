import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import IconifyIconClient from '@/component/IconifyIconClient';
import videoBg from '@/assets/images/video/video-bg.jpg';

const MobileAppShowcase = () => {
  return (
    <>
      <section className="lg:py-25 md:py-22.5 py-17.5 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12.5 items-center">
            {/* Left side - Content */}
            <div data-aos="fade-right" data-aos-duration="600">
              <div className="bg-primary py-0.5 px-3.75 rounded-full font-medium text-sm inline-flex mb-5 text-dark">
                Mobile App
              </div>
              <h2 className="mb-5 lg:text-5.5xl md:text-4.6xl text-3.4xl">
                Collect Data Offline, Anytime, Anywhere
              </h2>
              <p className="text-base mb-5 text-neutral-600 lg:text-lg">
                Our mobile app empowers your team to collect member and business data even without
                an internet connection. When connectivity returns, data automatically syncs to your
                centralized database, ensuring no information is ever lost.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <IconifyIconClient
                      icon="tabler:circle-check-filled"
                      className="size-6 text-primary"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Offline Data Collection</h4>
                    <p className="text-neutral-600 text-sm">
                      Collect member information, compliance data, and operational metrics without
                      internet connectivity.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <IconifyIconClient
                      icon="tabler:circle-check-filled"
                      className="size-6 text-primary"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Automatic Sync</h4>
                    <p className="text-neutral-600 text-sm">
                      Data automatically synchronizes to your cloud database when connectivity is
                      restored.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <IconifyIconClient
                      icon="tabler:circle-check-filled"
                      className="size-6 text-primary"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Real-time Updates</h4>
                    <p className="text-neutral-600 text-sm">
                      Access up-to-date information across all devices and team members in
                      real-time.
                    </p>
                  </div>
                </div>
              </div>
              <Link
                href="/pricing-1"
                className="inline-flex items-center gap-2 py-3.5 px-7.5 bg-primary text-dark font-semibold rounded-2xl transition-all duration-300 hover:bg-primary/90 hover:scale-105 shadow-md"
              >
                Learn More
                <IconifyIconClient icon="tabler:arrow-right" className="size-5" />
              </Link>
            </div>

            {/* Right side - Video Showcase */}
            <div
              className="relative rounded-2xl overflow-hidden shadow-2xl"
              data-aos="fade-left"
              data-aos-duration="600"
            >
              <div className="relative aspect-video">
                <Image
                  src={videoBg}
                  alt="Mobile App Showcase"
                  className="object-cover w-full h-full"
                  fill
                />
                {/* Video Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                  <button type="button" className="group relative" aria-label="Play video">
                    <div className="absolute inset-0 bg-primary rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
                    <div className="relative bg-primary/90 hover:bg-primary rounded-full p-6 md:p-8 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                      <IconifyIconClient
                        icon="tabler:player-play-filled"
                        className="size-8 md:size-12 text-dark ml-1"
                      />
                    </div>
                  </button>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -z-10 top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
              <div className="absolute -z-10 bottom-10 -left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MobileAppShowcase;
