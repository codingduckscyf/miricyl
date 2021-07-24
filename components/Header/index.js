
import Button from "../Buttons/Button";

const handleClick = () => {
  console.log("Hello from buttons world");
};

const Header = ({ backgroundColor, imgSrc, imgAlt, title, caption }) => {
  return (
    <div
      className={
        "bg-" +
        backgroundColor +
        "-100 " +
        " md:h-1/2 max-w-md mx-auto overflow-hidden md:max-w-full"
      }
    >
      <div className="md:flex md:justify-between">
        <div className="p-8 lg:p-16">
          <h2 className="font-extrabold tracking-wide text-3xl md:text-6xl">
            {title}
          </h2>
          <p className="mt-2 text-gray-500 text-xl md:text-2xl">{caption}</p>
          <Button caption={"View Categories"} onClick={handleClick} />
        </div>
        <div className="md:flex-shrink-0">
          <img
            className="md:h-1/4 object-cover rounded-l-3xl"
            src={imgSrc}
            alt={imgAlt}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
