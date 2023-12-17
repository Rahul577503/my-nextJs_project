import React, { ReactElement } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Button from '@mui/material/Button'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next/types'
import TelegramIcon from '@mui/icons-material/Telegram'

import Layout from '@/components/layout'
import Background from '@/components/wrappers/Background'
import MainHeading from '@/components/wrappers/headings/MainHeading'
import Page from '@/components/wrappers/Page'
import RenderImageWithContent from '@/components/RenderImageWithContent'
import LightServiceGallery from '@/components/LightServiceGallery'
import { addTitle } from '@/utils/common'
import { services } from '@/constants/services'
import { IServices } from '@/interfaces/common'

export const getServerSideProps: GetServerSideProps<{
  data: IServices
}> = async (context) => {
  const { pid } = context.query
  const data = services.find((service) => service.slug === pid)
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

export default function ServiceDetails({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element {
  return (
    <Page>
      <Background>
        <MainHeading>{data.title}</MainHeading>
        <RenderImageWithContent
          layout="content"
          description={data.description}
        />
        {data?.gallery?.length > 0 && (
          <LightServiceGallery images={data.gallery} />
        )}
      </Background>
    </Page>
  )
}

ServiceDetails.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <Head>
        <title>
          {page?.props?.data?.seo?.title || addTitle(page?.props?.data?.title)}
        </title>
        <meta
          name="description"
          content={page?.props?.data?.seo?.description || page?.props?.data?.sd}
        />

        <meta
          property="og:title"
          content={page?.props?.data?.seo?.title || page?.props?.data?.title}
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="" />
        <meta property="og:image" content={page?.props?.data?.image} />
        <meta
          property="og:description"
          content={page?.props?.data?.seo?.description || page?.props?.data?.sd}
        />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@faciomaxillary" />
        <meta name="twitter:creator" content="@faciomaxillary" />
      </Head>
      {page}
    </Layout>
  )
}
