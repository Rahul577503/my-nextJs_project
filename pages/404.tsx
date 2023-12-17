import Head from 'next/head'
import type { ReactElement } from 'react'
import Container from '@mui/material/Container'

import Layout from '@/components/layout'
import Page from '@/components/wrappers/Page'
import Background from '@/components/wrappers/Background'
import H3 from '@/components/wrappers/headings/H3'

export default function Custom404(): JSX.Element {
  return (
    <Page>
      <Background>
        <H3 variant="h3" align="center" mt={2} mb={0}>
          Page not found!
        </H3>
        <Container maxWidth="sm">
          <img src="/images/404.svg" alt="404" />
        </Container>
      </Background>
    </Page>
  )
}

Custom404.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <Head>
        <title>404 - Page not found!</title>
      </Head>
      {page}
    </Layout>
  )
}
