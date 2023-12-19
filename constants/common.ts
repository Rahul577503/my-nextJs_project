import { IFooterLinks } from '@/interfaces/common'

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
    links: [
      { title: 'Website Designing', link: '' },
      { title: 'Website Development', link: '/website-development' },
      { title: 'Responsive Web Design', link: '/responsive-web-design' },
      { title: 'Website Maintenance', link: '/website-maintenance' },
      { title: 'Domain Registration', link: '/domain-registration' },
      { title: 'Web Hosting', link: '/services/Reliable%20Hosting%20Solutions%20for%20Your%20Online%20Success' },
      { title: 'Android App Development', link: '/android-app-development' },
      { title: 'IOS App Development', link: '/ios-app-development' },
    ],
  },
  {
    section: 'Popular Services',
    links: [
      { title: 'Custom Website Design', link: '/custom-website-design' },
      { title: 'WordPress Website Design', link: '/wordpress-website-design' },
      { title: 'Startup Website Design', link: '/startup-website-design' },
      { title: 'Open Source Web Design', link: '/open-source-web-design' },
      { title: 'Open Cart Development', link: '/open-cart-development' },
      { title: 'CMS Development', link: '/cms-development' },
      { title: 'WordPress Development', link: '/wordpress-development' },
    ],
  },
  {
    section: '',
    links: [
      { title: 'Software Development', link: '/software-development' },
      { title: 'E-Commerce Development', link: '/e-commerce-development' },
      { title: 'Social Media Marketing', link: '/social-media-marketing' },
      {
        title: 'Search Engine Optimization',
        link: '/search-engine-optimization',
      },
      { title: 'Bulk SMS', link: '/bulk-sms' },
      {title:'Privacy-Policy',link:'/privacy'},
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
