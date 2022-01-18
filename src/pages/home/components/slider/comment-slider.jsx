import { CommentSliderContainer } from "./comment-slider.style";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import "swiper/css/bundle";
import { commentData } from "../../comment-data";
import CommentCard from "../comment/comment-card";

SwiperCore.use([Navigation, Autoplay]);

const CommentSlider = () => {
    return (
      <CommentSliderContainer>
        {commentData.length > 0 ? (
          <Swiper
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            navigation={true}
            loop={true}
            className="comment-swiper"
            breakpoints={{
              "@0.00": {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              "@0.75": {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              "@1.00": {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              "@1.50": {
                slidesPerView: 1,
                spaceBetween: 0,
              },
            }}
          >
            {commentData.map((res) => {
              return (
                <SwiperSlide key={res?.id}>
                  <CommentCard res={res} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        ) : (
          <h2>Please Refresh The Page</h2>
        )}
      </CommentSliderContainer>
    );
}
 
export default CommentSlider;