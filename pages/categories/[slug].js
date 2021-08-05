import { useRouter } from "next/router";
import Layout from "~/components/Layout/Layout";
import useSWR from "swr";
import Header from "~/components/Header";
import SubCatCard from "~/components/SubCatCard";
import headerImgCat from "../../public/images/headerImgCat.jpeg";
import slugConvertor from "~/lib/slugConvertor";

const Post = () => {
  const router = useRouter();
  const { slug } = router.query;
  const { data: issuesCategories, error } = useSWR("/api/issues");

  if (!issuesCategories && !error) {
    return <div>Loading...</div>;
  }

  if (!issuesCategories) {
    return <Layout>Not found.</Layout>;
  }

  return (
    <Layout title={slug}>
      <Header
        backgroundColor="white"
        imgSrc={headerImgCat}
        imgAlt="Woman's hand"
        title={slugConvertor(slug)}
        caption={
          "Miricyl helps you find key, informative resources to guide you on your mental health journey"
        }
      />
      <div className="flex flex-col md:flex-row md:flex-wrap justify-end items-center md:justify-between my-12 sm:my-32 sm:mx-12">
        {issuesCategories &&
          issuesCategories.data
            .filter((issue) => issue.slug === slug)
            .map(({ id, category_id, name }) => (
              <SubCatCard
                key={id}
                backgroundColor1={
                  category_id === 1
                    ? "yellow"
                    : category_id === 2
                    ? "green"
                    : category_id === 3
                    ? "indigo"
                    : "indigo"
                }
                backgroundColor2={
                  category_id === 1
                    ? "yellow"
                    : category_id === 2
                    ? "green"
                    : category_id === 3
                    ? "indigo"
                    : "indigo"
                }
                title={name}
                category={slugConvertor(slug)}
                link={`/issues/${id}`}
              />
            ))}
      </div>
    </Layout>
  );
};

export default Post;
