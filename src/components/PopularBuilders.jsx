import React, { useState, useEffect } from "react";
import BuilderCard from "./card/BuilderCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import ButtonComponent from "./Button";
const PopularBuilders = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth >= 1024);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const slides = Array.from({ length: 6 });
  return (
    <div>
      <h1 className=" text-xl font-medium">PopularBuilders</h1>
      <div
        style={{ display: isLargeScreen ? "none" : "flex" }}
        className="justify-center items-center"
      >
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {slides.map((_, index) => (
            <SwiperSlide key={index}>
              <BuilderCard />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div style={{ display: isLargeScreen ? "block" : "none" }}>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {slides.map((_, index) => (
            <SwiperSlide key={index}>
              <BuilderCard />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className=" w-full flex justify-center pt-16">
        <ButtonComponent />
      </div>
    </div>
  );
};

export default PopularBuilders;
