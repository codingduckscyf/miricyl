import Footer from "~/components/Footer";
import CalloutBox from "~/components/CalloutBox";
import Header from "~/components/Header";
import headerImg from "../public/images/headerImg.jpeg";
import calloutBoxImage from "../public/images/calloutBoxImage.jpg";

const Index = () => {
  return (
    <div>
      <Header
        backgroundColor="white"
        imgSrc={headerImg}
        imgAlt={"smiling girl"}
        title="Guiding you through mental health resources"
        caption={
          "Miricyl helps you find key, informative resources to guide you on your mental health journey"
        }
      />
      <CalloutBox
        heading="Mental health support for everyone"
        caption="Miricly’s knowledge base is a curated collection of wonderful content designed to support and aid everyone in their journey to better mental health."
        imgUrl={calloutBoxImage}
        imgAltText="smiling person"
        buttonText="Learn more about Miricyl's vision"
        buttonLink="/about"
      />
      <Footer />
    </div>
  );
};

export default Index;
