import Cta from "./components/Cta";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFlip, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';



function Integridade({ data }) {
  const {
    frontmatter: { title, plans, call_to_action },
  } = data;
  console.log(plans)
  return (
    <>
      <section className="section">
        <h1 className="text-center font-normal mb-8">{title}</h1>
        <div
          className="flex flex-col md:flex-row justify-between w-full"
        >
          {plans.map((plan, index) => (
            <Swiper
              grabCursor={true}
              effect={'flip'}
              pagination={true}
              modules={[EffectFlip, Pagination]}
              className="w-[80%] md:w-[30%] h-auto min-h-[400px] hover:scale-105 transform transition-transform duration-300"
              style={{
                "--swiper-pagination-bullet-size": "10px",
                "--swiper-theme-color": "#FD7622",
              }}
              key={plan.title + index}
            >
              <SwiperSlide className="card text-center bg-white border border-gray-300 p-4 flex flex-col justify-evenly items-center py-32">
                <h4>{plan.title}</h4>
                <Image src={plan.image} alt={plan.title} width={100} height={50} />
              </SwiperSlide>
              <SwiperSlide className="card  border border-gray-300 p-4 flex flex-col px-12">
                <h4 className="mb-4 text-center">{plan.title}</h4>
                <ul className="list-disc list-inside mb-8">
                  {plan?.content?.map(({ text }, i) => <li key={text + i}><code>{text}</code></li>)}
                </ul>
              </SwiperSlide>
            </Swiper>
          ))}
        </div>
      </section>
      <Cta cta={call_to_action} />
    </>
  );
}

export default Integridade;
