import React, { ReactElement } from 'react'
import Head from 'next/head'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next/types'
import Grid from '@mui/material/Grid'

import Background from '@/components/wrappers/Background'
import Layout from '@/components/layout'
import H1 from '@/components/wrappers/headings/H1'
import H2 from '@/components/wrappers/headings/H2'
import P from '@/components/wrappers/P'
import AccordionWrapper from '@/components/wrappers/AccordionWrapper'
import Page from '@/components/wrappers/Page'
import Image from '@/components/Image'
import { addTitle, joinText } from '@/utils/common'
import { doctors } from '@/constants/doctors'
import { IDoctors } from '@/interfaces/common'

export const getServerSideProps: GetServerSideProps<{
  data: IDoctors
}> = async (context) => {
  const { pid } = context.query
  const data = doctors.find((doctor) => doctor.slug === pid)
  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      data,
    },
  }
}

export default function Profile({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element {
  const gridWidth = data?.image
    ? { lg: 7, md: 7, sm: 12, xs: 12 }
    : { lg: 12, md: 12, sm: 12, xs: 12 }

  return (
    <Page>
      <Background>
        <Grid container spacing={1} mt={1} mb={1}>
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
            <H1 variant="h4" align="left" mt={1} color="secondary">
              {joinText([data.prefix, data.firstName, data.lastName])}
            </H1>
            <H2 variant="body2" align="left" mt={0}>
              {joinText([data.degree])}
            </H2>
            <P mb={2} mt={3} style={{ whiteSpace: 'pre-line', textAlign: 'justify' }}>
              {data.about}
            </P>
          </Grid>
        </Grid>
      </Background>

      <AccordionWrapper description={data.description} />
    </Page>
  )
}

Profile.getLayout = function getLayout(page: ReactElement) {
  const fullName = joinText([
    page?.props?.data?.prefix,
    page?.props?.data?.firstName,
    page?.props?.data?.lastName,
  ])

  return (
    <Layout>
      <Head>
        <title>{addTitle(fullName)}</title>
        <meta name="description" content={fullName} />
        <meta name="keywords" content={fullName} />

        <meta property="og:title" content={fullName} />
        <meta property="og:type" content="person" />
        <meta property="og:url" content="" />
        <meta property="og:image" content={page?.props?.data?.image} />
        <meta property="og:description" content={page?.props?.data?.about} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@faciomaxillary" />
        <meta name="twitter:creator" content="@faciomaxillary" />
      </Head>
      {page}
    </Layout>
  )
}
