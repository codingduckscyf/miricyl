import Footer from "~/components/Footer";
import Header from "~/components/Header";
import headerImg from "../public/images/headerImg.jpeg";
import Image from "next/image"

const pageHeader = {
  backgroundColour: "yellow",
  imgSrc: headerImg,
  imgAlt: "girl on a beach",
  title: "Guiding you through mental health resources.",
  caption:
    "Miricyl helps you find key, informative resources to guide you on your mental health journey",
};

const Index = () => {
  return (
    <div>
      <Header pageHeader={pageHeader} />
      <Footer />
    </div>
  );
};

export default Index;
