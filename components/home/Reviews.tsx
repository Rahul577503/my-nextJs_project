import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Keyboard, Navigation, Pagination } from 'swiper'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import SubHeading from '@/components/wrappers/headings/SubHeading'
import GalleryCard from '@/components/card/GalleryCard'
import { reviews } from '@/constants/reviews'

export default function Reviews() {
  return (
    <>
      <SubHeading align="center">
        CUSTOMER REVIEWS
      </SubHeading>
      <div style={{ paddingLeft: 0, paddingRight: 0, width: '100%' }}>
        <Swiper
          style={{
            padding: '10px 4px',
            // '--swiper-navigation-color': theme.palette.primary.main,
            // '--swiper-pagination-color': theme.palette.secondary.main,
          }}
          pagination={{
            clickable: true,
            el: '.my-custom-pagination-div',
            renderBullet: (index, className) => {
              return '<span class="' + className + '"> </span>'
            },
          }}
          keyboard={{
            enabled: true,
          }}
          navigation={false}
          autoplay={{
            delay: 3500,
            disableOnInteraction: true,
          }}
          breakpoints={{
            240: {
              slidesPerView: 1,
              slidesPerGroup: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 10,
            },
          }}
          loop={true}
          loopFillGroupWithBlank={true}
          modules={[Autoplay, Keyboard, Navigation, Pagination]}
          className="mySwiper"
        >
          {reviews.length > 0 &&
            reviews.map((review, index) => {
              return (
                <SwiperSlide key={index}>
                  <GalleryCard
                    avatar={review.avatar}
                    title={review.title}
                    subtitle={review?.subtitle}
                    description={review?.description}
                  />
                </SwiperSlide>
              )
            })}
        </Swiper>

        <div
          className="my-custom-pagination-div"
          style={{ textAlign: 'center' }}
        />
      </div>
    </>
  )
}
