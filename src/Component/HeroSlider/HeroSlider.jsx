import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Slide from "../Slide/Slide";

const HeroSlider = () => {
  const [sliders, setsliders] = useState([]);

  useEffect(() => {
    fetch("/slide.json")
      .then((res) => res.json())
      .then((data) => setsliders(data));
  }, []);

  return (
    <Swiper
      className="w-11/12 mx-auto"
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
    >
      {sliders.map((slide) => (
        <SwiperSlide key={slide.id}>
          <Slide slide={slide} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSlider;
