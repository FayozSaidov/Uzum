import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/autoplay";


const ProductSwiper = ({ media }) => {
  const [thumbsSwiper, setThumbsSwiper] = React.useState(null);

  return (
    <div className="flex items-center w-[600px] h-[600px]">
      {/* Swiper для превью */}
      <Swiper
        onSwiper={setThumbsSwiper}
        direction="vertical"
        modules={[Autoplay, Thumbs]} // Указываем модуль Thumbs
        spaceBetween={20}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        autoplay={{
          delay: 2500, // Задержка между слайдами в миллисекундах
          disableOnInteraction: false, // Продолжить автопрокрутку после взаимодействия
        }}
        className="mySwiper-thumbs"
        style={{ width: "150px", height: "600px", marginTop: '100px' }}
      >
        {media.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Thumbnail ${index + 1}`}
              style={{ width: "100%" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Основной Swiper */}
      <Swiper
        spaceBetween={10}
        modules={[Navigation, Autoplay, Thumbs]} // Указываем модули Navigation и Thumbs
        thumbs={{ swiper: thumbsSwiper }}
        className="mySwiper-main"
        style={{ width: "400px", height: "400px" }}
        autoplay={{
          delay: 2500, // Задержка между слайдами в миллисекундах
          disableOnInteraction: false, // Продолжить автопрокрутку после взаимодействия
        }}
      >
        {media.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              style={{ width: "100%" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductSwiper;
