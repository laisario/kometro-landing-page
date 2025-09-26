import ReactMarkdown from "react-markdown";
import Base from "@layouts/Baseof";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import CarouselVideo from "@layouts/components/CarouselVideo";


export default function KnowledgePost({ post }) {
  console.log(post)
  return (
    <Base title={post.titulo}>
      <div className="container max-w-4xl mx-auto px-4 py-10 space-y-8">
        {/* <div className="flex flex-row gap-4">
          {post?.imagem_destaque && (
            <div className="mx-auto max-w-lg rounded-lg overflow-hidden shadow-md">
              <img
                src={post?.imagem_destaque}
                alt={`Imagem destaque ${post?.imagem_destaque}`}
                className="w-full h-auto object-cover"
              />
            </div>
          )}
          <h1 className="text-4xl md:text-5xl font-bold text-left">{post.titulo}</h1>
        </div> */}

        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          {post?.imagem_destaque && (
            <div className="flex-shrink-0 w-40 md:w-64 rounded-lg overflow-hidden shadow-md">
              <img
                src={post?.imagem_destaque}
                alt={`Imagem destaque ${post?.imagem_destaque}`}
                className="w-full h-auto object-cover"
              />
            </div>
          )}
          <h1 className="text-3xl md:text-5xl font-bold text-center md:text-left">
            {post.titulo}
          </h1>
        </div>

        {!!post?.midia?.length && (
          <CarouselVideo videos={post?.midia} />
        )}

        {post.conteudo && (
          <div className="prose">
            <ReactMarkdown>{post.conteudo}</ReactMarkdown>
          </div>
        )}


        {!!post.imagens_adicionais.length && (
          <div className="w-full flex justify-center">
            <Swiper
              spaceBetween={16}
              slidesPerView={1}
              breakpoints={{
                768: { slidesPerView: post.imagens_adicionais.length > 1 ? 2 : 1 },
              }}
              className="w-full max-w-4xl my-8"
            >
              {post.imagens_adicionais.map((img) => (
                <SwiperSlide key={img.id}>
                  <div className="w-full rounded-lg overflow-hidden shadow-md">
                    <img
                      src={img.imagem}
                      alt={`Imagem adicional ${img.id}`}
                      className="w-full h-auto"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
      </div>
    </Base>
  );
}

export const getStaticPaths = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/`);
  const posts = await res.json();

  const paths = posts?.results?.map((post) => ({
    params: { single: post?.id?.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/${params?.single}/`);
  const post = await res.json();

  return {
    props: {
      post,
    },
    revalidate: 60,
  };
};
