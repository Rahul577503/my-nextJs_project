import { ReactElement } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardActions from '@mui/material/CardActions'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import ReadMoreIcon from '@mui/icons-material/ReadMore'

import Layout from '@/components/layout'
import H1 from '@/components/wrappers/headings/H1'
// import GalleryCard from '@/components/card/GalleryCard'
import Page from '@/components/wrappers/Page'
import { addTitle, getCanonical, joinText } from '@/utils/common'
import { doctors } from '@/constants/doctors'
import { IDoctors } from '@/interfaces/common'

export default function Doctors(): JSX.Element {
  return (
    <Page>
      <H1 variant="h4" align="center" mb={2} mt={4} color="secondary">
        OUR DOCTORS
      </H1>
      <Grid container spacing={1} alignItems="stretch">
        {doctors?.map((service: IDoctors) => {
          if(service.status!==1) return null
            return (
              <Grid item lg={6} md={6} sm={6} xs={12} mb={4} key={service.id}>
              <Card
                sx={{
                  display: 'flex',
                  height: '100%',
                  flexDirection: {
                    xs: 'column',
                    sm: 'column',
                    md: 'row',
                    lg: 'row',
                  },
                }}
              >
                <CardMedia
                  sx={{
                    width: { md: '480px', lg: '500px' },
                    height: { xs: '220px', sm: '270px', md: '100%'},
                    background: `url(${service?.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                  }}
                  component="div"
                > &nbsp; </CardMedia>
                <Box sx={{ width: '100%' }}>
                  <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="h2" variant="body1" color="secondary">
                      {joinText([
                      service?.prefix,
                      service?.firstName,
                      service?.lastName,
                      service?.suffix,
                    ])}
                    </Typography>
                    <Typography component="h3" variant="body2">
                      {service?.degree}
                    </Typography>
                    <Typography component="p" variant="body1" mt={2}>
                      {service?.sd}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      width="100%"
                    >
                      <Button
                        size="small"
                        color="primary"
                        variant="contained"
                        component={Link}
                        href={'/doctors/' + service.slug}
                      >
                        <ReadMoreIcon /> &nbsp; Details
                      </Button>
                    </Stack>
                  </CardActions>
                </Box>
              </Card>
            </Grid>
            )
          })}
      </Grid>
    </Page>
  )
}

{/* <Grid item lg={3} md={4} sm={6} xs={12} mb={4} key={service.id}>
  <div style={{ display: 'flex', height: '100%' }}>
    <GalleryCard
      image={service?.image}
      subtitle={service?.degree}
      title={joinText([
        service?.prefix,
        service?.firstName,
        service?.lastName,
        service?.suffix,
      ])}
      description={service?.sd}
      backgroundColor="primary"
      buttons={[
        {
          title: 'View Profile',
          link: '/doctors/' + service.slug,
          color: 'primary',
          variant: 'contained',
          direction: 'end',
          icon: <ReadMoreIcon />,
        },
      ]}
    />
  </div>
</Grid> */}

Doctors.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <Head>
        <title>{addTitle('Our Doctors')}</title>
        <meta name="description" content="Our Doctors" />
        <meta name="keywords" content="Our Doctors" />

        <meta property="og:title" content="Our Doctors" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="" />
        <meta property="og:image" content="/profiles/dr-dhirendra.jpeg" />
        <meta property="og:description" content="Our Doctors" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@faciomaxillary" />
        <meta name="twitter:creator" content="@faciomaxillary" />
        <link rel="canonical" href={getCanonical('/doctors')} key="canonical"/>
      </Head>
      {page}
    </Layout>
  )
}
