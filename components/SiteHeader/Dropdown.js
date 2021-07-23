import Link from "next/link";
import { useState } from "react";

// temp thing - delete later
const categories = [
  {
    id: 1,
    title: "Mental Health",
    description: "Learn about tips, mental health issues",
    link: "/mental-health",
  },
  {
    id: 2,
    title: "Life Issues",
    description: "Learn about life issues, product updates and company culture",
    link: "/life-issues",
  },
  {
    id: 3,
    title: "Social & Relationships",
    description:
      "Learn about social and relationships issues, product updates and company culture",
    link: "/social-relationships",
  },
];

const Dropdown = () => {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <div class="dropdown relative inline-block">
      <button
        onClick={() => setIsHidden(!isHidden)}
        className="hover:text-blue-800"
      >
        Categories
      </button>
      <div
        className={
          isHidden
            ? "dropdown-content hidden absolute w-96 bg-gray-50 z-10 shadow p-8 my-8 border border-gray-200 rounded"
            : "dropdown-content block absolute w-96 bg-gray-50 z-10 shadow p-8 my-8 border border-gray-200 rounded"
        }
      >
        {categories.map((category) => (
          <Link href={category.link} key={category.id}>
            <a className="block p-6 hover:bg-gray-200">
              <h3 className="font-extrabold">{category.title}</h3>
              <p className="text-gray-500">{category.description}</p>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
