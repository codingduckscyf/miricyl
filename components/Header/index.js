import Image from "next/image";
import Button from "../Buttons/Button";


const handleClick = () => {
  console.log("Hello from buttons world");
};

const Header = ({ backgroundColor, imgSrc, imgAlt, title, caption }) => {
  return (
    <header
      className={
        "bg-" +
        backgroundColor +
        "-100 "
      }
    >
      <div className="flex justify-between">
        <div className="self-center mx-16 w-1/2">
          <h2 className="py-7 font-bold text-4xl md:text-8xl">{title}</h2>
          <p className="text-xl md:text-2xl text-gray-500">{caption}</p>
          <Button caption={"View Categories"} onClick={handleClick} />
        </div>
        <div className="md:flex-shrink-0 h-full">
          <Image className="rounded-l-3xl" src={imgSrc} alt={imgAlt} />
        </div>
      </div>
    </header>
  );
};

export default Header;
