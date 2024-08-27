import config from "@config/config.json";
import CarouselVideo from "@layouts/components/CarouselVideo";
import Player from "@layouts/components/Player";
import { plainify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";


const Posts = ({ posts, frontmatter }) => {
  const { service_folder, summary_length } = config.settings;
  return (
    <div className="section row pb-0">
      <div className="col-12 pb-12 lg:pb-24">
        <div className="row items-center">
          <div className="col-12 md:col-6">
            <CarouselVideo videos={frontmatter?.videos} />
          </div>
          <div className="col-12 md:col-6 text-center">
            <h2 className="h3 mb-2 mt-4">
              {frontmatter?.subtitle}
            </h2>
            <p>
              {frontmatter?.description}
            </p>
            <Link
              className="btn btn-primary mt-4"
              href="/contato"
            >
              Entre em contato
            </Link>
          </div>
        </div>
      </div>
      {posts?.filter(({ slug }) => slug !== 'service-5')?.map((post, i) => (
        <div key={`key-${i}`} className="col-12 mb-8 sm:col-6 lg:col-6">
          <div className="flex items-center">
            <Image
              className="rounded-lg"
              src={post?.frontmatter?.image}
              alt={post?.frontmatter?.title}
              width={"30"}
              height={"30"}
            />
            <h2 className="mb-0 ml-4">
              {post?.frontmatter?.title}
            </h2>
          </div>
          <p className="text-text">
            {plainify(
              post.content?.slice(0, Number(summary_length)),
              "div"
            )}...
          </p>
          <div className="flex justify-end mt-4">
            <Link
              className="btn btn-small btn-outline-primary"
              href={`/${service_folder}/${post.slug}`}
              rel=""
            >
              Leia mais
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
