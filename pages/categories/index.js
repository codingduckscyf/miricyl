import useSWR from "swr";
import Layout from "~/components/Layout/Layout";
import Header from "~/components/Header";
import headerImgCat from "../../public/images/headerImgCat.jpeg";
import SubCatCard from "~/components/SubCatCard";

const Categories = () => {
  const { data: categories } = useSWR("/api/issues");
  return (
    <Layout title="Categories">
      <Header
        backgroundColor="white"
        imgSrc={headerImgCat}
        imgAlt="Woman's hand"
        title=" Mental Health"
        caption={
          "Miricyl helps you find key, informative resources to guide you on your mental health journey"
        }
      />
      <div className="flex flex-col md:flex-row md:flex-wrap justify-end items-center md:justify-between my-32">
        {categories &&
          categories.data.map((category) => (
            <SubCatCard
              key={category.id}
              backgroundColor={
                category.category_id === 1
                  ? "red"
                  : category.category_id === 2
                  ? "blue"
                  : "green"
              }
              title={category.name}
              category={
                category.category_id === 1
                  ? "Depression"
                  : category.category_id === 2
                  ? "Life issues"
                  : "Sex & relationships"
              }
              link="/"
            />
          ))}
      </div>
    </Layout>
  );
};
export default Categories;

// {
//   categories &&
//     categories.data.map((category, index) => (
//       <li key={index}>{category.name}</li>
//     ));
// }
