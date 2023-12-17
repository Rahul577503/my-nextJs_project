import { ButtonProps } from '@mui/material/Button'

export interface IBanners {
  id: string
  slug: string
  type?: string
  orientation?: string
  image: string
  title?: string
  description?: string
  buttons: ButtonProp[]
  buttonsAlign?: string
}

type ButtonProp = ButtonProps & {
  title: string
  link?: string
  align?: string
}

export const bannerConfig = {
  fullWidth: true,
  darkBg: false,
  showDesc: false,
  showTitle: false,
  showButton: true,
}

export const banners: IBanners[] = [
  {
    id: '1',
    slug: '1',
    type: 'full',
    orientation: 'center',
    image: '/images/banners/banner-1.jpeg',
    buttons: [
      {
        title: 'Read More',
        link: '/services',
        color: 'primary',
        variant: 'contained',
      },
    ],
    buttonsAlign: 'left',
    title: 'Website Development',
    description:
      'Tailored and robust website development solutions to suit your business requirements.',
  },
  {
    id: '2',
    slug: '2',
    type: 'full',
    orientation: 'center',
    image: '/images/banners/banner-2.jpeg',
    buttons: [
      {
        title: 'Read More',
        link: '/services/',
        color: 'primary',
        variant: 'contained',
      },
    ],
    buttonsAlign: 'left',
    title: 'Website Designing',
    description:
      'Captivating and user-centric website designs that resonate with your brand identity.',
  },
  {
    id: '3',
    slug: '3',
    type: 'full',
    orientation: 'center',
    image: '/images/banners/banner-3.jpeg',
    buttons: [
      {
        title: 'Read More',
        link: '/services',
        color: 'primary',
        variant: 'contained',
      },
    ],
    buttonsAlign: 'left',
    title: 'Responsive Web Design',
    description:
      'Creating websites that adapt and respond effectively to various screen sizes and devices.',
  },
]
