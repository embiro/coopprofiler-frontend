import Image from 'next/image';
import React from 'react';
import about from '@/assets/images/team/4.png';
import Link from 'next/link';
import InvoiceRequestForm from './InvoiceRequestForm';

const CTA = () => {
  return (
    <>
      <section className="bg-white lg:pb-25 md:pb-22.5 pb-17.5">
        <div className="container">
          <div
            className="grid md:grid-cols-2 gap-8 mb-12"
            data-aos="fade-up"
            data-aos-duration={500}
            data-aos-easing="ease-in-out"
          >
            <div>
              <Image
                src={about}
                alt=""
                className="rounded-tl-2xl md:rounded-bl-2xl md:rounded-tr-none rounded-tr-2xl"
              />
            </div>
            <div className="bg-primary rounded-tr-2xl rounded-br-2xl lg:p-15 p-5 h-full flex justify-center flex-col">
              <h2 className="mb-2.5 md:text-4xl text-2.6xl">Still have questions about pricing?</h2>
              <p className="mb-9">
                Our team is here to help you find the right plan for your cooperative needs.
                Schedule a call or send us a message.
              </p>
              <div>
                <Link
                  href="/contact"
                  className="py-3.5 lg:px-7.5 px-6.5 inline-flex text-center bg-dark font-medium rounded-2xl text-white transition-all duration-300 hover:text-primary"
                >
                  Talk to an expert
                </Link>
              </div>
            </div>
          </div>

          {/* Invoice Request Form */}
          <div
            className="max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay={100}
            data-aos-duration={500}
            data-aos-easing="ease-in-out"
          >
            <InvoiceRequestForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default CTA;
