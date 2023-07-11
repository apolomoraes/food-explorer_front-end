import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

export function Slider({ children }) {
  return (
    <>
      <Swiper
        rewind={true}
        slidesPerView={3}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        breakpoints={{
          200: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          430: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          720: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
      >
        {
          children.map((card, index) => (
            <SwiperSlide key={String(index)}>
              {card}
            </SwiperSlide>
          ))
        }
      </Swiper>
    </>
  );
}
