import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const SwiperInMain = () => {
  return (
    <>
      <div className="w-full h-auto mt-[50px]">
        <div className="w-5/6 h-[500px] mx-auto rounded-3xl truncate">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
          >
            <SwiperSlide className="w-full h-[500px] bg-red-300"></SwiperSlide>
            <SwiperSlide className="w-full h-[500px] bg-yellow-300"></SwiperSlide>
            <SwiperSlide className="w-full h-[500px] bg-green-300"></SwiperSlide>
            <SwiperSlide className="w-full h-[500px] bg-violet-300"></SwiperSlide>
            <SwiperSlide className="w-full h-[500px] bg-green-300"></SwiperSlide>
            <SwiperSlide className="w-full h-[500px] bg-violet-300"></SwiperSlide>
            <SwiperSlide className="w-full h-[500px] bg-green-300"></SwiperSlide>
            <SwiperSlide className="w-full h-[500px] bg-violet-300"></SwiperSlide>
            <SwiperSlide className="w-full h-[500px] bg-green-300"></SwiperSlide>
          </Swiper>

        </div>
      </div>
    </>
  );
};

export default SwiperInMain;
