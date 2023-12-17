import React, { useState } from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'

import SubHeading from '@/components/wrappers/headings/SubHeading'
import P from '@/components/wrappers/P'
import Image from '@/components/Image'
import { IContent } from '@/interfaces/common'

const RenderImageWithContent = ({
  image,
  description,
  layout,
  readMore,
  height,
  imageWidth,
  button,
}: IContent) => {
  const [expand, setExpand] = useState(false)
  const gridWidth = image
    ? {
        lg: imageWidth?.lg ? 12 - imageWidth?.lg : 7,
        md: imageWidth?.md ? 12 - imageWidth?.md : 7,
        sm: imageWidth?.sm ? 12 - imageWidth?.sm : 12,
        xs: imageWidth?.xs ? 12 - imageWidth?.xs : 12,
      }
    : { lg: 12, md: 12, sm: 12, xs: 12 }

  if (!layout) layout = 'main'

  if (layout === 'content') {
    return (
      <>
        {description?.map((desc, index) => {
          return (
            <Grid container spacing={1} mt={1} mb={1} key={index}>
              <SubHeading
                mx={1}
                style={{ marginBottom: 0, marginTop: 1, width: '100%' }}
              >
                {desc.title}
              </SubHeading>
              {desc?.image && (
                <Grid item lg={5} md={5} sm={12} xs={12}>
                  <Image src={desc?.image} alt="img" />
                </Grid>
              )}
              <Grid
                item
                lg={gridWidth.lg}
                md={gridWidth.md}
                sm={gridWidth.sm}
                xs={gridWidth.xs}
              >
                <P
                  mb={2}
                  key={index}
                  style={{ whiteSpace: 'pre-line', textAlign: 'justify' }}
                >
                  {desc.content}
                </P>
              </Grid>
            </Grid>
          )
        })}
      </>
    )
  }

  const handleExpand = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    setExpand((prevVal) => {
      // scroll to mainHeading
      if (prevVal) {
        document
          .querySelector('#mainHeading')
          ?.scrollIntoView({ behavior: 'smooth' })
      }
      return !prevVal
    })
  }

  return (
    <Grid container spacing={1} mt={1} mb={0}>
      {image && (
        <Grid
          item
          lg={imageWidth?.lg || 5}
          md={imageWidth?.md || 5}
          sm={imageWidth?.sm || 12}
          xs={imageWidth?.xs || 12}
        >
          <Image src={image} alt="img" />
        </Grid>
      )}
      <Grid
        item
        lg={gridWidth.lg}
        md={gridWidth.md}
        sm={gridWidth.sm}
        xs={gridWidth.xs}
      >
        {readMore ? (
          <>
            <div
              className={`readmore ${expand ? 'expand' : ''}`}
              style={{ maxHeight: height + 'px' }}
            >
              {description?.map((desc, index) => {
                return (
                  <P
                    mb={2}
                    key={index}
                    style={{
                      whiteSpace: 'pre-line',
                      paddingLeft: image ? '10px' : '',
                      textAlign: 'justify',
                    }}
                  >
                    {desc.content}
                  </P>
                )
              })}
              <Box
                onClick={handleExpand}
                className={`readmore-link ${expand ? 'expand' : ''}`}
                component="span"
                sx={{
                  color: (theme) => theme.palette.primary.light,
                }}
              ></Box>
            </div>
          </>
        ) : (
          <>
            {description?.map((desc, index) => {
              return (
                <P
                  mb={2}
                  key={index}
                  style={{
                    whiteSpace: 'pre-line',
                    paddingLeft: image ? '10px' : '',
                    textAlign: 'justify',
                  }}
                >
                  {desc.content}
                </P>
              )
            })}
            {button && <>{button}</>}
          </>
        )}
      </Grid>
    </Grid>
  )
}

export default RenderImageWithContent
