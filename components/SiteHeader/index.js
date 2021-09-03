import { useState } from "react";
import Link from "next/link";
import Dropdown from "./Dropdown";
import CategoriesList from "./CategoriesList";
import { MdFavorite } from "react-icons/md";
import AdminDashboard from "../Admin/AdminDashboard";

const SiteHeader = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <header className="flex justify-between items-center p-3 bg-gray-50">
      <nav className="flex flex-col sm:flex-row justify-around items-center items-center mx-auto w-full md:max-w-8xl text-l md:text-xl">
        <div className="flex flex-row justify-between items-center mx-auto w-full">
          <Link href="/">
            <a className="pr-4 hover:text-blue-800 font-extrabold mt-2">
              Miricyl
            </a>
          </Link>
          <AdminDashboard />
          <div className="block sm:hidden">
            <button
              onClick={() => {
                setIsExpanded(!isExpanded);
              }}
              className="flex items-center px-3 py-2 border border-black rounded text-teal-200 border-black-400 hover:border-blue-800"
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
        </div>

        {isExpanded ? (
          <div className="flex flex-col justify-between shadow w-full p-8 my-8 bg-gray-200">
            <Link href="/favorites">
              <a className="mt-2 p-4 font-extrabold">Favorites</a>
            </Link>
            <CategoriesList />
            <div className="flex justify-between">
              <Link href="/about">
                <a className="p-4 font-extrabold">About</a>
              </Link>
            </div>
          </div>
        ) : (
          <div className="hidden sm:flex justify-between items-center w-full">
            <Dropdown />
            <Link href="/about">
              <a className="hover:text-blue-800 mt-2">About</a>
            </Link>
            <Link href="/favorites">
              <a>
                <MdFavorite className="text-4xl mx-8" />
              </a>
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default SiteHeader;
