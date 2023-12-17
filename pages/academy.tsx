import { ReactElement } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Grid from '@mui/material/Grid'
import ReadMoreIcon from '@mui/icons-material/ReadMore'
import TelegramIcon from '@mui/icons-material/Telegram'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import CardActions from '@mui/material/CardActions'
import Stack from '@mui/material/Stack'

import Layout from '@/components/layout'
import SubHeading from '@/components/wrappers/headings/SubHeading'
import MainHeading from '@/components/wrappers/headings/MainHeading'
import Page from '@/components/wrappers/Page'
import Background from '@/components/wrappers/Background'
import GetRow from '@/components/GetRow'
import RenderImageWithContent from '@/components/RenderImageWithContent'
import { getCanonical } from '@/utils/common'
import { courses } from '@/constants/courses'
import { kds } from '@/constants/kds'
import { ICourses } from '@/interfaces/common'
import useLocalStorage from '@/hooks/useLocalStorage'
import useMounted from '@/hooks/useMounted'

export default function Academy(): JSX.Element {
  const isMounted = useMounted()
  const [user ] = useLocalStorage('enquiryUser', false)

  return (
    <Page>
      <Background>
        <MainHeading>About KDS Max Fax Academy</MainHeading>
        <RenderImageWithContent
          image={kds.image}
          imageWidth={{xs: 12, sm: 3, md: 2, lg: 3}}
          description={kds.description}
        />
      </Background>

      <SubHeading align="center">
        UPCOMING COURSES
      </SubHeading>

      <Grid container spacing={1} alignItems="stretch">
        {courses?.map((service: ICourses) => {
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
                    width: { md: '450px', lg: '450px' },
                    height: { xs: '220px', sm: '270px', md: '100%' },
                    background: `url(${service?.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                  }}
                  component="div"
                />
                <Box sx={{ width: '100%' }}>
                  <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h6" sx={{lineHeight: '120%'}} mb={3}>
                      {service.title}
                    </Typography>
                    <GetRow label="Duration" title={service.duration} />
                    <GetRow
                      label="Inaugural Course"
                      title={service.inaugural}
                    />
                    {service.liveSurgery && <GetRow label="Live Surgery" title={service.liveSurgery} />}
                    <GetRow label="Timing" title={service.timing} />
                    <GetRow label="Place" title={service.place} />
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
                        variant="outlined"
                        component={Link}
                        href={'/contact-us?course=' + service.slug}
                      >
                        <TelegramIcon /> &nbsp; Enquire Now
                      </Button>
                      {isMounted && user && (
                        <Button
                          size="small"
                          color="primary"
                          variant="outlined"
                          component={Link}
                          href={'/courses/' + service.slug}
                        >
                          <ReadMoreIcon /> &nbsp; Details
                        </Button>
                      )}
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

Academy.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <Head>
        <title>KDS Max Fax Academy - Faciomaxillary & Dental Health Centre</title>
        <meta name="description" content="KDS Max Fax academy started with a mission for skill development & clinical learning. We have designed Courses designed to develop surgical skills. Join courses now!" />

        <meta property="og:title" content="KDS Max Fax Academy - Faciomaxillary & Dental Health Centre" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="" />
        <meta property="og:image" content="/kds-academy-logo.png" />
        <meta property="og:description" content="KDS Max Fax academy started with a mission for skill development & clinical learning. We have designed Courses designed to develop surgical skills. Join courses now!" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@faciomaxillary" />
        <meta name="twitter:creator" content="@faciomaxillary" />
        <link rel="canonical" href={getCanonical('/academy')} key="canonical"/>
      </Head>
      {page}
    </Layout>
  )
}
