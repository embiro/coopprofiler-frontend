import Link from 'next/link';
import React from 'react';
import IconifyIconClient from '@/component/IconifyIconClient';

type ContactCard = {
  icon: string;
  title: string;
  description: string;
  linkLabel: string;
  linkUrl: string;
  bgColor: string;
  iconBg: string;
  textColor: string;
  iconColor: string;
};

const contactData: ContactCard[] = [
  {
    icon: 'solar:bolt-linear',
    title: 'Access our knowledge base',
    description: 'Find comprehensive guides, articles, and documentation about CoopProfiler.',
    linkLabel: 'Explore help center',
    linkUrl: '#',
    bgColor: 'bg-primary',
    iconBg: 'bg-dark',
    textColor: 'text-dark',
    iconColor: 'text-primary',
  },
  {
    icon: 'solar:chart-square-linear',
    title: 'Discover CoopProfiler tutorials',
    description: 'Watch and learn from our experts how to utilize CoopProfiler effectively.',
    linkLabel: 'Watch tutorials',
    linkUrl: '#',
    bgColor: 'bg-dark',
    iconBg: 'bg-primary',
    textColor: 'text-white',
    iconColor: 'text-black',
  },
  {
    icon: 'solar:lightbulb-outline',
    title: 'Join our community',
    description:
      'Connect with other CoopProfiler users, share insights, and get help from the community.',
    linkLabel: 'Join community',
    linkUrl: '#',
    bgColor: 'bg-body-bg',
    iconBg: 'bg-dark',
    textColor: 'text-dark',
    iconColor: 'text-primary',
  },
];

const Contact = () => {
  return (
    <>
      <section className="bg-white lg:pb-25 md:pb-22.5 pb-17.5">
        <div className="container">
          <div
            className="lg:mb-8 text-center mb-7.5"
            data-aos="fade-up"
            data-aos-delay={150}
            data-aos-duration={500}
            data-aos-easing="ease-in-out"
          ></div>

          <div
            className="text-center md:mt-12.5 mt-10 flex gap-1.25 flex-col"
            data-aos="fade-up"
            data-aos-delay={250}
            data-aos-duration={500}
            data-aos-easing="ease-in-out"
          >
            <h3 className="mb-2.5 md:text-1.5xl text-xl">
              Still can't find what you're looking for?{' '}
            </h3>
            <div>
              <Link
                href="/contact"
                className="py-3.5 md:px-7.5 px-6 inline-flex bg-dark font-medium rounded-2xl text-white transition-all duration-300 hover:text-primary"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
