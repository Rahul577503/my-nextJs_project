import Page from '@/components/wrappers/Page'
import Head from 'next/head'
import { Box, Container, Grid, Typography } from '@mui/material'
import { refundPolicy} from '@/constants/refund'
import Layout from '@/components/layout'
import Image from 'next/image'
import { refundPolicyMetaData } from '@/constants/metaData'

export default function Refund(): JSX.Element {
  const imageContainerStyle = {
    animation: 'moveUpDown 2s infinite alternate',
  }

  const keyframes = `
    @keyframes moveUpDown {
      from {
        transform: translateY(0)
      }
      to {
        transform: translateY(-20px)
      }
    }
  `

  return (
    <Page>
      <Container maxWidth="lg">
        <Head>
          <style>{keyframes}</style>
        </Head>
        {refundPolicy.description.map((section, index) => (
          <Box key={index} mt={4}>
            <Grid
              container
              spacing={2}
              alignItems="center"
              justifyContent="center"
            >
              <Grid item xs={12}>
                {section.image && (
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Image
                      src={section.image}
                      alt={section.title}
                      width={550}
                      height={450}
                      style={imageContainerStyle}
                    />
                  </div>
                )}
              </Grid>
              <Grid item xs={12}>
                {section.title && (
                  <Typography variant="h4" gutterBottom>
                    {section.title}
                  </Typography>
                )}
                {section.content && (
                  <Typography variant="body1" mt={2}>
                    {section.content}
                  </Typography>
                )}
              </Grid>
            </Grid>
          </Box>
        ))}
      </Container>
    </Page>
  )
}

Refund.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Layout>
      <Head>
        <title>{refundPolicyMetaData[0].title}</title>
        <meta
          name="description"
          content={refundPolicyMetaData[0].description}
        />
        <meta property="og:title" content={refundPolicyMetaData[0].ogTitle} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="" />
        <meta property="og:image" content={refundPolicyMetaData[0].ogImage} />
        <meta
          property="og:description"
          content={refundPolicyMetaData[0].ogDescription}
        />
        <meta
          name="twitter:card"
          content={refundPolicyMetaData[0].twitterCard}
        />
        <meta
          name="twitter:site"
          content={refundPolicyMetaData[0].twitterSite}
        />
        <meta
          name="twitter:creator"
          content={refundPolicyMetaData[0].twitterCreator}
        />
      </Head>
      {page}
    </Layout>
  )
}
