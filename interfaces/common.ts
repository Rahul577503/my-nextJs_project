export type IPages = {
  id: string
  slug: string
  banner?: string
  title: string
  status: number
  layout?: 'main' | 'content'
  description: IDescription[]
  gallery: IGallery[]
  meta: IMeta
}

export type IMeta ={
  description?: string
  keywords?: string
}

export type IContent = {
  layout?: 'main' | 'content'
  image?: string
  description: IDescription[]
  height?: number
  readMore?: boolean
  imageWidth?: IBreackpoints
  button?: JSX.Element
}

export type IBreackpoints = {
  xs: number
  sm: number
  md: number
  lg: number
}

export type IDescription = {
  title?: string
  content?: string
  image?: string
}

export type IServices = {
  id: string
  status: number
  slug: string
  image: string
  imageWidth?: IBreackpoints
  title: string
  sd: string
  description: IDescription[]
  featured?: number
  gallery: IServiceGallery[]
  seo?: ISEO
}

export type ISEO = {
  title: string
  description: string
}

export type IServiceGallery = {
  section: string
  images: IGallery[]
}

export type IGallery = {
  title?: string
  content?: string
  image: string
}

export type IImage = {
  src: string
  alt?: string
  height?: number
  width?: number
}
export type IFaculty = {
  title?: string
  name: string
  degree?: string
}
export type IContactPerson = {
  title?: string
  name?: string
  degree?: string
  contact?: string
}

export interface ICourses{
  id: string,
  status: number, // 1 active, 0 draft, 3 expired
  slug: string,
  image: string,
  title: string,
  date?: string,
  timing?: string,
  duration?: string,
  schdules?: string,
  place?: string,
  minCount?: string,
  maxCount?: string,
  targetAudience?: string,
  liveSurgery?: string,
  inaugural: string,
  sd: string,
  description: IDescription[],
  faculty: IFaculty[],
  contactPersons: IContactPerson[],
}

export type IReviews = {
  title: string
  subtitle?: string
  avatar?: string
  rating: number
  description?: string
}

export interface IDoctors{
  id: string,
  slug: string,
  image: string,
  prefix?: string,
  firstName: string,
  lastName?: string,
  suffix?: string,
  experience?: string,
  degree?: string,
  sd: string,
  about?: string,
  status: number,
  description: IDescription[],
  gallery: IGallery[]
  reviews: IDescription[],
}

export type IFooterLinks = {
  section: string
  links: ILinks[]
}

export type ILinks = {
  title: string | string[]
  type?: string
  link?: string
}

// for meta data
export interface IMetaData {
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  twitterCard: string;
  twitterSite: string;
  twitterCreator: string;
  canonicalUrl: string;
}

export interface IPortfolio {
  id: number;
  title: string;
  description: string;
  image: string;
  slug: string;
}

export interface IPrivacyPolicyDescription {
  description: Array<{
    image?: string;
    title: string;
    content: string;
  }>;
}
