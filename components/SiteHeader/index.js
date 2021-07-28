import { useState } from "react";
import Link from "next/link";
import Dropdown from "./Dropdown";

const SiteHeader = () => {
  const [test, setTest] = useState(false);
  // const [className, setClassName] = useState("flex");

  return (
    <header className="flex justify-between p-4 sm:p-8 bg-blue-400">
      <nav className="flex justify-between items-center mx-auto w-full md:max-w-8xl text-l md:text-xl">
        <div className="flex p-6">
          <Link href="/">
            {/* not sure about this */}
            <a className="pr-4 hover:text-blue-800 font-extrabold mt-2">
              Miricyl
            </a>
          </Link>
          <p className="mt-2 text-gray-500 ">Knowledge dashboard</p>
        </div>
        <div className="hidden sm:flex justify-around items-center p-6 w-1/2">
          <Dropdown />
          <Link href="/about">
            <a className="hover:text-blue-800 mt-2">About</a>
          </Link>
          <button
            type="button"
            className="inline-flex items-center p-2 md:p-3 border border-transparent rounded-lg shadow-sm text-white bg-blue-800 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 text-l md:text-xl"
          >
            Bookmark
          </button>
        </div>

        {/* <div className="hidden md:flex justify-around items-center p-6 w-1/2">
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
        </div> */}

        <div className="block sm:hidden">
          <button
            onClick={() => {
              console.log("you clicked me");
              setTest(!test);
            }}
            className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default SiteHeader;
