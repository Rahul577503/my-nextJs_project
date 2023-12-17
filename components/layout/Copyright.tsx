import React from 'react'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import { site } from '@/constants/common'

type Prop = {
  sx?: any
}

export default function Copyright(props: Prop): JSX.Element {
  return (
    <>
      <Typography
        variant="body2"
        align="center"
        color="#333"
        {...props}
      >
        {'Copyright © '} {new Date().getFullYear()}{' '}
        <Link
          color="inherit"
          underline="hover"
          href="https://faciomaxillary-dentalcare.com/"
        >
          {site.title}
        </Link>{'. '}
        All Rights Reserved
        <br />
        Powered By: {' '}
        <Link
          color="inherit"
          href="https://www.cruzersoftwares.com/"
          target="_blank"
          underline="hover"
          rel="noopener noreferrer"
        >
          Cruzer Softwares
        </Link>
      </Typography>
    </>
  )
}
