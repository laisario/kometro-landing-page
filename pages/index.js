import config from "@config/config.json";
import Base from "@layouts/Baseof";
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
import { getListPage } from "../lib/contentParser";
import Player from "@layouts/components/Player";
import Timeline from "@layouts/components/Timeline";


const Home = ({ frontmatter }) => {
  const { banner, feature, timeline } = frontmatter;
  const { title } = config.site;
  const { service_folder } = config.settings;

  return (
    <Base title={title}>
      <section className="section pb-4">
        <div className="flex flex-col items-center text-center ">
          <div className="mx-auto">
            <h1 className="font-primary font-bold">{banner?.title}</h1>
            <div className="mt-4 mb-8">{markdownify(banner?.content, "h6")}</div>
          </div>
          <Player videoSrc={"/videos/video-institucional.MOV"} />
        </div>
      </section>


      <section
        className="section flex flex-col items-center text-center"
      >
        <div className="mb-2">
          <h2>{markdownify(timeline?.title)}</h2>
        </div>
        <img src={timeline?.image} alt="Timeline história Kometro" />


        <Timeline periods={timeline?.periods} />
      </section>


      <section className="section">
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
                </Link>
              )}
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <a href={feature?.button?.link} className="btn btn-primary mt-[20px] mb-[20px]">{feature?.button?.label}</a>
        </div>
      </section>
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
