import Pagination from "@components/Pagination";
import Cta from "@layouts/components/Cta";
import config from "@config/config.json";
import Base from "@layouts/Baseof";
import { getListPage, getSinglePage } from "@lib/contentParser";
import { parseMDX } from "@lib/utils/mdxParser";
import { markdownify } from "@lib/utils/textConverter";
import Posts from "@partials/Posts";
const { service_folder } = config.settings;


const ServicePagination = ({ postIndex, posts, currentPage, pagination }) => {
  const indexOfLastPost = currentPage * pagination;
  const indexOfFirstPost = indexOfLastPost - pagination;
  const totalPages = Math.ceil(posts.length / pagination);
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const { frontmatter } = postIndex;
  const { title, call_to_action } = frontmatter;
  return (
    <Base title={title}>
      <div className="container">
        <section className="section">
          {markdownify(frontmatter?.title, "h1", "h1 text-center font-normal text-[56px]")}
          <Posts posts={currentPosts} />
          <Pagination
            section={service_folder}
            totalPages={totalPages}
            currentPage={currentPage}
          />
        </section>
        <Cta cta={call_to_action} />
      </div>
    </Base>
  );
};

export default ServicePagination;

// get service pagination slug
export const getStaticPaths = () => {
  const getAllSlug = getSinglePage(`content/${service_folder}`);
  const allSlug = getAllSlug.map((item) => item.slug);
  const { pagination } = config.settings;
  const totalPages = Math.ceil(allSlug.length / pagination);
  let paths = [];

  for (let i = 1; i < totalPages; i++) {
    paths.push({
      params: {
        slug: (i + 1).toString(),
      },
    });
  }

  return {
    paths,
    fallback: false,
  };
};

// get service pagination content
export const getStaticProps = async ({ params }) => {
  const currentPage = parseInt((params && params.slug) || 1);
  const { pagination } = config.settings;
  const posts = getSinglePage(`content/${service_folder}`).sort(
    (post1, post2) =>
      new Date(post2.frontmatter.date) - new Date(post1.frontmatter.date)
  );
  const postIndex = await getListPage(`content/${service_folder}/_index.md`);
  const mdxContent = await parseMDX(postIndex.content);

  return {
    props: {
      pagination: pagination,
      posts: posts,
      currentPage: currentPage,
      postIndex: postIndex,
      mdxContent: mdxContent,
    },
  };
};
