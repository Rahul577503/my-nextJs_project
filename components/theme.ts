// eslint-disable-next-line camelcase
import { Lato, Roboto, Roboto_Slab } from 'next/font/google'
import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
})

const h1Font = Lato({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})
const h2Font = Roboto_Slab({
  weight: ['400', '500'],
  style: ['normal'],
  subsets: ['latin'],
})

// Create a theme instance.
const theme = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: '#fff',
          color: '#2a3eb1',
        },
      },
    },
  },
  palette: {
    primary: {
      main: '#2a3eb1',// '#2979ff',
    },
    secondary: {
      main: '#b2102f',// '#651fff',
    },
    error: {
      main: red.A400,
    },
    customColor: {
      main: '#333',
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
})

theme.typography.h1 = {
  fontWeight: '500',
  fontSize: '1.4rem',
  fontFamily: h1Font.style.fontFamily,
  '@media (min-width:600px)': {
    fontSize: '1.6rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2rem',
  },
}
theme.typography.h2 = {
  fontWeight: '500',
  fontSize: '1.3rem',
  fontFamily: h2Font.style.fontFamily,
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.75rem',
  },
}
theme.typography.h3 = {
  fontWeight: '500',
  fontSize: '1.25rem',
  fontFamily: h2Font.style.fontFamily,
  '@media (min-width:600px)': {
    fontSize: '1.4rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.7rem',
  },
}

theme.typography.h4 = {
  fontSize: '1.2rem',
  fontWeight: '500',
  fontFamily: h2Font.style.fontFamily,
  '@media (min-width:600px)': {
    fontSize: '1.3rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.85rem',
  },
}

theme.typography.h5 = {
  fontSize: '1.15rem',
  fontWeight: '400',
  '@media (min-width:600px)': {
    fontSize: '1.2rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.45rem',
  },
}

theme.typography.h6 = {
  fontSize: '1.1rem',
  fontWeight: '400',
  '@media (min-width:600px)': {
    fontSize: '1.1rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.3rem',
  },
}

export default theme
