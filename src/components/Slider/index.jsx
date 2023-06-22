import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "./styles.css"

export default function Slider({ settings, children }) {
  return (
    <Swiper modules={[Navigation, Pagination]} {...settings}>{children}</Swiper>
  )
}