import "./Slider.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { imagesArray } from "../../assets/constants/imagesArray";

function Slider() {
  return (
    <Swiper
      className="slider"
      modules={[Autoplay]}
      slidesPerView={1}
      autoplay={{ delay: 4000 }}
      speed={2000}
      loop={true}
      loopAdditionalSlides={1}
    >
      {imagesArray.map((item: any, index: number) => {
        return (
          <SwiperSlide key={index}>
            <img src={item} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default Slider;
