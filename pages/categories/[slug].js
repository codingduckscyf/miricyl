import { useRouter } from "next/router";
import Layout from "~/components/Layout/Layout";
import useSWR from "swr";
import Header from "~/components/Header";
import SubCatCard from "~/components/SubCatCard";
import convertSlugToTitle from "~/lib/convertSlugToTitle";
import getColorForCategoryId from "~/lib/getColorForCategoryId";
import mentalHealth from "../../public/images/mentalHealth.jpg";
import socialRelationship from "../../public/images/socialRelationship.jpg";
import lifeIssues from "../../public/images/lifeIssues.jpg";

const Post = () => {
  const urlLookup = {
    "mental-health": mentalHealth,
    "life-issues": lifeIssues,
    "social-relationship": socialRelationship,
  };

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
        imgSrc={urlLookup[slug]}
        imgAlt="Woman's hand"
        title={convertSlugToTitle(slug)}
        caption={
          "Miricyl helps you find key, informative resources to guide you on your mental health journey"
        }
      />
      <div className="flex flex-col md:flex-row md:flex-wrap justify-end items-center md:justify-between my-12 sm:my-32 sm:mx-12">
        {issuesCategories.data
          .filter((issue) => issue.slug === slug)
          .map(({ id, category_id, name }) => (
            <SubCatCard
              key={id}
              backgroundColor={getColorForCategoryId(category_id)}
              title={name}
              category={convertSlugToTitle(slug)}
              link={`/issues/${id}`}
            />
          ))}
      </div>
    </Layout>
  );
};

export default Post;
