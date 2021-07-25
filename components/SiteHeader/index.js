import Link from "next/link";
import Dropdown from "./Dropdown";

const SiteHeader = () => {
  return (
    <header className="flex justify-between p-8 bg-gray-100">
      <nav className="flex justify-between items-center mx-auto w-full md:max-w-8xl">
        <div className="flex p-6">
          <Link href="/">
            {/* not sure about this */}
            <a className="px-4 hover:text-blue-800 font-extrabold mt-2 text-xl md:text-2xl">
              Miricyl
            </a>
          </Link>
          <p className="mt-2 text-gray-500 text-xl md:text-2xl">
            Knowledge dashboard
          </p>
        </div>
        <div className="flex justify-around items-center p-6 w-1/2">
          <Dropdown />
          <Link href="/about">
            <a className="hover:text-blue-800 mt-2 text-xl md:text-2xl">
              About
            </a>
          </Link>
          <button
            type="button"
            className="inline-flex items-center p-4 md:p-5 border border-transparent text-xs font-medium rounded-lg shadow-sm text-white bg-blue-800 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 text-base md:text-xl"
          >
            Bookmark
          </button>
        </div>
      </nav>
    </header>
  );
};

export default SiteHeader;
