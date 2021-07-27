import CalloutBox from "~/components/CalloutBox";
import Header from "~/components/Header";
import headerImg from "../public/images/headerImg.jpeg";
import calloutImg from "../public/images/callOutBox.jpeg";
import CategoriesSelection from "~/components/CategorySelection";
import useSWR from "swr";
import Layout from "~/components/Layout/Layout";

const Index = () => {
  const { data } = useSWR("/api/categories");
  const { data: issues } = useSWR("/api/issues");
  return (
    <Layout title="home">
      <div>
        <Header
          backgroundColor="white"
          imgSrc={headerImg}
          imgAlt="smiling girl"
          title="Guiding you through mental health resources"
          caption={
            "Miricyl helps you find key, informative resources to guide you on your mental health journey"
          }
        />
        <CategoriesSelection />
        <CalloutBox
          heading="Mental health support for everyone"
          caption="Miricly’s knowledge base is a curated collection of wonderful content designed to support and aid everyone in their journey to better mental health."
          imgUrl={calloutImg}
          imgAltText="Smiling man"
          buttonText="Learn more about Miricyl's vision"
          buttonLink="/mental-health"
        />
      </div>
    </Layout>
  );
};

export default Index;
