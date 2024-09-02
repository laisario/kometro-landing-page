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
        slidesPerView={3}
        modules={[Scrollbar]}
        scrollbar={{ draggable: true }}
      >
        {client?.clients?.map(({ name, image }, i) => (
          <SwiperSlide key={name + i} className='flex flex-col justify-center items-center mb-8'>
            <img src={image} alt={`Logo ${name}`} width="120px" />
            <p className='font-bold text-gray-700'>{name}</p>
          </SwiperSlide>
        ))}

      </Swiper>
    </div>
  )
}

export default Clients