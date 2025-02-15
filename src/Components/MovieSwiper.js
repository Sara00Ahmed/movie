import React from "react";
import "./movieswiper.css";

// Import Swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

// Import required modules
import { Autoplay, EffectCoverflow } from "swiper/modules";

function MovieSwiper({ slides = [] }) {
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop={true}
      modules={[Autoplay, EffectCoverflow]}
      className="movieSwiper"
    >
      {slides.length > 0 ? (
        slides.map((slide) => (
          <SwiperSlide key={slide._id} >
            <img src={slide.previewImg} alt="Preview" />
          </SwiperSlide>
        ))
      ) : (
        <p>No slides available</p>
      )}
    </Swiper>
  );
}

export default MovieSwiper;
