import config from "@config/config.json";
import Base from "@layouts/Baseof";
import { markdownify } from "@lib/utils/textConverter";
import "swiper/swiper.min.css";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { getListPage } from "../lib/contentParser";
import Player from "@layouts/components/Player";
import Services from "@layouts/components/Services";
import History from "@layouts/components/History";
import Pillars from "@layouts/components/Pillars";
import Clients from "@layouts/components/Clients";


const Home = ({ frontmatter }) => {
  const { banner, service, timeline, call_to_action, videos, pillars, client } = frontmatter;
  const { title } = config.site;

  return (
    <Base title={title}>
      <section className="section pb-4">
        <div className="flex flex-col items-center text-center ">
          <div className="mx-auto">
            <h1 className="font-primary font-bold">{banner?.title}</h1>
            <div className="mt-4 mb-8">{markdownify(banner?.content, "h6")}</div>
          </div>
          <Player videoSrc={banner?.video} />
        </div>
      </section>


      <section className="section flex flex-col items-center text-center">
       <History timeline={timeline}/>
      </section>


      <section className="section">
        <Services service={service} cta={call_to_action} videos={videos} />
      </section>

      <section className="section">
        <Pillars pillars={pillars}/>
      </section>

      <section className="section">
        <Clients client={client} />
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
