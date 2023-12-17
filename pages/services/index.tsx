import { ReactElement } from 'react'
import Head from 'next/head'
import Grid from '@mui/material/Grid'
import TelegramIcon from '@mui/icons-material/Telegram'
import ReadMoreIcon from '@mui/icons-material/ReadMore'

import Layout from '@/components/layout'
import MainHeading from '@/components/wrappers/headings/MainHeading'
import GalleryCard from '@/components/card/GalleryCard'
import Page from '@/components/wrappers/Page'
import { getCanonical } from '@/utils/common'
import { services } from '@/constants/services'
import { metaData } from '@/constants/metaData'

export default function Services(): JSX.Element {
  const newService = services.slice()
  const featuredService = newService.filter((service) => service?.featured === 1)
  const unfeaturedService = newService.filter((service) => service?.featured !== 1)
  const allService = [...unfeaturedService, ...featuredService]

  return (
    <Page>
      <br />
      <MainHeading>OUR SERVICES</MainHeading>
      <br />
      <Grid container spacing={1} alignItems="stretch">
        {allService.length > 0 &&
          allService.map((service) => {
            if (service.status !== 1) return null
            return (
              <Grid item lg={4} md={4} sm={6} xs={12} mb={4} key={service.id}>
                <div style={{ display: 'flex', height: '100%' }}>
                  <GalleryCard
                    image={service?.image}
                    title={service.title}
                    description={service?.sd}
                    backgroundColor="primary"
                    elipsis={true}
                    buttons={[
                      {
                        title: 'View',
                        link: '/services/' + service.slug,
                        color: 'primary',
                        variant: 'outlined',
                        direction: 'start',
                        icon: <ReadMoreIcon />,
                      },
                      {
                        title: 'Enquire Now',
                        link: '/contact-us?service=' + service.slug,
                        color: 'primary',
                        variant: 'outlined',
                        direction: 'end',
                        icon: <TelegramIcon />,
                      },
                    ]}
                  />
                </div>
              </Grid>
            )
          })}
      </Grid>
    </Page>
  )
}

Services.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
    <Head>
      <title>{metaData[0].title}</title>
      <meta name="description" content={metaData[0].description} />

      <meta property="og:title" content={metaData[0].ogTitle} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="" />
      <meta property="og:image" content={metaData[0].ogImage} />
      <meta property="og:description" content={metaData[0].ogDescription} />

      <meta name="twitter:card" content={metaData[0].twitterCard} />
      <meta name="twitter:site" content={metaData[0].twitterSite} />
      <meta name="twitter:creator" content={metaData[0].twitterCreator} />
      <link rel="canonical" href={getCanonical('/')} key="canonical" />
    </Head>
    {page}
  </Layout>
  )
}
