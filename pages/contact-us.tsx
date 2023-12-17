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
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import  TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

import Layout from '@/components/layout'
import MainHeading from '@/components/wrappers/headings/MainHeading'
import SubHeading from '@/components/wrappers/headings/SubHeading'
import H2 from '@/components/wrappers/headings/H2'
import Page from '@/components/wrappers/Page'
import Row from '@/components/wrappers/Row'
import Column from '@/components/wrappers/Column'
import Background from '@/components/wrappers/Background'
// import { getCanonical } from '@/utils/common'
import { businessHours, contacts, site } from '@/constants/common'
import Enquiry from '@/components/Enquiry'

// type IBusinessHours = {
//   businessHours: IBusiness[]
// }
// type IBusiness = {
//   day: string
//   timing: string[]
// }

// const GetTableRow = ({ businessHours }: IBusinessHours) => {
//   return (
//     <>
//       {businessHours.map((bh) => {
//         return (
//           <TableRow key={bh.day}>
//             <TableCell component="th" scope="row">
//               <b>{bh.day}</b>
//             </TableCell>
//             {bh?.timing?.map((time, index) => {
//               return <TableCell key={index}>{time}</TableCell>
//             })}
//           </TableRow>
//         )
//       })}
//     </>
//   )
// }
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
                          <i> Note: Only on prior appointments </i>
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

                {/* <H2 variant="h6" mb={1} mt={2} color="default">
                  BUSINESS HOURS
                </H2>
                <TableContainer component={Paper}>
                  <Table size="small" aria-label="a dense table">
                    <TableBody>
                      <GetTableRow businessHours={businessHours} />
                    </TableBody>
                  </Table>
                </TableContainer> */}
              </Grid>

              <Grid item lg={6} md={6} sm={12} xs={12}>
                <Enquiry spacing={4} width="90%" align="right" />
              </Grid>
            </Grid>
          </Background>
        </Column>
      </Row>

      {/* <Row>
        <Column xs={12} md={12} lg={12}>
          <SubHeading align="center"> Locate Us </SubHeading>
          <Background>
            <Grid container spacing={1} alignItems="stretch">
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <iframe
                  id="gmap_canvas"
                  width="100%"
                  height="500"
                  frameBorder="0"
                  scrolling="no"
                  src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=B-14,%20Sector%2033,%20Noida-%20201307,%20U.P.+(Faciomaxillary%20&amp;%20Dental%20Health%20Centre)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                />
              </Grid>
            </Grid>
          </Background>
        </Column>
      </Row> */}
    </Page>
  )
}

Contact.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <Head>
        <title>Contact Us - Zoko World</title>
        <meta
          name="description"
          content="Contact Zoko World for various services including website hosting, web development, mobile development, email marketing, Instagram marketing, and WhatsApp marketing. Call us at 09312284822 & WhatsApp 09650362363."
        />

        <meta property="og:title" content="Contact Us - Zoko World" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.zokoworld.com/contact-us"
        />
        <meta property="og:image" content="/logo.png" />
        <meta
          property="og:description"
          content="Contact Zoko World for various services including website hosting, web development, mobile development, email marketing, Instagram marketing, and WhatsApp marketing. Call us at 09312284822 & WhatsApp 09650362363."
        />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@zokoworld" />
        <meta name="twitter:creator" content="@zokoworld" />
        <link rel="canonical" href="https://www.zokoworld.com/contact-us" />
      </Head>
      {page}
    </Layout>
  )
}
