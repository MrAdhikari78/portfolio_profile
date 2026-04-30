// src/constants/navigation.ts
// Centralized navigation data to avoid duplication across components

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/blog', label: 'Blog' },
  { href: '#contact', label: 'Contact' },
];

export const SOCIAL_LINKS = [
  {
    name: 'GitHub',
    url: 'https://github.com',
    icon: 'github',
    ariaLabel: 'GitHub',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com',
    icon: 'linkedin',
    ariaLabel: 'LinkedIn',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com',
    icon: 'twitter',
    ariaLabel: 'Twitter',
  },
];

export const CONTACT_EMAIL = 'your.email@example.com';
export const SITE_TITLE = 'Manisha Adhikari | Portfolio';
export const SITE_DESCRIPTION = 'Full Stack Developer & Creative Problem Solver';
