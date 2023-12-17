import Link from 'next/link'
import React from 'react'
import TelegramIcon from '@mui/icons-material/Telegram'
import ReadMoreIcon from '@mui/icons-material/ReadMore'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'

import SubHeading from '@/components/wrappers/headings/SubHeading'
import GalleryCard from '@/components/card/GalleryCard'
import { services } from '@/constants/services'

export default function FeaturedServices() {
  return (
    <>
      <SubHeading align="center">
        CORE SERVICES
      </SubHeading>
      <Grid container spacing={2}>
        {services?.map((service) => {
          if (service?.featured !== 1 || service?.status !== 1) return null
          return (
            <Grid item lg={3} md={4} sm={6} xs={12} mb={2} key={service.id}>
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
                    link: '/enquiry/service/' + service.slug,
                    color: 'primary',
                    variant: 'outlined',
                    direction: 'end',
                    icon: <TelegramIcon />,
                  },
                ]}
              />
            </Grid>
          )
        })}
      </Grid>

    <Box sx={{textAlign: 'center', width: '100%'}} mt={3}>
      <Button
        size="large"
        color="primary"
        variant="contained"
        component={Link}
        href="/services"
      >
        <TelegramIcon /> &nbsp; VIEW ALL SERVICES
      </Button>
      </Box>
    </>
  )
}
