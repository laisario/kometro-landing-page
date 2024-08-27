import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination } from 'swiper';

function Timeline({ periods }) {
    console.log(periods)
    return (
        <Swiper
            navigation={true}
            pagination={true}
            modules={[Navigation, Pagination]}
            className="md:w-[100%] lg:none"
            style={{
                "--swiper-pagination-bullet-size": "10px",
                "--swiper-theme-color": "#FD7622",
            }}
        >
            {periods?.map((period, i) => (
                <SwiperSlide key={i + 1}>
                    <img src={period?.image} />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default Timeline