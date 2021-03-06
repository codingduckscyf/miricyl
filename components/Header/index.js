import Image from "next/image";
import Button from "../Buttons/Button";

const Header = ({
  backgroundColor,
  imgSrc,
  imgAlt,
  title,
  caption,
  buttonCaption,
}) => {
  return (
    <div
      className={`bg-${backgroundColor}-100 md:h-1/2 max-w-md mb-8 mx-auto overflow-hidden md:max-w-full`}
    >
      <div className="md:flex md:justify-between">
        <div className="p-8 lg:p-20 flex flex-col justify-around">
          <h2 className="font-bold tracking-wide text-3xl md:text-5xl">
            {title}
          </h2>
          <p className="mt-2 text-gray-500 text-xl md:text-2xl">{caption}</p>
          {buttonCaption && (
            <Button caption={buttonCaption} link={"#categories"} />
          )}
        </div>
        <div className="md:flex-shrink-0">
          <Image
            className="md:h-1/4 object-cover md:rounded-l-3xl"
            src={imgSrc}
            alt={imgAlt}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
