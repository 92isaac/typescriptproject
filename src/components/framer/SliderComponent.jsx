import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";
import Image1 from "../../assets/products/1.png";
import Image2 from "../../assets/products/2.png";
import Image3 from "../../assets/products/3.png";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import HeroOverlay from "../HeroOverlay";

export default function SliderComponent() {
  const images = [
    {
      imageUrl: Image1,
      title: "Slide 1",
      subtitle: "Subtitle 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor.",
    },
    {
      imageUrl: Image2,
      title: "Slide 2",
      subtitle: "Subtitle 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor.",
    },
    {
      imageUrl: Image3,
      title: "Slide 3",
      subtitle: "Subtitle 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor.",
    },
  ];

  return (
    <div className="-z-10 md:relative">
      <HeroOverlay />
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        speed={600}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        loop={true}
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              slot="container-start"
              className="parallax-bg"
              style={{
                backgroundImage: `url(${image.imageUrl})`,
              }}
            ></div>
            <div className="title" data-swiper-parallax="-300">
              {image.title}
            </div>
            <div className="subtitle" data-swiper-parallax="-200">
              {image.subtitle}
            </div>
            <div className="text" data-swiper-parallax="-100">
              <p>{image.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
