import FooterList from "./FooterList";

const categories = ["Mental health", "Social and relationships", "Life Issues"];
const topics = ["Depression", "Anxiety", "Loneliness"];
const about = ["About Miricyl", "Support"];
const social = ["Facebook", "Instagram", "Twitter"];

const Footer = () => {
  return (
    <footer className="bg-gray-100 w-full">
      <div className="container mx-auto">
        <div className="flex justify-around">
          <FooterList listName="Categories" listItems={categories} />
          <FooterList listName="Topics" listItems={topics} />
          <FooterList listName="About" listItems={about} />
          <FooterList listName="Social" listItems={social} />
        </div>
        <p className="text-gray-500 pt-7 text-center pb-3 text-sm">
          Copyright {new Date().getFullYear()} Miricyl
        </p>
      </div>
    </footer>
  );
};

export default Footer;
