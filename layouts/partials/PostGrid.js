import PostCard from "@layouts/components/PostCard";

const PostGrid = ({ posts, pagination, setPage }) => {
  if (posts?.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-muted-foreground text-lg">Nenhum artigo encontrado para as categorias selecionadas.</p>
      </div>
    )
  }
  return (
    <div>
      <h2 className="text-2xl font-semibold text-foreground mb-8">Mais artigos ({posts?.length})</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts?.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>

      <div className="flex justify-center gap-4 mt-8">
        <button
          disabled={!pagination.previous}
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Anterior
        </button>
        <button
          disabled={!pagination.next}
          onClick={() => setPage((prev) => prev + 1)}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Próxima
        </button>
      </div>
    </div>
  )
};

export default PostGrid;
