import { ButtonProps } from '@mui/material/Button'

export interface IBanners{
  id: string,
  slug: string,
  type?: string,
  orientation?: string,
  image: string,
  title?: string,
  description?: string,
  buttons: ButtonProp[],
  buttonsAlign?: string,
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
    title: 'Oral & Maxillofacial Surgery',
    description: `This surgical practice includes the diagnosis, surgical and adjunctive
    treatment of diseases, injuries and defects involving both functional and aesthetis aspects
    of the hard and soft tissue of the face.`,
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
        link: '/services/dental-surgery',
        color: 'primary',
        variant: 'contained',
      },
    ],
    buttonsAlign: 'left',
    title: 'Dental Surgery & Cosmetology',
    description: `Facio Maxillary and Dental Health Centre was established in the year 1987 as a small
    dental clinic by Dr. Binita Srivastava who did her Masters (MDS) in the subject of Pedodontics
    and Preventive Dentistry from the prestigious King Georges Medical College Lucknow.`,
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
        link: '/academy',
        color: 'primary',
        variant: 'contained',
      },
    ],
    buttonsAlign: 'left',
    title: 'KDS Max Fax Academy',
    description: `KDS Max Fax academy has been started with a vision of “Skill development” and “Clinical Learning”
    and mission is to learn more by doing. Number of Participants in each batch has been kept to a minimum
    so that they are able to do procedures/ surgeries confidently by the end of the program, on their own.`,
  },
]
