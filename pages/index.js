import Footer from "~/components/Footer";
import Header from "~/components/Header";
import headerImg from "../public/images/headerImg.jpeg";
import Image from "next/image"

const Index = () => {
  return (
    <div>
      <Header pageHeader={pageHeader} />
      <Footer />
    </div>
  );
};

export default Index;
