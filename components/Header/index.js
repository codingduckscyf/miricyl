import Image from "next/image";
import Button from "../Buttons/Button";

const Header = ({ pageHeader }) => {
  const { backgroundColour, imgSrc, imgAlt, title, caption } = pageHeader;
  return (
    <header>
      <div className="flex justify-between">
        <div className="self-center mx-16 w-1/2">
          <h2 className="py-7 font-bold text-8xl">{title}</h2>
          <p className=" text-2xl text-gray-500">{caption}</p>
          <Button caption={"View Categories"} />
        </div>
        <div className="md:flex-shrink-0 h-full">
          <Image className=" rounded-l-3xl" src={imgSrc} alt={imgAlt} />
        </div>
      </div>
    </header>
  );
};

export default Header;
