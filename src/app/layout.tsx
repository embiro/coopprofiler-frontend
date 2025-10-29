import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import AppProvidersWrapper from '@/component/wrappers/AppProvidersWrapper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'aos/dist/aos.css';
import './style.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
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
    <html lang="en">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@100,200,300,400,500,700,800,900,1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.variable}>
        {children}
        <AppProvidersWrapper />
      </body>
    </html>
  );
}
