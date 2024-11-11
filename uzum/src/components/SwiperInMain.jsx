import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import slide_1 from '../assets/slide_1.jpg' 
import slide_2 from '../assets/slide_2.jpg' 
import slide_3 from '../assets/slide_3.jpg' 
import slide_4 from '../assets/slide_4.jpg' 
import slide_5 from '../assets/slide_5.jpg' 
import slide_6 from '../assets/slide_6.jpg'
import slide_7 from '../assets/slide_7.jpg'

const SwiperInMain = () => {

  const SwiperImg = [slide_1, slide_2, slide_3, slide_4, slide_5, slide_6, slide_7]

  return (
    <>
      <div className="w-full h-auto mt-[50px]">
        <div className=" h-[500px] mx-auto rounded-3xl truncate bg-slate-50">
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
          {SwiperImg.map((item, key) =>(
            <SwiperSlide key={key} className="w-full h-[500px]">
              <img src={item} alt="" className="w-full mx-auto object-contain"/>
            </SwiperSlide>
          ))}
          </Swiper>

        </div>
      </div>
    </>
  );
};

export default SwiperInMain;
