

import Link from 'next/link';
import React from 'react';

const Contact = () => {
  return (
    <>
      <section className="bg-body-bg lg:py-25 md:py-22.5 py-17.5 ">
        <div className="container-small">
          <div
            className="text-center md:mb-12.5 mb-7.5"
            data-aos="fade-up"
            data-aos-delay={150}
            data-aos-duration={500}
            data-aos-easing="ease-in-out"
          >
            <h2 className="mb-2.5 lg:text-6xl md:text-4.6xl text-4xl">
              Get in Touch
            </h2>
            <p>Have questions about CoopProfiler? We're here to help! </p>
          </div>
          <div
            className="grid lg:grid-cols-2 lg:gap-12.5 md:gap-5 gap-7.5"
            data-aos="fade-up"
            data-aos-delay={150}
            data-aos-duration={500}
            data-aos-easing="ease-in-out"
          >
            <div className="bg-primary lg:p-10 p-5 rounded-2xl h-full flex justify-between gap-12.5 flex-col">
              <div>
                <h2 className="text-2.5xl">
                  Ready to transform your cooperative's data management?
                </h2>
              </div>
              <div className="flex gap-2.5 flex-col">
                <Link href="mailto:business@coopprofiler.com" className="underline text-dark">
                  business@coopprofiler.com
                </Link>
                <Link href="tel:+256414581453" className="underline text-dark">
                  +256 414 581453
                </Link>
                <Link href="tel:+256200917823" className="underline text-dark">
                  +256 200 917823
                </Link>
                <p>Plot 1, Katalima Crescent, Naguru, Kampala</p>
                <p>P.O.Box 130337, Kampala (U)</p>
              </div>
            </div>
            <form>
              <div className="mb-5">
                <label htmlFor="contactName" className="mb-1.25 block font-normal">
                  Name
                </label>
                <input
                  className="bg-white rounded-2xl py-2.5 px-5 border border-neutral-200 w-full h-14 "
                  maxLength={256}
                  name="name"
                  data-name="Name"
                  placeholder="John Doe"
                  type="text"
                  id="contactName"
                  required
                />
              </div>
              <div className="mb-5">
                <label htmlFor="contactEmail" className="mb-1.25 block font-normal">
                  Email address{' '}
                </label>
                <input
                  className="bg-white rounded-2xl py-2.5 px-5 border border-neutral-200 w-full h-14"
                  maxLength={256}
                  name="email"
                  data-name="Email"
                  placeholder="hello@example.com"
                  type="email"
                  id="contactEmail"
                  required
                />
              </div>
              <div className="mb-5 flex gap-5 lg:flex-row flex-col">
                <div className="flex-1">
                  <label htmlFor="contactPhone" className="mb-1.25 block font-normal">
                    Phone{' '}
                  </label>
                  <input
                  className="bg-white rounded-2xl py-2.5 px-5 border border-neutral-200 w-full h-14"
                  name="phone"
                  data-name="Phone"
                  placeholder="+256 414 581453"
                  type="tel"
                  id="contactPhone"
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="contactSubject" className="mb-1.25 block font-normal">
                    Subject{' '}
                  </label>
                  <input
                    className="bg-white rounded-2xl py-2.5 px-5 border border-neutral-200 w-full h-14"
                    name="subject"
                    data-name="Subject"
                    placeholder="Subject"
                    type="text"
                    id="contactSubject"
                  />
                </div>
              </div>
              <div className="mb-5">
                <label htmlFor="contactMessage" className="mb-1.25 block font-normal">
                  Message
                </label>
                <textarea
                  className="bg-white rounded-2xl py-2.5 px-5 border border-neutral-200 w-full h-50"
                  name="message"
                  maxLength={5000}
                  data-name="Message"
                  placeholder="Your message..."
                  id="contactMessage"
                  required
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="md:h-14 w-full py-3.5 lg:px-7.5 px-6.5 text-center bg-dark font-medium rounded-2xl text-white transition-all duration-300 hover:text-primary"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
