import Link from "next/link";

const Button = ({ caption, link }) => {
  return (
    <Link href={link} className="items-center">
      <a>
        <button
          type="button"
          className="inline-flex items-center mt-8 p-4 md:p-5 border border-transparent text-xs font-medium rounded-lg shadow-sm text-white bg-blue-800 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 text-base md:text-xl"
        >
          {caption}
        </button>
      </a>
    </Link>
  );
};

export default Button;
