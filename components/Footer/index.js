import FooterList from "./FooterList";

const categories = ["Mental health", "Social and relationships", "Life Issues"];
const topics = ["Depression", "Anxiety", "Loneliness"];
const about = ["About Us", "Support"];
const social = ["Facebook", "Instagram", "Twitter"];

const Footer = () => {
  return (
    <footer className="bg-gray-200">
      <div>
        <div className="flex flex-col md:flex-row md:justify-around text-center">
          <FooterList listName="Categories" listItems={categories} />
          <FooterList listName="Topics" listItems={topics} />
          <FooterList listName="About Miricyl" listItems={about} />
          <FooterList listName="Social" listItems={social} />
        </div>
        <div className="text-gray-700 py-4 mt-7 text-center text-sm bg-gray-400 ">
          © Copyright {new Date().getFullYear()} Miricyl
        </div>
      </div>
    </footer>
  );
};

export default Footer;
