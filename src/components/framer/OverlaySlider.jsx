import React, { useRef, useState } from 'react';
import SwiperCore, { Virtual, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// install Virtual module
SwiperCore.use([Virtual, Navigation, Pagination]);

const images = [
  'https://via.placeholder.com/150',
  'https://via.placeholder.com/150',
  'https://via.placeholder.com/150',
];

export const OverlaySlider = () => {
    const [swiperRef, setSwiperRef] = useState(null);
 
  // Create array with 500 slides
  const [slides, setSlides] = useState(
    Array.from({ length: images.length }).map((_, index) => ({
      text: `Slide ${index + 1}`,
      image: images[index % images.length],
    }))
  );

 

  return (
    <div className='shadow rounded-md py-5 pr-5 bg-white'>
     <div className="flex justify-between ">
              <h3>Shop by Category</h3>
              <button className='bg-inherit border-0 block'>See more</button>
            </div>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        // pagination={{
        //   type: 'fraction',
        // }}
        style={{ height:'5rem'}}
        navigation={true}
        virtual
      >
        {slides.map(({ text, image }, index) => (
          <SwiperSlide key={text} virtualIndex={index} className=''>
           
            <div className="slide-wrapper  w-full">
              <img src={image} alt={`Slide ${index + 1}`} className='w-full object-cover'/>
            </div>
              <div className="slide-text text-xs">{text}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}