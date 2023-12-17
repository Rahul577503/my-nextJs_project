import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Keyboard, Navigation, Zoom } from 'swiper'

import 'swiper/css'
import 'swiper/css/zoom'
import 'swiper/css/navigation'

import { IGallery } from '@/interfaces/common'
import Container from '@mui/material/Container'

export default function Gallery({ images }: { images: IGallery[] }) {
  return (
    <Container
      maxWidth="md"
      sx={{ height: { xs: '300px', sm: '350px', md: '500px' } }}
    >
    <Swiper
      style={{
        height: '98%',
      }}
      keyboard={{
        enabled: true,
      }}
      pagination={{
        clickable: true,
        el: '.my-custom-pagination-div1',
        renderBullet: (index, className) => {
          return '<span class="' + className + '"> </span>'
        },
      }}
      navigation={true}
      autoplay={{
        delay: 3500,
        disableOnInteraction: true,
      }}
      slidesPerView={1}
      slidesPerGroup={1}
      loop={true}
      zoom={true}
      modules={[Autoplay, Keyboard, Navigation, Zoom]}
      className="mySwiper"
    >
      {images?.map((img, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="swiper-zoom-container">
              <img src={img.image} alt="img" />
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
    </Container>
  )
}
