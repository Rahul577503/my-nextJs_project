import { IFooterLinks } from '@/interfaces/common'
import { services } from './services'
export const navItems = [
  {
    title: 'Home',
    icon: '',
    url: '/',
  },
  {
    title: 'About',
    icon: '',
    url: '/about-us',
  },
  {
    title: 'Services',
    icon: '',
    url: '/services',
  },
  {
    title: 'Portfolio',
    icon: '',
    url: '/portfolio',
  },
  {
    title: 'Contact',
    icon: '',
    url: '/contact-us',
  },
]

export const site = {
  title: 'Zoko World',
  emails: ['zokoworld123@gmail.com'],
  contacts: ['1234567890'],
  address: 'zokoworld, z- 2, Z.K. 757153',
}

export const contacts = [
  {
    department: 'Zoko World',
    note: '',
    emails: ['zokoworld123@gmail.com'],
    phones: ['1234567890', '1234567890'],
    was: ['8888889999', '1030329563'],
    waText: 'Hello%20zokoworld!%0ANeed%20contact',
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
    section: 'Our Services',
    links: services
      .filter((service) => service.featured !== 1) // Filter out services with featured set to 1
      .map((service) => ({
        title: service.title,
        link: `/services/${service.slug}`,
      })),
  },
  {
    section: 'Popular Services',
    links: services
      .filter((service) => service.featured === 1) // Filter services with featured set to 1
      .map((service) => ({
        title: service.title,
        link: `/services/${service.slug}`,
      })),
  },
  {
    section: '',
    links: [
      { title: 'Our Latest Work', link: '/portfolio' },
      { title: 'Career', link: '/career' },
      { title: 'Refund-Policy', link: '/legal/refund' },
      { title: 'Privacy-Policy', link: '/legal/privacy' },
      { title: 'contact us', link: '/contact-us' },
      {title:'Terms of Use',link:'/terms'},
    ],
  },
  {
    section: 'Contact Us',
    links: [
      { title: 'Get In Touch', type: 'text' },
      { title: site.address, type: 'address' },
      { title: '01154-1441-4531', type: 'phone' },
      { title: '+91 16423292269 / 36428253773', type: 'phone' },
    ],
  },
]
