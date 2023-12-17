import React, { ReactElement } from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'

import Layout from '@/components/layout'
import MainHeading from '@/components/wrappers/headings/MainHeading'
import Page from '@/components/wrappers/Page'
import Background from '@/components/wrappers/Background'
import Banner from '@/components/home/Banner'
import RenderImageWithContent from '@/components/RenderImageWithContent'
import { getCanonical } from '@/utils/common'
import { site } from '@/constants/common'
import { faciomaxillary } from '@/constants/faciomaxillary'

const FeaturedServices = dynamic(() => import('@/components/home/FeaturedServices'), { ssr: false })
const Reviews = dynamic(() => import('@/components/home/Reviews'), { ssr: false })

export default function Index(): JSX.Element {
  return (
    <>
      <Banner />
      <Page>
        <Background>
          <MainHeading id='mainHeading'><>About {site.title}</></MainHeading>
          <RenderImageWithContent
            image={faciomaxillary.image}
            description={faciomaxillary.description}
            height={420}
            readMore={true}
          />
        </Background>

        <FeaturedServices />
        <Reviews />
      </Page>
    </>
  )
}

Index.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <Head>
        <title>Zoko World</title>
        <meta name="description" content="Faciomaxillary and Dental Health Centre in Noida, India, provide solutions for diseases and defects of the oral and maxillofacial region. Call Now 09312284822." />

        <meta property="og:title" content="Dental Clinic in Noida, India - Faciomaxillary Dental Care" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="" />
        <meta property="og:image" content="/images/oral-care.svg" />
        <meta property="og:description" content="Faciomaxillary and Dental Health Centre in Noida, India, provide solutions for diseases and defects of the oral and maxillofacial region. Call Now 09312284822." />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@faciomaxillary" />
        <meta name="twitter:creator" content="@faciomaxillary" />

        <link rel="canonical" href={getCanonical('/')} key="canonical"/>
      </Head>
      {page}
    </Layout>
  )
}
