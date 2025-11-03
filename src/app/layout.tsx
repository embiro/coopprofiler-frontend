import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import AppProvidersWrapper from '@/component/wrappers/AppProvidersWrapper';
import { PricingProviderWrapper } from '@/component/providers/PricingProviderWrapper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'aos/dist/aos.css';
import './style.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'CoopProfiler - Powering Cooperative Member Value, Legacy and Sustainability',
  description:
    'The all-in-one platform for cooperatives to collect, analyze, and report on member and business data for informed decision-making and sustainable growth.',
  keywords:
    'cooperative, cooperative management, member data, compliance, data analytics, cooperative software, apex bodies, primary cooperatives, resilience profiling, cooperative platform',
  icons: {
    icon: '/images/logo-white.png',
    shortcut: '/images/logo-white.png',
    apple: '/images/logo-white.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body>
        <PricingProviderWrapper>
          {children}
          <AppProvidersWrapper />
        </PricingProviderWrapper>
      </body>
    </html>
  );
}
