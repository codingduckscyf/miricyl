import Link from "next/link";

const CalloutBoxButton = ({ buttonLink, buttonText }) => {
  return (
    <Link href={buttonLink}>
      <a
        type="button"
        className="inline-flex items-center px-8 py-4 border border-transparent text-sm md:text-xl font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-10"
      >
        {buttonText}
      </a>
    </Link>
  );
};

export default CalloutBoxButton;
