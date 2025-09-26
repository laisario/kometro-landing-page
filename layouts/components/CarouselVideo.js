import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Navigation } from 'swiper';
import Player from './Player';



function CarouselVideo({ videos }) {
  return (
    <Swiper
      grabCursor={true}
      navigation={true}
      spaceBetween={30}
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: true,
      }}
      modules={[Autoplay, Navigation]}
      style={{
        "--swiper-pagination-bullet-size": "10px",
        "--swiper-theme-color": "#FD7622",
        "border-radius": "16px"
      }}
    >
      {videos?.map((video, i) => (
        <SwiperSlide key={`${video?.src}-${i}`}>
          {video?.tipo === 'url' ? (
            <div className="w-full max-w-4xl mx-auto">
              <iframe
                width="100%"
                height="500"
                src={video?.src.replace("watch?v=", "embed/")}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ) : (
            <Player videoSrc={video?.src} />
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default CarouselVideo