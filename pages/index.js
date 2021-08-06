import useSWR from "swr";
import Footer from "~/components/Footer";
import CalloutBox from "~/components/CalloutBox";
import Header from "~/components/Header";
import headerImgMain from "../public/images/headerImg.jpeg";
import SiteHeader from "~/components/SiteHeader";
import calloutImg from "../public/images/callOutBox.jpeg";
import CategoriesSelection from "~/components/CategorySelection";
import Categories from "./categories";
import HeaderConditionSection from "~/components/HeaderConditionSection";
import { useState } from "react";

const Index = () => {
  const { data: issuesCategories } = useSWR("/api/issues");
  const [searchInput, setSearchInput] = useState("");

  let filteredIssuesData =
    issuesCategories &&
    issuesCategories.data.filter(({ name, description, slug }) =>
      [name, description, slug].some((string) =>
        string.toLowerCase().includes(searchInput.toLocaleLowerCase())
      )
    );

  return (
    <div>
      <SiteHeader />
      <Header
        backgroundColor="white"
        imgSrc={headerImgMain}
        imgAlt="smiling girl"
        title="Guiding you through mental health resources"
        caption={
          "Miricyl helps you find key, informative resources to guide you on your mental health journey"
        }
        buttonCaption="View Categories"
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
      <HeaderConditionSection
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />
      <Categories issuesCategories={filteredIssuesData} />
      <Footer />
    </div>
  );
};

export default Index;
