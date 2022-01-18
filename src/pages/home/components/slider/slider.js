import { Container, SliderContainer } from "./slider-style";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { EffectFade } from "swiper";
import "swiper/css/bundle";

SwiperCore.use([Navigation, Pagination, Autoplay, EffectFade]);
const Slider = () => {
  const slides = [];
  for (let i = 0; i < 5; i++) {
    slides.push(
      <SwiperSlide key={`slide-${i}`}>
        <img
          src={`https://picsum.photos/id/${i + 1}/634/500/`}
          alt={`slide-${i}`}
        />
      </SwiperSlide>
    );
  }

  return (
    <Container>
      <SliderContainer>
        <Swiper
          className="slider"
          navigation
          pagination
          slidesPerView={1}
          loop={true}
          effect="fade"
          autoplay={{ delay: 3000, disableOnInteraction: false }}
        >
          {slides}
        </Swiper>
      </SliderContainer>
    </Container>
  );
};

export default Slider;
