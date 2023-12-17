import React from 'react'
import { default as NextLink } from 'next/link'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import IconButton from '@mui/material/IconButton'
import MailOutlinedIcon from '@mui/icons-material/MailOutlined'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'

import Copyright from './Copyright'
import { footerLinks } from '@/constants/common'
import H3 from '@/components/wrappers/headings/H3'

export default function Footer(): JSX.Element {
  return (
    <>
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[300]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={1} alignItems="stretch">
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <Grid container spacing={1} alignItems="stretch">
                {footerLinks?.map((links, index) => {
                  return (
                    <Grid item lg={3} md={3} sm={6} xs={12} key={index} >
                      <H3 variant="h6">{links.section}</H3>
                      {links.links.map((link, index2) => {
                        if (Array.isArray(link.title)) {
                          return (
                            <React.Fragment key={index2}>
                              {link.title.map((title) => {
                                return (
                                  <Typography key={title}>
                                    {link?.type === 'email' && (
                                      <Link
                                        className="footerLink"
                                        component={NextLink}
                                        href={`mailto: ${title}`}
                                        color="inherit"
                                        underline="hover"
                                        target="_blank"
                                      >
                                        <IconButton aria-label="email">
                                          <MailOutlinedIcon />
                                        </IconButton>
                                        {title}
                                      </Link>
                                    )}
                                    {link?.type === 'phone' && (
                                      <Link
                                        className="footerLink"
                                        component={NextLink}
                                        href={`tel:+91${title}`}
                                        color="inherit"
                                        underline="hover"
                                        target="_blank"
                                      >
                                        <IconButton aria-label="phone">
                                          <LocalPhoneIcon fontSize="small" />
                                        </IconButton>
                                        +91-{title}
                                      </Link>
                                    )}
                                  </Typography>
                                )
                              })}
                              {index2 < links.links.length - 1 && (
                                <KeyboardArrowRightIcon
                                  fontSize="small"
                                  style={{ color: '#fff' }}
                                />
                              )}
                            </React.Fragment>
                          )
                        }
                        return (
                          <Typography key={index2}>
                            {link?.link ? (
                              <Link
                                className="footerLink"
                                component={NextLink}
                                href={link.link}
                                color="inherit"
                                underline="hover"
                              >
                                {link.title}
                              </Link>
                            ) : (
                              <React.Fragment key={index2}>
                                {link.type === 'address' && (
                                  <IconButton aria-label="address">
                                    <LocationOnIcon />
                                  </IconButton>
                                )}
                                {link.title}
                              </React.Fragment>
                            )}
                          </Typography>
                        )
                      })}
                    </Grid>
                  )
                })}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box
        sx={{
          py: 3,
          px: 2,
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[400]
              : theme.palette.grey[900],
        }}
      >
        <Copyright/>
      </Box>
    </>
  )
}
