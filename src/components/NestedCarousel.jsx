"use client";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";

export default function NestedCarousel() {
  return (
    <div className="bg-white p-4 box-border">
      {/* Main Swiper with coverflow effect */}
      <Swiper
        modules={[Autoplay, EffectCoverflow]}
        autoplay={{ delay: 3000 }}
        slidesPerView="auto"
        centeredSlides={true}
        initialSlide={4}
        loop={true}
        grabCursor={true}
        effect={"coverflow"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
      >
        {/* Individual Image Slide 1 */}
        <SwiperSlide style={{ height: "250px", width: "350px" }}>
          <Link href="/categories/beauty" style={{ width: "100%", height: "100%", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img
              src="/Images/elureC.png"
              alt="Slide 1"
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </Link>
        </SwiperSlide>

        {/* Individual Image Slide 2 */}
        <SwiperSlide style={{ height: "250px", width: "350px" }}>
          <Link href="/women" style={{ width: "100%", height: "100%", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img
              src="/Images/cr.png"
              alt="Slide 2"
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </Link>
        </SwiperSlide>

        {/* Individual Video Slide 1 */}
        <SwiperSlide
          style={{
            display: 'flex',
            gap: '10px',
            justifyContent: 'center',
            alignItems: 'center',
            width: "350px",
            height: "250px"
          }}
        >
          <Link href="/categories/fragrances" style={{ width: "100%", height: "100%", display: 'flex' }}>
            <video
              src="/Images/video011.mp4"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              loop
              autoPlay
              muted
              controls={false}
            />
          </Link>
        </SwiperSlide>
         
        {/* Individual Video Slide 2 */}
        <SwiperSlide
          style={{
            display: 'flex',
            gap: '10px',
            justifyContent: 'center',
            alignItems: 'center',
            width: "350px",
            height: "250px"
          }}
        >
          <Link href="/categories/beauty" style={{ width: "100%", height: "100%", display: 'flex' }}>
            <video
              src="/Images/swing.mp4"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              loop
              autoPlay
              muted
              controls={false}
            />
          </Link>
        </SwiperSlide>

        {/* Individual Image Slide 3 */}
        <SwiperSlide style={{ height: "250px", width: "350px" }}>
          <Link href="/women" style={{ width: "100%", height: "100%", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img
              src="/Images/imj.jpg"
              alt="Slide 3"
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </Link>
        </SwiperSlide>

        {/* Individual Video Slide 3 */}
        <SwiperSlide
          style={{
            display: 'flex',
            gap: '10px',
            justifyContent: 'center',
            alignItems: 'center',
            width: "350px",
            height: "250px"
          }}
        >
          <Link href="/categories/beauty" style={{ width: "100%", height: "100%", display: 'flex' }}>
            <video
              src="/Images/fly.mp4"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              loop
              autoPlay
              muted
              controls={false}
            />
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}