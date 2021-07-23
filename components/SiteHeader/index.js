import Link from "next/link";
import Dropdown from "./Dropdown";

const SiteHeader = () => {
  return (
    <header className="flex justify-between p-8">
      <nav className="flex justify-between items-center mx-auto w-full md:max-w-8xl">
        <div className="flex p-6">
          <Link href="/">
            {/* not sure about this */}
            <a className="px-4 hover:text-blue-800 font-extrabold">Miricyl</a>
          </Link>
          <p className="text-gray-600">Knowledge dashboard</p>
        </div>
        <div className="flex justify-around items-center p-6 w-1/2">
          <Dropdown />
          <Link href="/about">
            <a className="hover:text-blue-800">About</a>
          </Link>
          <button
            type="button"
            className="inline-flex items-center px-2.5 py-3 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-blue-800 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Bookmark
          </button>
        </div>
      </nav>
    </header>
  );
};

export default SiteHeader;
