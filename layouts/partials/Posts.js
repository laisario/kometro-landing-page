import config from "@config/config.json";
import YoutubePlayer from "@layouts/components/YoutubePlayer";
import { plainify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";


const Posts = ({ posts }) => {
  const { service_folder, summary_length } = config.settings;
  return (
    <div className="section row pb-0">
      <div className="col-12 pb-12 lg:pb-24">
        <div className="row items-center">
          <div className="col-12 md:col-6">
            {/* <Image
              className="h-auto w-full rounded-lg"
              src={posts[0].frontmatter.image}
              alt={posts[0].frontmatter.title}
              width={540}
              height={227}
              priority={true}
            /> */}
            <YoutubePlayer id="cHrrdmRuwpM" title='Exemplo de video' autoplay={true} />

          </div>
          <div className="col-12 md:col-6">
            <h2 className="h3 mb-2 mt-4">
              Veja como podemos ajudar
            </h2>
            <p className="text-text">
              Se você precisar de assistência ou de algum serviço específico, entre em contato com nossa equipe. Após criar sua conta, você poderá acompanhar o status das propostas e gerenciar seus dados na plataforma Kometro. Fale Conosco para mais informações.
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
