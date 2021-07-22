import Footer from "~/components/Footer";
import Header from "~/components/Header";
import headerImg from "../public/images/headerImg.jpeg";
import Image from "next/image"

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
      <Footer />
    </div>
  );
};

export default Index;
