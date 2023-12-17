import Head from 'next/head'
import { ReactElement } from 'react'
import Grid from '@mui/material/Grid'

import Layout from '@/components/layout'
import MainHeading from '@/components/wrappers/headings/MainHeading'
import SubHeading from '@/components/wrappers/headings/SubHeading'
import H3 from '@/components/wrappers/headings/H3'
import P from '@/components/wrappers/P'
import Image from '@/components/Image'
import AccordionWrapper from '@/components/wrappers/AccordionWrapper'
import Page from '@/components/wrappers/Page'
import Background from '@/components/wrappers/Background'
import RenderImageWithContent from '@/components/RenderImageWithContent'
import { getCanonical, joinText } from '@/utils/common'
import { site } from '@/constants/common'
import { aboutMetaData } from '@/constants/metaData'
import {zokoworld} from '@/constants/sites'
// import { doctors } from '@/constants/doctors'
import { IDoctors } from '@/interfaces/common'
import { SixteenMpSharp } from '@mui/icons-material'

function Profile({ data }: { data: IDoctors }): JSX.Element {
  const gridWidth = data?.image
    ? { lg: 7, md: 7, sm: 12, xs: 12 }
    : { lg: 12, md: 12, sm: 12, xs: 12 }

  return (
    <>
      <Background>
        <Grid container spacing={1}>
          {data?.image && (
            <Grid item lg={5} md={5} sm={12} xs={12}>
              <Image src={data?.image} alt="img" />
            </Grid>
          )}
          <Grid
            item
            lg={gridWidth.lg}
            md={gridWidth.md}
            sm={gridWidth.sm}
            xs={gridWidth.xs}
          >
            <SubHeading
              style={{
                fontFamily: 'Roboto Slab',
                fontWeight: '500',
                marginBottom: 0,
                marginTop: 0,
                textTransform: 'initial',
              }}
            >
              {joinText([data.prefix, data.firstName, data.lastName])}
            </SubHeading>

            <H3 variant="body2" align="left" mt={0}>
              {joinText([data.degree])}
            </H3>
            <P
              mb={2}
              mt={3}
              style={{ whiteSpace: 'pre-line', textAlign: 'justify' }}
            >
              {data.about}
            </P>
          </Grid>
        </Grid>
      </Background>

      <AccordionWrapper description={data.description} />
    </>
  )
}

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

      {/* <SubHeading align="center">OUR DOCTORS</SubHeading> */}

      {/* <Grid container spacing={1} mt={1} mb={1}>
        {doctors.map((doctor: IDoctors) => {
          return (
            <Grid item lg={6} md={6} sm={12} xs={12} key={doctor.id}>
              <Profile data={doctor} />
            </Grid>
          )
        })}
      </Grid> */}
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
