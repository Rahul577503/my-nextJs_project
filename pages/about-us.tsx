import Head from 'next/head'
import { ReactElement } from 'react'
import Layout from '@/components/layout'
import MainHeading from '@/components/wrappers/headings/MainHeading'
import Page from '@/components/wrappers/Page'
import Background from '@/components/wrappers/Background'
import RenderImageWithContent from '@/components/RenderImageWithContent'
import { site } from '@/constants/common'
import { aboutMetaData } from '@/constants/metaData'
import {zokoworld} from '@/constants/sites'


export default function About(): JSX.Element {
  return (
    <Page>
      <Background>
        <MainHeading>
          <>About {site.title}</>
        </MainHeading>
        <RenderImageWithContent
          image={zokoworld.image}
          description={zokoworld.description}
        />
      </Background>
    </Page>
  )
}

About.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
       <Head>
        <title>{aboutMetaData[0].title}</title>
        <meta name="description" content={aboutMetaData[0].description} />

        <meta property="og:title" content={aboutMetaData[0].ogTitle} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={aboutMetaData[0].canonicalUrl} />
        <meta property="og:image" content={aboutMetaData[0].ogImage} />
        <meta property="og:description" content={aboutMetaData[0].ogDescription} />

        <meta name="twitter:card" content={aboutMetaData[0].twitterCard} />
        <meta name="twitter:site" content={aboutMetaData[0].twitterSite} />
        <meta name="twitter:creator" content={aboutMetaData[0].twitterCreator} />
        <link rel="canonical" href={aboutMetaData[0].canonicalUrl} key="canonical" />
      </Head>
      {page}
    </Layout>
  )
}
