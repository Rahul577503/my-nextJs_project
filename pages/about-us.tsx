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
import { faciomaxillary } from '@/constants/faciomaxillary'
// import { doctors } from '@/constants/doctors'
import { IDoctors } from '@/interfaces/common'

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
              style={{fontFamily: 'Roboto Slab',
              fontWeight: '500',
              marginBottom:0,
              marginTop: 0,
              textTransform: 'initial',
            }}>
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
          image={faciomaxillary.image}
          description={faciomaxillary.description}
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
        <title>About Us - Faciomaxillary & Dental Health Centre</title>
        <meta name="description" content="Know about Faciomaxillary & Dental Health Centre in Noida, India has all the latest types of equipment and instruments & provides solutions for all dental ailments." />

        <meta property="og:title" content="About Us - Faciomaxillary & Dental Health Centre" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="" />
        <meta property="og:image" content="/images/oral-care.svg" />
        <meta property="og:description" content="Know about Faciomaxillary & Dental Health Centre in Noida, India has all the latest types of equipment and instruments & provides solutions for all dental ailments." />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@faciomaxillary" />
        <meta name="twitter:creator" content="@faciomaxillary" />
        <link
          rel="canonical"
          href={getCanonical('/about-us')}
          key="canonical"
        />
      </Head>
      {page}
    </Layout>
  )
}
