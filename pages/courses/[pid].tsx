import React, { ReactElement } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next/types'
import TelegramIcon from '@mui/icons-material/Telegram'
import Button from '@mui/material/Button'

import Background from '@/components/wrappers/Background'
import Layout from '@/components/layout'
import MainHeading from '@/components/wrappers/headings/MainHeading'
import Page from '@/components/wrappers/Page'
import RenderImageWithContent from '@/components/RenderImageWithContent'
import RenderCourseImageContent from '@/components/RenderCourseWIthImageContent'
import { addTitle } from '@/utils/common'
import { courses } from '@/constants/courses'
import { ICourses } from '@/interfaces/common'

export const getServerSideProps: GetServerSideProps<{
  data: ICourses
}> = async (context) => {
  const { pid } = context.query
  const data = courses.find((course) => course.slug === pid)
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

export default function Course({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element {
  return (
    <Page>
      <Background>
        <MainHeading>{data.title}</MainHeading>
        <RenderCourseImageContent item={data} />
        <RenderImageWithContent
          layout="content"
          description={data.description}
        />
        <Button
          sx={{ width: 200 }}
          color="primary"
          variant="contained"
          component={Link}
          href={'/contact-us?course=' + data.slug}
        >
          <TelegramIcon /> &nbsp; Enquire Now
        </Button>
      </Background>
    </Page>
  )
}

Course.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <Head>
        <title>{addTitle(page?.props?.data?.title)}</title>
        <meta name="description" content={page?.props?.data?.title} />
        <meta name="keywords" content={page?.props?.data?.title} />

        <meta property="og:title" content={page?.props?.data?.title} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="" />
        <meta property="og:image" content={page?.props?.data?.image} />
        <meta property="og:description" content={page?.props?.data?.title} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@faciomaxillary" />
        <meta name="twitter:creator" content="@faciomaxillary" />
      </Head>
      {page}
    </Layout>
  )
}
