import Footer from "~/components/Footer";
import CalloutBox from "~/components/CalloutBox";

const Index = () => {
  return (
    <div>
      <h2>Welcome to NextJS!</h2>
      <CalloutBox
        heading="Mental health support for everyone"
        caption="Miricly’s knowledge base is a curated collection of wonderful content designed to support and aid everyone in their journey to better mental health."
        imgUrl="https://ichef.bbci.co.uk/childrens-responsive-ichef-ck/400xn/amz/cbbc/bp-duckling.jpg"
        imgAltText="duckling"
        buttonText="Learn more about Miricyl's vision"
        buttonLink="/about"
      />
      <Footer />
    </div>
  );
};

export default Index;
