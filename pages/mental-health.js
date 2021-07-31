import useSWR from "swr";
import Layout from "~/components/Layout/Layout";
import Header from "~/components/Header";
import headerImgCat from "../public/images/headerImgCat.jpeg";
import SubCatCard from "~/components/SubCatCard";

const MentalHealthPage = () => {
  const { data: issuesCategories } = useSWR("/api/issues");
  const { data: categories } = useSWR("/api/categories");

  return (
    <Layout title="mental health">
      <Header
        backgroundColor="white"
        imgSrc={headerImgCat}
        imgAlt="Woman's hand"
        title="mental health"
        caption={
          "Miricyl helps you find key, informative resources to guide you on your mental health journey"
        }
      />
      <div className="flex flex-col md:flex-row md:flex-wrap justify-end items-center md:justify-between my-32">
        {issuesCategories &&
          issuesCategories.data
            .filter(({ category_id }) => category_id === 1)
            .map(({ id, category_id, name }) => (
              <SubCatCard
                key={id}
                backgroundColor={
                  category_id === 1
                    ? "red"
                    : category_id === 2
                    ? "blue"
                    : "green"
                }
                title={name}
                category={
                  categories &&
                  categories.data.map(
                    ({ name, id }) => category_id === id && name
                  )
                }
                link="/"
              />
            ))}
      </div>
    </Layout>
  );
};

export default MentalHealthPage;
