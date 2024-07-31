import React, { useEffect, useState } from "react";
import projectDemand from "../assets/projectImage.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper/modules";
import ButtonComponent from "./Button";

const Demand = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth >= 1024);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const slides = Array.from({ length: 8 });

  return (
    <div>
      <h1 className="font-bold text-xl py-5">Projects in High Demand</h1>

      <div style={{ display: isLargeScreen ? "none" : "block" }}>
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {slides.map((_, index) => (
            <SwiperSlide key={index}>
              <div className="gap-1 max-w-64">
                <img src={projectDemand} alt="Project Demand" />
                <h1 className="font-semibold">Bay view Hall</h1>
                <p className="text-sm">
                  Bay View, Sector 10 Vashi, Navi Mumbai
                </p>
                <p className="text-sm">2 BHK Apartment, 2 Baths</p>
                <p>Price: ₹1.6-2.2 Cr.</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div style={{ display: isLargeScreen ? "block" : "none" }}>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {slides.map((_, index) => (
            <SwiperSlide key={index}>
              <div className="gap-1 max-w-64">
                <img src={projectDemand} alt="Project Demand" />
                <h1 className="font-semibold">Bay view Hall</h1>
                <p className="text-sm">
                  Bay View, Sector 10 Vashi, Navi Mumbai
                </p>
                <p className="text-sm">2 BHK Apartment, 2 Baths</p>
                <p>Price: ₹1.6-2.2 Cr.</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="w-full flex justify-center pt-16">
        <ButtonComponent />
      </div>
    </div>
  );
};

export default Demand;
