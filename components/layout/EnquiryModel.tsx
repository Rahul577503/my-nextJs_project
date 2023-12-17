import React, { useEffect, useState } from 'react'
import { default as NextLink } from 'next/link'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import useMediaQuery from '@mui/material/useMediaQuery'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import MailOutlinedIcon from '@mui/icons-material/MailOutlined'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import { useTheme } from '@mui/material/styles'

// import useMounted from '@/hooks/useMounted'
import Enquiry from '../Enquiry'
import { site } from '@/constants/common'
import { getCookie, setCookie } from '@/utils/common'

export interface DialogTitleProps {
  id: string
  children?: React.ReactNode
  onClose: (event?: any, reason?: any) => void
}

function BootstrapDialogTitle(props: DialogTitleProps) {
  const { children, onClose, ...other } = props

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  )
}

export default function EnquiryModal() {
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))

  const [open, setOpen] = useState(false)
  const handleClose = (event: any, reason: any) => {
    if (reason && (reason === 'backdropClick' || reason === 'escapeKeyDown'))
      return
    setOpen(false)
  }

  useEffect(() => {
    const checkCookie = getCookie('modelOpened')
    if (!checkCookie) {
      setOpen(true)
      setCookie('modelOpened', 'true', 1)
    }
  }, [])

  return (
    <Dialog
      fullScreen={fullScreen}
      open={open}
      onClose={handleClose}
      aria-labelledby="enquiry-dialog-title"
    >
      <BootstrapDialogTitle id="enquiry-dialog-title" onClose={handleClose} />
      <DialogContent>
        <Enquiry
          width="100%"
          align="center"
          spacing={1}
          onSubmit={() => setOpen(false)}
        />
      </DialogContent>

      <DialogActions>
        <Box sx={{ width: '100%', textAign: 'center' }}>
          <Link
            sx={{
              mx: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
            color="inherit"
            underline="hover"
            href="https://zokoworld.com/"
          >
            {'© '}
            {site.title}
          </Link>

          <Grid container spacing={1} alignItems="stretch">
            <Grid item sm={6} xs={12} textAlign="center">
              <Typography>
                {site.emails.map((title) => {
                  return (
                    <Link
                      key={title}
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
                  )
                })}
              </Typography>
            </Grid>
            <Grid item sm={6} xs={12} textAlign="center">
              <Typography>
                {site.contacts.map((title) => {
                  return (
                    <Link
                      key={title}
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
                  )
                })}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </DialogActions>
    </Dialog>
  )
}
