import dynamic from 'next/dynamic'
import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { ReactNode } from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import CssBaseline from '@mui/material/CssBaseline'
import Divider from '@mui/material/Divider'
import AppBar from '@mui/material/AppBar'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Drawer from '@mui/material/Drawer'

import Footer from './Footer'
import { navItems, site } from '@/constants/common'

const EnquiryModal = dynamic(() => import('./EnquiryModel'), { ssr: false })

type Props = {
  children?: ReactNode
}

const drawerWidth = 240

const Layout = ({ children }: Props): JSX.Element => {
  const router = useRouter()
  const [open, setOpen] = React.useState(false)
  const toggleDrawer = () => {
    setOpen(!open)
  }

  const drawer = (
    <Box onClick={toggleDrawer} sx={{ textAlign: 'center' }}>
      <Link href="/">
        <Image
          src="/logo.png"
          alt={site.title}
          height="70"
          width="231"
          loading="lazy"
        />
      </Link>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.url} disablePadding>
            <ListItemButton component={Link} href={item.url}>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Box sx={{ display: 'flex', minHeight: '100vh' }}>
        <CssBaseline />
        <AppBar component="nav" id="appBar">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={toggleDrawer}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="subtitle1"
              component="div"
              sx={{ flexGrow: 1, display: { sm: 'block' } }}
            >
              <Link href="/">
                <Image
                  src="/logo.png"
                  alt={site.title}
                  height="70"
                  width="231"
                  className="main-logo"
                  style={{ verticalAlign: 'middle' }}
                />
              </Link>
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {navItems.map((item) => (
                <Button
                  color="inherit"
                  key={item.url}
                  component={Link}
                  href={item.url}
                  sx={{
                    background:
                      item.url === router?.route ||
                      (router?.route === '/services/[pid]' &&
                        item.url === '/services') ||
                      (router?.route === '/courses/[pid]' &&
                        item.url === '/academy')
                        ? 'rgba(0, 0, 0, 0.04)'
                        : null,
                  }}
                >
                  {item.title}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>

        <Box component="nav">
          <Drawer
            variant="temporary"
            open={open}
            onClose={toggleDrawer}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>

        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          {children}
          <Footer />
          <EnquiryModal />
        </Box>
      </Box>
    </>
  )
}

export default Layout
