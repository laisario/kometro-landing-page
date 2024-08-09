import config from "@config/config.json";
import Base from "@layouts/Baseof";
import Cta from "@layouts/components/Cta";
import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";
import { Autoplay, Pagination, Navigation, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Navigation } from 'swiper/modules';
import "swiper/swiper.min.css";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import './styles.css';

import { getListPage } from "../lib/contentParser";
import YoutubePlayer from "@layouts/components/YoutubePlayer";

const Home = ({ frontmatter }) => {
  const { banner, feature, service, workflow, call_to_action } = frontmatter;
  const { title } = config.site;
  const { service_folder } = config.settings;


  return (
    <Base title={title}>
      <section className="section pb-[50px] pt-[100px]">
        <div className="container">
          <div className="flex flex-col items-center text-center lg:flex-row lg:items-start lg:text-left">
            <div className="mx-auto lg:col-5">
              <h1 className="font-primary font-bold">{banner?.title}</h1>
              <p className="mt-4">{markdownify(banner?.content)}</p>
              <a className="btn btn-primary mt-[20px] mb-[20px]">{banner?.button?.label}</a>
            </div>
            <div class="w-full lg:w-[800px] lg:h-[450px]">
              <YoutubePlayer id="cHrrdmRuwpM" title='Exemplo de video' autoplay={true} />
            </div>
          </div>
        </div>
      </section>


      <section
        className="section"
      >
        <div className="container mx-auto p-4">
          <div className="text-center mb-8">
            <h2>{markdownify(service?.title)}</h2>
          </div>
          <div className="relative">
            <Swiper
              slidesPerView={1}
              scrollbar={{ hide: true, }}
              spaceBetween={20}
              loop={true}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Scrollbar, Pagination]}
              className="bg-[#dddddd] rounded-lg shadow-2xl"
            >
              {service?.services?.map((service, index) => {
                const isOdd = index % 2 > 0;

                return <SwiperSlide className="flex justify-between items-center p-4">

                  <div className="gap-8 md:grid md:grid-cols-2">
                    <div className={`service-carousel ${!isOdd && "md:order-2"}`}>
                      <Image src={service?.image} alt="" width={400} height={300} />
                    </div>

                    <div
                      className="service-content mt-5 md:mt-0 md:order-1"
                    >
                      <h2 className="font-bold leading-[40px]">{service?.title}</h2>
                      <p className="mt-4 mb-2">{service?.content}</p>

                    </div>
                  </div>
                </SwiperSlide>
              })}
            </Swiper>

          </div>
        </div>
      </section>


      <section className="section">
        <div className="container">
          <div className="text-center">
            <h2>{markdownify(feature?.title)}</h2>
          </div>
          <div className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            {feature?.features?.map((item, i) => (
              <div
                className="feature-card rounded-xl bg-white shadow-2xl p-5 pb-8 text-center"
                key={`feature-${i}`}
              >
                {item.icon && (
                  <Image
                    className="mx-auto"
                    src={item.icon}
                    width={30}
                    height={30}
                    alt=""
                  />
                )}
                <div className="mt-4">
                  {markdownify(item.name, "h3", "h5")}
                  <p className="mt-3">{item.content}</p>
                </div>
                {item?.button?.enable && (
                  <Link
                    href={`/${service_folder}/${item?.button?.slug}`}
                    className="cta-link inline-flex items-center text-primary"
                  >
                    {item?.button.label}
                    <Image
                      className="ml-1"
                      src="/images/arrow-right.svg"
                      width={18}
                      height={14}
                      alt="arrow"
                    />
                  </Link>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a href={feature?.button?.link} className="btn btn-primary mt-[20px] mb-[20px]">{feature?.button?.label}</a>
          </div>
        </div>
      </section>


      {/* <section className="section pb-0">
        <div className="mb-8 text-center">
          {markdownify(
            workflow.title,
            "h2",
            "mx-auto max-w-[400px] font-bold leading-[44px]"
          )}
          {markdownify(workflow.description, "p", "mt-3")}
        </div>
        <Image
          src={workflow.image}
          alt="workflow image"
          width={1920}
          height={296}
        />

      </section> */}

    </Base>
  );
};

export const getStaticProps = async () => {
  const homePage = await getListPage("content/_index.md");
  const { frontmatter } = homePage;
  return {
    props: {
      frontmatter,
    },
  };
};

export default Home;
