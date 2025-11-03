import { StaticImageData } from 'next/image';

export interface NavItem {
  title: string;
  type?: 'link' | 'mega' | 'image';
  href?: string;
  children?: {
    label: string;
    description?: string;
    icon?: string;
    href: string;
  }[];
  columns?: {
    title?: string;
    links: { label: string; href: string }[];
  }[];
  image?: StaticImageData;
}

export const navMenuData: NavItem[] = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Why Coop Profiler',
    href: '/why-coop-profiler',
  },
  {
    title: 'Solutions',
    type: 'link',
    children: [
      { label: 'For Primary Cooperatives', href: '/solutions/primary-cooperatives' },
      { label: 'For Apex Bodies (STAs)', href: '/solutions/apex-bodies' },
      { label: 'For Partners', href: '/solutions/partners' },
    ],
  },
  {
    title: 'Features',
    href: '/features',
  },
  {
    title: 'Pricing',
    href: '/pricing',
  },
  {
    title: 'Contact',
    href: '/contact',
  },
];
