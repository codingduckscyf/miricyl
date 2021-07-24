import Footer from "~/components/Footer";
import CalloutBox from "~/components/CalloutBox";
import Header from "~/components/Header";
import headerImg from "../public/images/headerImg.jpeg";
import SiteHeader from "~/components/SiteHeader";
import calloutImg from "../public/images/callOutBox.jpeg";

const Index = () => {
  return (
    <div>
      <SiteHeader />
      <Header
        backgroundColor="white"
        imgSrc="https://images.unsplash.com/photo-1548142813-c348350df52b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2135&q=80"
        imgAlt={"smiling girl"}
        title="Guiding you through mental health resources"
        caption={
          "Miricyl helps you find key, informative resources to guide you on your mental health journey"
        }
      />
      <CalloutBox
        heading="Mental health support for everyone"
        caption="Miricly’s knowledge base is a curated collection of wonderful content designed to support and aid everyone in their journey to better mental health."
        imgUrl={calloutImg}
        imgAltText="Smiling man"
        buttonText="Learn more about Miricyl's vision"
        buttonLink="/mental-health"
      />
      <Footer />
    </div>
  );
};

export default Index;
