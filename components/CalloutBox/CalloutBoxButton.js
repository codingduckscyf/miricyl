import Link from "next/link";

const CalloutBoxButton = ({ buttonLink, buttonText }) => {
  return (
    <Link href={buttonLink}>
      <a
        type="button"
        className="inline-flex items-center mt-8 px-2.5 py-3  border border-transparent text-xs font-medium rounded shadow-sm text-white bg-blue-800 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        {buttonText}
      </a>
    </Link>
  );
};

export default CalloutBoxButton;
