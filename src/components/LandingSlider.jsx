"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";

export default function LandingSlider() {
  const videoSrc="/Images/bagv.mp4";

  const images = [
     "/Images/beauty01.png",
     
    "/Images/cherry.jpg",
    "/Images/woman.png",
    "/Images/lipstick.jpg",
    "/Images/blackfriday.jpg",
    "/Images/shoes.png",
    "/Images/laptop02.jpg",
  ];

  return (
    <Swiper
    effect="coverflow"
      grabCursor={true}
      centeredSlides={true}
      slidesPerView="auto"
      initialSlide={7}
      
      loop={true}
       autoplay={{
        delay: 2050, // delay between slides in ms
        disableOnInteraction: false, // keep autoplay after interaction
      }}
       modules={[Autoplay, EffectCoverflow]}
      coverflowEffect={{
        rotate: 60,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      
      
    >
      {images.map((src, index) => (
         <SwiperSlide
          key={index}
          style={{
            width: '350px', // adjust width as needed
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            
          }}
        >
          {/* Image Container */}
          <div
            style={{
              background: '#fff',
              borderRadius: '20px',
              height: '300px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
            }}
          >
            <img
              src={src}
              alt={`slide-${index}`}
              className="w-full h-full object-cover " style={{borderRadius:"20px"}}
            />
          </div>
        </SwiperSlide>
        
      ))}
       <SwiperSlide
        style={{
          width: '185px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {/* Video Container */}
        <div
          style={{
            background: '#fff',
            borderRadius: '20px',
            height: '300px',
            width: '185px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
          }}
        >
          <video
            src={videoSrc}
            autoPlay
            muted
            loop
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              borderRadius: '20px',
            }}
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
