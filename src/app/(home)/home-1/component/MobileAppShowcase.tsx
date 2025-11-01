'use client';
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import IconifyIconClient from '@/component/IconifyIconClient';
import googlePlay from '@/assets/images/landing_page/google.png';

const MobileAppShowcase = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };
  return (
    <>
      <section className="lg:py-25 md:py-22.5 py-17.5 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-[1.5fr_1fr] gap-12.5 items-center">
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
                  </div>
                </div>
              </div>

              {/* Google Play Store Link */}
              <div className="mt-5">
                <a
                  href="https://play.google.com/store/apps/details?id=com.coopprofiler.android&hl=en&pli=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all duration-300 hover:scale-105 inline-block"
                >
                  <Image src={googlePlay} alt="Get it on Google Play" className="h-12 w-auto" />
                </a>
              </div>
            </div>

            {/* Right side - Video Showcase */}
            <div
              className="relative rounded-2xl overflow-hidden shadow-2xl w-fit mx-auto"
              data-aos="fade-left"
              data-aos-duration="600"
            >
              <div className="relative w-full max-w-[280px] mx-auto aspect-mobile max-h-[500px]">
                <video ref={videoRef} loop autoPlay muted className="object-cover w-full h-full">
                  <source src="/videos/app_recording.mp4" type="video/mp4" />
                </video>
                {/* Video Play/Pause Button Overlay */}
                <div className="absolute end-4 bottom-4">
                  <button
                    onClick={togglePlay}
                    className="size-12 md:size-15 flex items-center justify-center bg-primary rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
                    aria-label={isPlaying ? 'Pause video' : 'Play video'}
                  >
                    <IconifyIconClient
                      icon="tabler:player-play-filled"
                      className={`size-6 text-dark ${isPlaying ? 'hidden' : ''}`}
                    />
                    <IconifyIconClient
                      icon="tabler:player-pause-filled"
                      className={`size-6 text-dark ${isPlaying ? '' : 'hidden'}`}
                    />
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
