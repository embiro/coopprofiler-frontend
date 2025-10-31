import React from 'react';
import Link from 'next/link';
import Image, { type StaticImageData } from 'next/image';
import IconifyIconClient from '@/component/IconifyIconClient';
import primaryCooperatives from '@/assets/images/landing_page/primary_coperatives.png';
import apexBodies from '@/assets/images/landing_page/apex_bodies.png';
import partners from '@/assets/images/landing_page/partners.png';

type AudienceBlock = {
  title: string;
  description: string;
  href: string;
  icon: string;
  gradient: string;
  image: StaticImageData;
};

const audienceData: AudienceBlock[] = [
  {
    title: 'Primary Cooperatives',
    description:
      'Streamline member management, compliance tracking, and data analytics for your cooperative.',
    href: '/solutions/primary-cooperatives',
    icon: 'solar:users-group-two-rounded-bold',
    gradient: 'from-primary/20 to-primary/5',
    image: primaryCooperatives,
  },
  {
    title: 'Apex Bodies (STAs)',
    description:
      'Centralized oversight and comprehensive reporting across multiple cooperative networks.',
    href: '/solutions/apex-bodies',
    icon: 'solar:chart-square-bold',
    gradient: 'from-blue-500/20 to-blue-500/5',
    image: apexBodies,
  },
  {
    title: 'Partners',
    description: 'Collaborate with cooperatives through our integrated platform and API solutions.',
    href: '/solutions/partners',
    icon: 'solar:handshake-bold',
    gradient: 'from-green-500/20 to-green-500/5',
    image: partners,
  },
];

const AudienceRouting = () => {
  return (
    <>
      <section className="bg-body-bg lg:py-25 md:py-22.5 py-17.5">
        <div className="container">
          <div className="text-center mb-12.5">
            <h2 className="mb-2.5 lg:text-5.5xl md:text-4.6xl text-3.4xl">
              Solutions for Every Need
            </h2>
            <p className="text-base mb-2.5 max-w-2xl mx-auto">
              Discover how our platform serves your specific role in the cooperative ecosystem
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:gap-10 gap-7.5">
            {audienceData.map((audience, index) => (
              <Link
                key={index}
                href={audience.href}
                className="group bg-white rounded-2xl lg:p-10 p-7.5 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 overflow-hidden flex flex-col max-h-[400px]"
                data-aos="fade-up"
                data-aos-delay={index * 150}
                data-aos-duration="600"
                data-aos-easing="ease-in-out"
              >
                <div className="lg:-mx-10 -mx-7.5 -mt-7.5 lg:-mt-10 mb-5 flex-[0_0_40%] min-h-[150px] overflow-hidden">
                  <Image
                    src={audience.image}
                    alt={audience.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="lg:text-2.5xl text-1.5xl mb-2.5 group-hover:text-primary transition-colors">
                  {audience.title}
                </h3>
                <p className="text-base mb-3 text-neutral-600">{audience.description}</p>
                <div className="flex items-center gap-2 text-dark font-medium group-hover:gap-3 transition-all mt-auto">
                  <span>Learn more</span>
                  <IconifyIconClient
                    icon="tabler:arrow-right"
                    className="size-5 group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AudienceRouting;
