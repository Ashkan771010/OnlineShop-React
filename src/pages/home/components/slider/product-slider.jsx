import { ProductSliderContainer } from "./product-slider.style";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSelector } from "react-redux";
import "swiper/css";
import "swiper/css/navigation";
import ProductCard from "../../../../component/product-card/product-card";
import SwiperCore, { Navigation, Scrollbar, Autoplay } from "swiper";

// install Swiper modules
SwiperCore.use([Navigation, Scrollbar, Autoplay]);

const ProductSlider = (props) => {
  const { filterTitle } = props;
  const products = useSelector((state) => state.prodcutReducer.products);
  const filterdList = products.filter(
    (product) => product.category === filterTitle
  );
  return (
    <ProductSliderContainer>
      {products.length > 0 ? (
        <Swiper
          scrollbar={{ hide: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          navigation={true}
          className="product-swiper"
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 0,
            },
            "@1.00": {
              slidesPerView: 3,
              spaceBetween: 0,
            },
            "@1.50": {
              slidesPerView: 3.2,
              spaceBetween: 0,
            },
          }}
        >
          {filterdList.map((res) => {
            return (
              <SwiperSlide key={res.id}>
                <ProductCard res={res} cardWidth="90%" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      ) : (
        <h2>Please Refresh The Page</h2>
      )}
    </ProductSliderContainer>
  );
};

export default ProductSlider;
