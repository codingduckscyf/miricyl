import useSWR from "swr";
import Layout from "~/components/Layout/Layout";
import Header from "~/components/Header";
import headerImg from "../../public/images/woman's-hands.jpeg";

const Categories = () => {
  const { data } = useSWR("/api/categories");
  return (
    <Layout title="Categories">
      <Header
        backgroundColor="white"
        imgSrc={headerImg}
        imgAlt="Woman's hand"
        title=" Mental Health"
        caption={
          "Miricyl helps you find key, informative resources to guide you on your mental health journey"
        }
      />
      <h1 className="text-red-800 bg-blue-300 font-bold text-5xl p-32">
        Categories page.
      </h1>
      {data
        ? data.data.map((item, index) => (
            <li className="text-red-800 bg-blue-300 p-32" key={index}>
              {item.name}
            </li>
          ))
        : null}
    </Layout>
  );
};
export default Categories;
