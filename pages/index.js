import Footer from "~/components/Footer";
import CalloutBox from "~/components/CalloutBox";

// Button Link / onClick function
// Button Text
// Caption /
// Heading Text /
// Image Url /
// Image Alt Tag /

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
        buttonClickHandler={() =>
          console.log(`Learn more about Miricyl's vision was clicked!`)
        }
      />
      <Footer />
    </div>
  );
};

export default Index;
