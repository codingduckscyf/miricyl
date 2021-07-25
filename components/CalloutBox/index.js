import CalloutBoxButton from "./CalloutBoxButton";
import Image from "next/image";

const CalloutBox = ({
  heading,
  caption,
  imgUrl,
  imgAltText,
  buttonText,
  buttonLink,
}) => {
  return (
    <div className="h-auto max-w-md mx-auto bg-blue-100 md:max-w-full">
      <div className="md:flex md:justify-between">
        <div className="p-8 lg:p-20 flex flex-col justify-between">
          <h2 className="font-extrabold tracking-wide text-3xl md:text-6xl text-blue-800">
            {heading}
          </h2>
          <p className="mt-2 text-gray-500 text-xl md:text-2xl">{caption}</p>
          <CalloutBoxButton buttonLink={buttonLink} buttonText={buttonText} />
        </div>
        <div className="md:flex-shrink-0">
          <Image
            className="w-full object-cover md:w-full"
            src={imgUrl}
            alt={imgAltText}
          />
        </div>
      </div>
    </div>
  );
};

export default CalloutBox;
