import CalloutBoxButton from "./CalloutBoxButton";

const CalloutBox = ({
  heading,
  caption,
  imgUrl,
  imgAltText,
  buttonText,

  buttonLink,
}) => {
  return (
    <div className="md:h-96 max-w-md mx-auto bg-blue-100 overflow-hidden md:max-w-full">
      <div className="md:flex md:justify-between">
        <div className="p-8 lg:p-16">
          <h2 className="font-extrabold tracking-wide text-3xl md:text-4xl text-blue-800">
            {heading}
          </h2>
          <p className="mt-2 text-gray-500">{caption}</p>
          <CalloutBoxButton buttonLink={buttonLink} buttonText={buttonText} />
        </div>
        <div className="md:flex-shrink-0 md:h-96">
          <img
            className="w-full object-cover md:h-full md:w-full"
            src={imgUrl}
            alt={imgAltText}
          />
        </div>
      </div>
    </div>
  );
};

export default CalloutBox;
