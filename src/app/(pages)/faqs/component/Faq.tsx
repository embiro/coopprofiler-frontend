import IconifyIconClient from '@/component/IconifyIconClient';

type FaqItem = {
  question: string;
  answer: string;
};

type FaqSection = {
  title: string;
  items: FaqItem[];
};

const faqSections: FaqSection[] = [
  {
    title: 'General',
    items: [
      {
        question: 'What is Coop Profiler and what does it do?',
        answer:
          'Coop Profiler is an intelligent, data-driven platform that enables cooperatives to collect, analyze, and report data about their members and operations. It helps cooperatives make informed decisions, measure resilience, and strengthen sustainability.',
      },
      {
        question: 'Who developed Coop Profiler?',
        answer:
          'Coop Profiler was developed by The Uhuru Institute for Social Development (TUI) to empower cooperatives through data-driven decision-making, compliance, and resilience measurement.',
      },
      {
        question: 'Who can use Coop Profiler?',
        answer:
          'The platform is designed for all types of cooperative businesses — financial, agricultural, industrial, housing, and manufacturing — as well as government agencies, research institutions, and development partners.',
      },
      {
        question: 'How does Coop Profiler measure resilience?',
        answer:
          'It uses the Cooperative Resilience Measurement Index (CRMI), which assesses how well cooperatives uphold the 10 cooperative values and 7 universal principles to gauge collaboration, adaptability, and sustainability.',
      },
      {
        question: 'Do you offer training or onboarding for new users?',
        answer:
          'Yes. We provide both physical and virtual training sessions, onboarding materials, and continuous support through our dedicated helpdesk to ensure a smooth experience for new users.',
      },
    ],
  },
  {
    title: 'Pricing & Billing',
    items: [
      {
        question: 'How is Coop Profiler priced?',
        answer:
          'Coop Profiler offers flexible pricing tailored to Primary, Secondary (STA), and Partner organizations. Pricing is based on the number of members or cooperatives managed. Visit our pricing page for details.',
      },
      {
        question: 'Do you offer discounts or loyalty rewards?',
        answer:
          'Yes. Cooperatives benefit from a loyalty bonus program— for every hundred individual members profiled, the cooperative receives back 5% of the user fees paid. Discounts are also available for long-term subscriptions.',
      },
      {
        question: 'Can I cancel my subscription at any time?',
        answer:
          'Yes, you can cancel your subscription at any time through your account settings. Your data remains secure and accessible based on your plan’s retention policy.',
      },
      {
        question: 'Can I view or request invoices?',
        answer:
          'Yes. You can view your billing history from your dashboard and request invoices automatically through our invoicing system. Invoices are also emailed to you upon payment or renewal.',
      },
      {
        question: 'Do you offer a trial period?',
        answer:
          'Yes, new users can start with a 30-day free trial to explore Coop Profiler’s features and evaluate how it fits their cooperative’s needs.',
      },
    ],
  },
  {
    title: 'Security',
    items: [
      {
        question: 'How does Coop Profiler protect my data?',
        answer:
          'We prioritize data confidentiality and security through encryption, authentication protocols, and automated hourly backups. Your cooperative fully owns its data — TUI cannot use it without your explicit permission.',
      },
      {
        question: 'Is Coop Profiler compliant with data protection laws?',
        answer:
          'Yes. TUI renews Coop Profiler’s licenses annually with the National Information Technology Authority (NITA-U) and the Personal Data Protection Office (PDPO) to ensure full compliance with national and international data regulations.',
      },
      {
        question: 'Who owns the data collected on Coop Profiler?',
        answer:
          'Each cooperative fully owns and controls its data. TUI acts only as the custodian, responsible for secure backups and system maintenance, without using the data unless explicitly authorized.',
      },
      {
        question: 'Can I control data sharing with partners?',
        answer:
          'Yes. Access can be restricted or unrestricted depending on agreements between the cooperative and its partners. Permissions can be customized per partner or project.',
      },
      {
        question: 'How do you ensure data authenticity?',
        answer:
          'Through the built-in Document Centre, cooperatives can upload and validate official documents like audit reports and registration certificates, ensuring the integrity and traceability of all data submitted.',
      },
    ],
  },
  {
    title: 'Technical',
    items: [
      {
        question: 'Does Coop Profiler work offline?',
        answer:
          'Yes. Coop Profiler allows offline data collection and synchronization, enabling users to capture data without internet access and automatically sync when connectivity is restored.',
      },
      {
        question: 'Can Coop Profiler integrate with other systems?',
        answer:
          'Yes. Coop Profiler is API-enabled, allowing integration with other platforms or tools for seamless data exchange and collaboration.',
      },
      {
        question: 'Is there a mobile version of Coop Profiler?',
        answer:
          'Yes. Coop Profiler is accessible via both web and mobile. The mobile version includes push notifications to support timely updates and field data collection.',
      },
      {
        question: 'What is the Document Centre used for?',
        answer:
          'The Document Centre is a secure space where cooperatives can upload supporting files—such as audit reports, meeting minutes, and certificates—to validate and authenticate their data entries.',
      },
      {
        question: 'What should I do if I experience technical issues?',
        answer:
          'If you encounter issues, contact our support team via email, phone, WhatsApp, or the in-app helpdesk. Our team provides prompt remote assistance to resolve your problem.',
      },
      {
        question: 'Is there continuous improvement or innovation for the platform?',
        answer:
          'Yes. Coop Profiler is continuously innovated and improved based on feedback from cooperatives and partners to ensure it remains adaptive, secure, and aligned with emerging technology trends.',
      },
    ],
  },
];

const Faq = () => {
  return (
    <section className="bg-white lg:py-25 md:py-22.5 py-17.5">
      <div className="container-small">
        {faqSections.map((section, sectionIndex) => (
          <div
            key={section.title}
            className="text-center md:mb-20 mb-15"
            data-aos="fade-up"
            data-aos-delay={sectionIndex * 100 + 150}
            data-aos-duration={500}
            data-aos-easing="ease-in-out"
          >
            <h2 className="lg:text-4xl md:text-4.6xl text-3.4xl md:mb-7.5 mb-2.5">
              {section.title}
            </h2>
            <div>
              <div className="md:space-y-7.5 space-y-5">
                {section.items.map((item, idx) => (
                  <div className={`hs-accordion bg-body-bg p-5 rounded-2xl`} key={idx}>
                    <button className="hs-accordion-toggle w-full flex justify-between items-center gap-2.5 text-start">
                      <h3 className="md:text-1.5xl text-xl">{item.question}</h3>
                      <div>
                        <div className="bg-white hs-accordion-active:bg-primary size-7.5 rounded-full flex items-center justify-center">
                          <IconifyIconClient
                            icon="tabler:plus"
                            className="size-5 block hs-accordion-active:hidden"
                          />
                          <IconifyIconClient
                            icon="tabler:minus"
                            className="size-5 hidden hs-accordion-active:block"
                          />
                        </div>
                      </div>
                    </button>
                    <div
                      className={`hs-accordion-content w-full overflow-hidden transition-[height] duration-300 text-start hidden`}
                    >
                      <p className="mt-5">{item.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
