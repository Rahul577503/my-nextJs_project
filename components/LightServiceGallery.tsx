import React from 'react'
import Box from '@mui/material/Box'

import LightGallery from 'lightgallery/react'
import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom'
import 'lightgallery/css/lightgallery.css'
import 'lightgallery/css/lg-zoom.css'
import 'lightgallery/css/lg-thumbnail.css'

import { IServiceGallery } from '@/interfaces/common'
import SubHeading from '@/components/wrappers/headings/SubHeading'
import useMounted from '@/hooks/useMounted'

export default function LightServiceGallery({
  images,
}: {
  images: IServiceGallery[]
}) {
  const isMounted = useMounted()
  if (!isMounted) return null

  return (
    <div>
      {images.map((item, index1) => (
        <React.Fragment key={index1}>
          {item?.section && (
            <SubHeading
              variant="h5"
              align="center"
            >
              {item?.section}
            </SubHeading>
          )}

          <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
            {item?.images?.map((image, index) => {
              return (
                <a key={index} href={`${image.image}?w=162&auto=format`}>
                  <Box
                    component="img"
                    sx={{
                      borderRadius: 2,
                      display: 'inline-block',
                      maxWidth: {xs:'100%', sm: '100', md: '49%', lg: '49%'},
                      maxHeight: '200px',
                      marginRight: {xs:'1px', sm: '1px', md: '2px', lg: '4px'},
                      marginBottom: '2px',
                    }}
                    loading="lazy"
                    alt={image.title}
                    src={`${image.image}?w=162&auto=format`}
                  />
                </a>
              )
            })}
          </LightGallery>
        </React.Fragment>
      ))}
    </div>
  )
}
