import React, { ReactElement } from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'

import Layout from '@/components/layout'
import MainHeading from '@/components/wrappers/headings/MainHeading'
import Page from '@/components/wrappers/Page'
import Background from '@/components/wrappers/Background'
import Banner from '@/components/home/Banner'
import RenderImageWithContent from '@/components/RenderImageWithContent'
import { site } from '@/constants/common'
import { zokoworld } from '@/constants/sites'
const FeaturedServices = dynamic(
  () => import('@/components/home/FeaturedServices'),
  { ssr: false }
)
import { homeMetaData } from '@/constants/metaData'
const Reviews = dynamic(() => import('@/components/home/Reviews'), {
  ssr: false,
})

export default function Index(): JSX.Element {
  return (
    <>
      <Banner />
      <Page>
        <Background>
          <MainHeading id="mainHeading">
            <>About {site.title}</>
          </MainHeading>
          <RenderImageWithContent
            image={zokoworld.image}
            description={zokoworld.description}
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
        <title>{homeMetaData[0].title}</title>
        <meta name="description" content={homeMetaData[0].description} />

        <meta property="og:title" content={homeMetaData[0].ogTitle} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={homeMetaData[0].canonicalUrl} />
        <meta property="og:image" content={homeMetaData[0].ogImage} />
        <meta property="og:description" content={homeMetaData[0].ogDescription} />

        <meta name="twitter:card" content={homeMetaData[0].twitterCard} />
        <meta name="twitter:site" content={homeMetaData[0].twitterSite} />
        <meta name="twitter:creator" content={homeMetaData[0].twitterCreator} />
        <link rel="canonical" href={homeMetaData[0].canonicalUrl} />
      </Head>
      {page}
    </Layout>
  )
}
