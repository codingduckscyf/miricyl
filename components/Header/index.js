import Image from "next/image";
import SubCatCard from "../ Subcategory Card/SubCatCard";
import Button from "../Buttons/Button";


const dummyCategories = [
  "Depression",
  "Anxiety",
  "Addictions",
  "Anger",
  "Eating problems",
];

const handleClickCategories = () => {
    dummyCategories.map(category => { 
        console.log(category)
    })
};

const Header = ({ backgroundColour, imgSrc, imgAlt, title, caption }) => {
  return (
      <header style={{ backgroundColor: { backgroundColour } }}>
      <div className="flex justify-between">
        <div className="self-center mx-16 w-1/2">
          <h2 className="py-7 font-bold text-4xl md:text-8xl">{title}</h2>
          <p className="text-xl md:text-2xl text-gray-500">{caption}</p>
          <Button caption={"View Categories"} onClick={handleClickCategories} />
        </div>
        <div className="md:flex-shrink-0 h-full">
          <Image className="rounded-l-3xl" src={imgSrc} alt={imgAlt} />
        </div>
      </div>
    </header>
  );
};

export default Header;
