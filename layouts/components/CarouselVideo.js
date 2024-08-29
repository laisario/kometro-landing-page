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
            }}
        >
            {videos?.map(({ src }) => (
                <SwiperSlide>
                    <Player videoSrc={src} />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default CarouselVideo