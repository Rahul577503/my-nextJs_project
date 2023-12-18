import React, { ChangeEvent, useState } from 'react'
import Page from '@/components/wrappers/Page'
import Layout from '@/components/layout'
import { portfolioMetaData } from '@/constants/metaData'
import { IPortfolio } from '@/interfaces/common'
import Image from 'next/image'
import Head from 'next/head'
import {
  AppBar,
  Box,
  Card,
  Container,
  Grid,
  IconButton,
  Modal,
  Tab,
  Tabs,
} from '@mui/material'
import { portfolios } from '@/constants/portfolio'
import CenterFocusStrongIcon from '@mui/icons-material/CenterFocusStrong'
import Link from 'next/link'

export default function Portfolio(): JSX.Element {
  const [value, setValue] = useState<number>(0)
  const [open, setOpen] = useState<boolean>(false)
  const [selectedImage, setSelectedImage] = useState<string>('')
  const [selectedCard, setSelectedCard] = useState<IPortfolio | null>(null)

  const [selectedCategory, setSelectedCategory] = useState('ALL')

  const handleChange = (event: ChangeEvent<object>, newValue: number) => {
    setValue(newValue)
    const categories: string[] = [
      'ALL',
      'WEB DESIGN',
      'ECOMMERCE',
      'DIGITAL MARKETING',
      'SOFTWARE DEVELOPMENT',
      'MOBILE APPLICATION',
    ]
    const selectedCategory = categories[newValue] || 'ALL'
    setSelectedCategory(selectedCategory)
  }

  const filteredPortfolios: IPortfolio[] =
    selectedCategory === 'ALL'
      ? portfolios
      : portfolios.filter((portfolio) => portfolio.title === selectedCategory)

  const handleOpenModal = (image: string) => {
    setSelectedImage(image)
    setOpen(true)
  }

  const handleCloseModal = () => {
    setOpen(false)
    setSelectedImage('')
  }
  const handleIconButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.stopPropagation()
    const image = event.currentTarget.getAttribute('data-image') || ''
    if (image) {
      setSelectedImage(image)
      handleOpenModal(image)
    }
  }

  return (
    <Page onClick={handleCloseModal}>
      <br />
      <AppBar
        position="relative"
        color="default"
        style={{
          borderRadius: '10px',
          border: '1px solid #ccc',
          boxShadow: '0 2px 4px rgba(0,0,0,0.643)',
          minWidth: '100%',
          overflowX: 'auto',
        }}
      >
        <Container>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            scrollButtons="auto"
          >
            <Tab label="ALL" />
            <Tab label="WEB DESIGN" />
            <Tab label="ECOMMERCE DEVELOPMENT" />
            <Tab label="MOBILE APPLICATION" />
            <Tab label="SOFTWARE DEVELOPMENT" />
            <Tab label="DIGITAL MARKETING" />
          </Tabs>
        </Container>
      </AppBar>
      <br />
      <Grid container spacing={3}>
        {filteredPortfolios.map((portfolio) => (
          <Grid item xs={12} sm={6} md={4} key={portfolio.id}>
            <Card
              style={{
                position: 'relative',
                overflow: 'hidden',
                height: '400px',
                width: 'auto',
              }}
              onMouseEnter={() => setSelectedCard(portfolio)}
              onMouseLeave={() => setSelectedCard(null)}
            >
              <div>
                <Image
                  src={portfolio.image}
                  alt={portfolio.title}
                  fill={true}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 3s ease-in-out',
                    transform:
                      selectedCard === portfolio ? 'scale(1.2)' : 'scale(1)',
                  }}
                />
                {selectedCard === portfolio && (
                  <IconButton
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      zIndex: 1,
                    }}
                    data-image={portfolio.image}
                    onClick={handleIconButtonClick}
                  >
                    <CenterFocusStrongIcon
                      style={{ color: 'red', fontSize: '80px' }}
                    />
                  </IconButton>
                )}
                <Link
                  href={'/'}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    position: 'absolute',
                    bottom: '10px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    textDecoration: 'none',
                    color: 'red',
                    borderRadius: '5px',
                    padding: '10px 20px',
                    border: '1px solid #333',
                    display: selectedCard === portfolio ? 'block' : 'none',
                    transition: 'top 0.3s, opacity 0.3s',
                    opacity: selectedCard === portfolio ? 1 : 0,
                    zIndex: 1,
                  }}
                >
                  Visit Website
                </Link>
              </div>
            </Card>
          </Grid>
        ))}
        <Modal
          open={open}
          onClose={handleCloseModal}
          style={{
            position: 'absolute',
            top: '10%',
            left: '10%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'scroll',
          }}
        >
          <Box onClick={handleCloseModal}>
            <div onClick={(e) => e.stopPropagation()}>
              <Image
                src={selectedImage}
                alt="Zoomed In"
                fill={true}
                style={{
                  maxWidth: '80vw',
                  maxHeight: '80vh',
                  objectFit: 'contain',
                }}
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </Box>
        </Modal>
      </Grid>
    </Page>
  )
}
Portfolio.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Layout>
      <Head>
        <title>{portfolioMetaData[0].title}</title>
        <meta name="description" content={portfolioMetaData[0].description} />

        <meta property="og:title" content={portfolioMetaData[0].ogTitle} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="" />
        <meta property="og:image" content={portfolioMetaData[0].ogImage} />
        <meta
          property="og:description"
          content={portfolioMetaData[0].ogDescription}
        />

        <meta name="twitter:card" content={portfolioMetaData[0].twitterCard} />
        <meta name="twitter:site" content={portfolioMetaData[0].twitterSite} />
        <meta
          name="twitter:creator"
          content={portfolioMetaData[0].twitterCreator}
        />
      </Head>
      {page}
    </Layout>
  )
}
