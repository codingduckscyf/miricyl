import { useState } from "react";
import CategoriesList from "./CategoriesList";

const Dropdown = () => {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <div className="dropdown relative inline-block">
      <button
        onClick={() => setIsHidden(!isHidden)}
        className="hover:text-blue-800 mt-2 text-l md:text-xl"
      >
        Categories
      </button>
      <div
        className={`${
          isHidden ? "hidden" : "block"
        } absolute w-96 bg-gray-50 z-10`}
      >
        <CategoriesList />
      </div>
    </div>
  );
};

export default Dropdown;
