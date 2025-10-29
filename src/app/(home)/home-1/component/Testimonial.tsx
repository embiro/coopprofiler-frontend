import React from 'react';
import IconifyIconClient from '@/component/IconifyIconClient';

type TestimonialType = {
  quote: string;
  author: string;
  role: string;
  organization: string;
  rating: number;
};

const testimonialsData: TestimonialType[] = [
  {
    quote:
      'CoopProfiler has transformed how we manage member data and compliance. The centralized database has saved us countless hours and reduced errors significantly.',
    author: 'Sarah Mukasa',
    role: 'Operations Manager',
    organization: 'Kampala Primary Cooperative',
    rating: 5,
  },
  {
    quote:
      'The offline data collection feature is a game-changer for our field teams. We can now collect member information even in remote areas with poor connectivity.',
    author: 'David Okello',
    role: 'Data Collection Lead',
    organization: 'Northern Region Apex Body',
    rating: 5,
  },
  {
    quote:
      'Resilience profiling has helped us make better strategic decisions. The insights we get from CoopProfiler enable us to proactively address member needs and ensure sustainable growth.',
    author: 'Amina Namukasa',
    role: 'Executive Director',
    organization: 'Eastern Cooperative Union',
    rating: 5,
  },
];

const Testimonial = () => {
  return (
    <>
      <section className="bg-white lg:py-25 md:py-22.5 py-17.5">
        <div className="container">
          <div
            className="text-center mb-10"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
          >
            <div className="bg-primary py-0.5 px-3.75 rounded-full font-medium text-sm inline-flex mb-2.5 text-dark">
              Testimonials{' '}
            </div>
            <h2 className="mb-2.5 lg:text-5.5xl md:text-4.6xl text-3.4xl">
              Hear from our happy customers{' '}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 md:gap-7.5 gap-5">
            {testimonialsData.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white border border-neutral-200 rounded-2xl lg:p-10 p-7.5 flex flex-col hover:border-primary hover:shadow-lg transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 150}
                data-aos-duration="600"
                data-aos-easing="ease-in-out"
              >
                {/* Rating Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <IconifyIconClient
                      key={i}
                      icon="tabler:star-filled"
                      className="text-yellow-400 text-xl"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-base lg:text-lg mb-6 text-neutral-700 flex-grow">
                  "{testimonial.quote}"
                </p>

                {/* Author Info */}
                <div className="border-t border-neutral-200 pt-5">
                  <h5 className="text-1.5xl font-semibold text-dark mb-1">{testimonial.author}</h5>
                  <p className="text-sm text-neutral-600">{testimonial.role}</p>
                  <p className="text-sm text-primary font-medium">{testimonial.organization}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
