import useSWR from "swr";
import Layout from "~/components/Layout/Layout";
import Header from "~/components/Header";
import headerImgCat from "../public/images/headerImgCat.jpeg";
import SubCatCard from "~/components/SubCatCard";

const MentalHealthPage = () => {
  const { data: issuesCategories } = useSWR("/api/issues");
  const { data: categories } = useSWR("/api/categories");

  return (
    <Layout title="Social&Relationship">
      <Header
        backgroundColor="white"
        imgSrc={headerImgCat}
        imgAlt="Woman's hand"
        title="Social & Relationship"
        caption={
          "Miricyl helps you find key, informative resources to guide you on your mental health journey"
        }
      />
      <div className="flex flex-col md:flex-row md:flex-wrap justify-end items-center md:justify-around my-12 sm:my-32 sm:mx-12">
        {issuesCategories &&
          issuesCategories.data
            .filter(({ category_id }) => category_id === 3)
            .map(({ id, category_id, name }) => (
              <SubCatCard
                key={id}
                backgroundColor1="indigo"
                backgroundColor2="indigo"
                title={name}
                category={
                  categories &&
                  categories.data.map(
                    ({ name, id }) => category_id === id && name
                  )
                }
                link={`issues/${id}`}
              />
            ))}
      </div>
    </Layout>
  );
};

export default MentalHealthPage;
