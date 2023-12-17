/* eslint-disable no-console */
import { NextPage, NextPageContext } from 'next'
import Head from 'next/head'
import { ReactNode, useEffect } from 'react'
// import { NextWebVitalsMetric } from 'next/app'
// import {useRouter} from 'next/router'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { CacheProvider, EmotionCache } from '@emotion/react'

import theme from '@/components/theme'
import createEmotionCache from '@/components/createEmotionCache'
import '@/styles/style.scss'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

type Page<P = unknown> = NextPage<P> & {
  getLayout?: (page: ReactNode) => ReactNode
}

export interface MyPageContext extends NextPageContext {
  Component: Page
  emotionCache?: EmotionCache
}

/* export function reportWebVitals(metric: NextWebVitalsMetric): void {
  const body = JSON.stringify(metric)
  const url = 'http://localhost/analytics'
   // Use `navigator.sendBeacon()` if available, falling back to `fetch()`.
   if (navigator.sendBeacon) {
    navigator.sendBeacon(url, body)
  } else {
    fetch(url, { body, method: 'POST', keepalive: true })
  }

  // eslint-disable-next-line no-console
  // console.log(metric)
} */

declare const window: Window &
  typeof globalThis & {
    workbox: any
  }

export default function MyApp({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}: any) {
  // This hook only run once in browser after the component is rendered for the first time.
  // It has same effect as the old componentDidMount lifecycle callback.
  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      'serviceWorker' in navigator &&
      window?.workbox !== undefined
    ) {
      const wb = window?.workbox
      // add event listeners to handle any of PWA lifecycle event
      // https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-window.Workbox#events
      // wb.addEventListener('installed', event => {
      //   console.log(`Event ${event.type} is triggered.`)
      //   console.log(event)
      // })

      // wb.addEventListener('controlling', event => {
      //   console.log(`Event ${event.type} is triggered.`)
      //   console.log(event)
      // })

      // wb.addEventListener('activated', event => {
      //   console.log(`Event ${event.type} is triggered.`)
      //   console.log(event)
      // })

      // A common UX pattern for progressive web apps is to show a banner when a service worker has updated and waiting to install.
      // NOTE: MUST set skipWaiting to false in next.config.js pwa object
      // https://developers.google.com/web/tools/workbox/guides/advanced-recipes#offer_a_page_reload_for_users
      const promptNewVersionAvailable = () => {
        // `event.wasWaitingBeforeRegister` will be false if this is the first time the updated service worker is waiting.
        // When `event.wasWaitingBeforeRegister` is true, a previously updated service worker is still waiting.
        // You may want to customize the UI prompt accordingly.
        if (
          confirm(
            'A newer version of this web app is available, reload to update?'
          )
        ) {
          // Send a message to the waiting service worker, instructing it to activate.
          wb.messageSkipWaiting()
          wb.addEventListener('controlling', () => {
            window.location.reload()
          })
        } else {
          console.log(
            'User rejected to reload the web app, keep using old version. New version will be automatically load when user open the app next time.'
          )
        }
      }

      wb.addEventListener('waiting', promptNewVersionAvailable)
      // never forget to call register as auto register is turned off in next.config.js
      wb.register()
    }
  }, [])

  // const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const getLayout = Component.getLayout || ((page: ReactNode) => page)
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        {process.env.NEXT_PUBLIC_HOST !==
          'https://faciomaxillary-dentalcare.com' && (
          <meta name="robots" content="noindex, nofollow" />
        )}
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content={theme.palette.primary.main} />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        {/* <Component {...pageProps} /> */}
        {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>
    </CacheProvider>
  )
}
