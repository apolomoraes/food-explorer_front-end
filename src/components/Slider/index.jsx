import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css'

import { Navigation } from 'swiper/modules';

export function Slider({ children }) {
  return (
    <>
      <Swiper
        rewind={true}
        slidesPerView={3}
        navigation={true}
        modules={[Navigation]}
        className="swiper"
        breakpoints={{
          200: {
            slidesPerView: 1,
          },
          430: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 2,
          },
          720: {
            slidesPerView: 3,
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
