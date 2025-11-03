import Footer from '@/component/layout/Footer/Footer';
import Topbar from '@/component/layout/Topbar';
import ScrollProgress from '@/component/layout/ScrollProgress';
import { type ReactNode } from 'react';

const HomeLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <>
      <Topbar />
      <ScrollProgress />
      {children}
      <Footer />
    </>
  );
};

export default HomeLayout;
