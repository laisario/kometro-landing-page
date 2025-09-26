import Base from "@layouts/Baseof";
import { CategoryFilter } from "@layouts/components/CategoryFilter";
import FeaturedPost from "@layouts/components/FeaturedPost";
import PostGrid from "@layouts/partials/PostGrid";
import { useEffect, useState } from "react";

export default function Knowledge({ categories }) {
  const [posts, setPosts] = useState([]);
  const [featuredPost, setFeaturedPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState("todas");
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState({ next: null, previous: null });


  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const url = new URL(`${process.env.NEXT_PUBLIC_API_URL}/posts/`);
        url.searchParams.append("page", page);
        if (category !== "todas") {
          url.searchParams.append("categoria", category);
        }

        const res = await fetch(url);
        const data = await res.json();
        setPosts(data.results);
        setPagination({ next: data.next, previous: data.previous });
      } catch (error) {
        console.error("Erro ao buscar posts", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [page, category]);

  useEffect(() => {
    const fetchFeaturedPosts = async () => {
      try {
        const url = new URL(`${process.env.NEXT_PUBLIC_API_URL}/posts/featured/`);
        if (category !== "todas") {
          url.searchParams.append("categoria", category);
        }
  
        const res = await fetch(url);
        const data = await res.json();
        setFeaturedPosts(data.results || data);
      } catch (error) {
        console.error("Erro ao buscar destaques", error);
      }
    };
  
    fetchFeaturedPosts();
  }, [category]);

  const handleCategoryChange = (cat) => {
    setCategory(cat?.nome === "todas" ? "todas" : cat?.id);
    setPage(1);
  }

  return (
    <Base title="Área de Conhecimento">
      <div className="container flex-grow mb-16" >
        <section className="section">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">Área de conhecimento</h1>
          <p className="text-lg text-center max-w-2xl mx-auto text-pretty">
            Explore nossos artigos e conteúdos educacionais sobre metrologia, calibração e controle de qualidade.
          </p>
        </section>
        <CategoryFilter
          categories={categories}
          selectedCategories={category}
          onCategoryChange={handleCategoryChange}
        />
        
        {loading ? (<p className="text-center" >Carregando...</p>) : (
          <>
            {!!featuredPost?.length && <FeaturedPost posts={featuredPost} />}
            <PostGrid posts={posts} pagination={pagination} setPage={setPage} />
          </>
        )}

      </div>
    </Base>
  );
}


export const getStaticPaths = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/`);
  const posts = await res.json();

  const paths = posts?.results?.map((post) => ({
    params: { id: post?.id },
  }));

  return {
    paths,
    fallback: false,
  };
};


export const getStaticProps = async () => {
  const resCategories = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categorias/`)
  const categories = await resCategories.json();

  return {
    props: {
      categories
    },
    revalidate: 60, 
  };
};
