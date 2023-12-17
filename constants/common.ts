import { IFooterLinks } from '@/interfaces/common'

export const navItems = [
  {
    title: 'Home',
    icon: '',
    url: '/',
  },
  {
    title: 'Services',
    icon: '',
    url: '/services',
  },
  {
    title: 'Contact',
    icon: '',
    url: '/contact-us',
  },
  {
    title: 'About',
    icon: '',
    url: '/about-us',
  },
]

export const site = {
  title: 'Zoko World',
  emails: ['dsmaxfax@yahoo.com'],
  contacts: ['9312284822'],
  address: 'B-14, Sector 33, Noida- 201307, U.P.',
}

export const contacts = [
  {
    department: 'Zoko World',
    note: '',
    emails: ['zokoworld123@gmail.com'],
    phones: ['1234567890', '1234567890'],
    was: ['9810343506', '9650353354'],
    waText: 'Hello%20Doctor!%0ANeed%20appointment',
  },
]

export const copyright = {
  developer: {
    enabled: true,
    legend: 'Designed & Developed By:',
    label: 'Cruzer Softwares',
    link: 'https://www.cruzersoftwares.com',
  },
  site: {
    label: 'Zoko World',
    labelSmall: 'ZW',
  },
}

export const footerLinks: IFooterLinks[] = [
  {
    section: 'Quick Links',
    links: [
      {
        title: 'About Us',
        link: '/about-us',
      },
      {
        title: 'Contact Us',
        link: '/contact-us',
      },
    ],
  },
  {
    section: 'Important Links',
    links: [
      {
        title: 'Services',
        link: '/services',
      },
      {
        title: 'Home',
        link: '/',
      },
    ],
  },
  {
    section: 'Contact Us',
    links: [
      {
        title: site.address,
        type: 'address',
      },
      {
        title: site.emails,
        type: 'email',
      },
      {
        title: site.contacts,
        type: 'phone',
      },
    ],
  },
]
