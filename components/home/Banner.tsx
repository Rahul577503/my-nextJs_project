import React, { useEffect, useState } from 'react'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Keyboard, Navigation, Pagination } from 'swiper'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { bannerConfig, banners } from '@/constants/banners'
import GetButtons from '@/components/wrappers/buttons/GetButtons'

export default function Banner() {
  const [newBanner, setNewBanner] = useState(() => banners.slice(0,1))

  useEffect(() => {
    setTimeout(()=>{
      setNewBanner(banners.slice())
    }, 5000)
  }, [])

  return (
    <Container
      maxWidth={false}
      disableGutters
      className="banner-container"
      sx={{
        height: { xs: '200px', sm: '370px', md: '540px', lg: '715px', xl: '1240px' },
      }}
    >
      <Swiper
        style={{
          height: '100%',
          background: '#fff',
          // '--swiper-navigation-color': theme.palette.primary.main,
          // '--swiper-pagination-color': theme.palette.secondary.main,
        }}
        pagination={{
          clickable: true,
        }}
        keyboard={{
          enabled: true,
        }}
        navigation={true}
        autoplay={{
          delay: 5500,
          disableOnInteraction: true,
        }}
        slidesPerView={1}
        spaceBetween={10}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        preloadImages={false}
        lazy={true}
        modules={[Autoplay, Keyboard, Navigation, Pagination]}
        className="swiper-container2"
      >
        {newBanner?.map((banner) => {
          return (
            <SwiperSlide
              key={banner.image}
              style={{
                background: `url("${banner.image}")`,
                backgroundSize: 'cover',
                height: '100%',
                backgroundPosition: 'center',
                overflow:'hidden',
              }}
            >
              <div className={`slider-main-container ${bannerConfig?.darkBg ? 'bg-dark' : ''}`}>
                <div className="slider-container">
                  {bannerConfig?.showTitle && <h4 className="slider-sub-title">{banner?.title}</h4>}
                  <div className="animated-area">
                  {bannerConfig?.showDesc && <p className="slider-title">{banner?.description}</p>}
                    {banner?.buttons && (
                      <Stack
                        mt={1}
                        direction="row"
                        justifyContent={banner?.buttonsAlign ?? 'left'}
                        width="100%"
                        className="slider-buttton"
                        sx={{position: 'absolute', bottom: '40px'}}
                      >
                        <GetButtons buttons={banner?.buttons} />
                      </Stack>
                    )}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </Container>
  )
}
