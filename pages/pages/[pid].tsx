import React, { ReactElement } from 'react'
import Head from 'next/head'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next/types'
import Grid from '@mui/material/Grid'

import Background from '@/components/wrappers/Background'
import Layout from '@/components/layout'
import H1 from '@/components/wrappers/headings/H1'
import RenderImageWithContent from '@/components/RenderImageWithContent'
import Page from '@/components/wrappers/Page'
import Image from '@/components/Image'
import { addTitle } from '@/utils/common'
import { pages } from '@/constants/pages'
import { IPages } from '@/interfaces/common'

export const getServerSideProps: GetServerSideProps<{
  data: IPages
}> = async (context) => {
  const { pid } = context.query
  const data = pages.find((page) => page.slug === pid)
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
  const gridWidth = data?.banner
    ? { lg: 7, md: 7, sm: 12, xs: 12 }
    : { lg: 12, md: 12, sm: 12, xs: 12 }

  return (
    <Page>
      <Background>
        <Grid container spacing={1} mt={1} mb={1}>
          {data?.banner && (
            <Grid item lg={5} md={5} sm={12} xs={12}>
              <Image src={data?.banner} alt="img" />
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
              {data.title}
            </H1>
            <RenderImageWithContent description={data.description} />
          </Grid>
        </Grid>
      </Background>
    </Page>
  )
}

Profile.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <Head>
        <title>{addTitle(page?.props?.data?.title)}</title>
        <meta name="description" content={page?.props?.data?.title} />
        <meta name="keywords" content={page?.props?.data?.title} />

        <meta property="og:title" content={page?.props?.data?.title} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="" />
        <meta property="og:image" content="" />
        <meta property="og:description" content={page?.props?.data?.title} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@zokoworld" />
        <meta name="twitter:creator" content="@zokoworld" />
      </Head>
      {page}
    </Layout>
  )
}
