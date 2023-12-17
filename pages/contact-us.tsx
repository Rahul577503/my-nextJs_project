import React from 'react'
import Head from 'next/head'
import { ReactElement } from 'react'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MailOutlinedIcon from '@mui/icons-material/MailOutlined'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'

import { contactMetaData } from '@/constants/metaData'
import Layout from '@/components/layout'
import MainHeading from '@/components/wrappers/headings/MainHeading'
import SubHeading from '@/components/wrappers/headings/SubHeading'
import H2 from '@/components/wrappers/headings/H2'
import Page from '@/components/wrappers/Page'
import Row from '@/components/wrappers/Row'
import Column from '@/components/wrappers/Column'
import Background from '@/components/wrappers/Background'
import {contacts, site } from '@/constants/common'
import Enquiry from '@/components/Enquiry'


export default function Contact(): JSX.Element {
  return (
    <Page>
      <Row>
        <Column xs={12} md={12} lg={12}>
          <Background>
            <Grid container spacing={2} alignItems="stretch">
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <MainHeading align="left">Get In Touch</MainHeading>

                {contacts?.map((contact, index) => {
                  return (
                    <React.Fragment key={index}>
                      <H2 variant="h6" mb={0} mt={0} color="default">
                        <>for {contact.department}</>
                      </H2>
                      {contact.note && (
                        <Typography mb={2}>
                          <i> Note: zoko world</i>
                        </Typography>
                      )}
                      <Grid container spacing={1} alignItems="stretch">
                        <Grid item lg={12}>
                          <IconButton aria-label="phone">
                            <LocalPhoneIcon fontSize="small" />
                          </IconButton>
                          {contact?.phones?.map((phone, index) => {
                            return (
                              <React.Fragment key={phone}>
                                {index > 0 && <>, </>}
                                <Link
                                  href={`tel:+91${phone}`}
                                  color="inherit"
                                  target="_blank"
                                  underline="hover"
                                  rel="noopener noreferrer"
                                >
                                  +91-{phone}
                                </Link>
                              </React.Fragment>
                            )
                          })}
                        </Grid>
                      </Grid>

                      <Grid container spacing={1} alignItems="stretch">
                        <Grid item lg={12}>
                          <IconButton aria-label="whatsApp">
                            <WhatsAppIcon />
                          </IconButton>
                          {contact?.was?.map((wa, index) => {
                            return (
                              <React.Fragment key={wa}>
                                {index > 0 && <>, </>}
                                <Link
                                  href={`https://wa.me/91${wa}?text=${
                                    contact?.waText ?? 'Hello!'
                                  }`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  color="inherit"
                                  underline="hover"
                                >
                                  {wa}
                                </Link>
                              </React.Fragment>
                            )
                          })}
                        </Grid>
                      </Grid>

                      <Grid container spacing={1} alignItems="stretch">
                        <Grid item lg={12} mb={3}>
                          <IconButton aria-label="email">
                            <MailOutlinedIcon />
                          </IconButton>
                          {contact?.emails?.map((email, index) => {
                            return (
                              <React.Fragment key={email}>
                                {index > 0 && <>, </>}
                                <Link
                                  href={`mailto:${email}`}
                                  color="inherit"
                                  target="_blank"
                                  underline="hover"
                                  rel="noopener noreferrer"
                                  key={email}
                                >
                                  {email}
                                </Link>
                              </React.Fragment>
                            )
                          })}
                        </Grid>
                      </Grid>
                    </React.Fragment>
                  )
                })}
                <H2 variant="h6" mb={1} mt={0} color="default">
                  OUR ADDRESS
                </H2>
                <Typography variant="body1">
                  <IconButton aria-label="address">
                    <LocationOnIcon />
                  </IconButton>
                  {site.address}
                </Typography>
              </Grid>

              <Grid item lg={6} md={6} sm={12} xs={12}>
                <Enquiry spacing={4} width="90%" align="right" />
              </Grid>
            </Grid>
          </Background>
        </Column>
      </Row>

      <Row>
        <Column xs={12} md={12} lg={12}>
          <SubHeading align="center"> Locate Us </SubHeading>
          <Background>
            <Grid container spacing={1} alignItems="stretch">
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <iframe
                  width="100%"
                  height="500"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?width=1200&amp;height=400&amp;hl=en&amp;q=Noida%20Noida+(Haldiram)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                ></iframe>
              </Grid>
            </Grid>
          </Background>
        </Column>
      </Row>
    </Page>
  )
}

Contact.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <Head>
        <title>{contactMetaData[0].title}</title>
        <meta name="description" content={contactMetaData[0].description} />

        <meta property="og:title" content={contactMetaData[0].ogTitle} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={contactMetaData[0].canonicalUrl} />
        <meta property="og:image" content={contactMetaData[0].ogImage} />
        <meta
          property="og:description"
          content={contactMetaData[0].ogDescription}
        />

        <meta name="twitter:card" content={contactMetaData[0].twitterCard} />
        <meta name="twitter:site" content={contactMetaData[0].twitterSite} />
        <meta
          name="twitter:creator"
          content={contactMetaData[0].twitterCreator}
        />
        <link rel="canonical" href={contactMetaData[0].canonicalUrl} />
      </Head>
      {page}
    </Layout>
  )
}
