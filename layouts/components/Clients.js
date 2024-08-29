import React from 'react'
import { markdownify } from "@lib/utils/textConverter";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper';
import 'swiper/css';
import 'swiper/css/scrollbar';

function Clients({ client }) {
  return (
    <div className='container'>
      <div className="text-center mb-16">
        <h2>{markdownify(client?.title)}</h2>
      </div>
      <Swiper
        spaceBetween={30}
        slidesPerView={5}
        modules={[Scrollbar]}
        scrollbar={{ draggable: true }}
        style={{
          "--swiper-theme-color": "#FD7622",
      }}
      >
        {client?.clients?.map(({ name, image }, i) => (
          <SwiperSlide key={name + i} className='flex flex-col justify-center items-center mb-16'>
            <img src={image} alt={`Logo ${name}`} width="150px" height="150px" />
            <p className='font-bold text-gray-700'>{name}</p>
          </SwiperSlide>

        ))}

      </Swiper>
    </div>
  )
}

export default Clients