import Link from "next/link";

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

const CategoriesList = () => {
  return (
    <div>
      {categories.map((category) => (
        <Link href={category.link} key={category.id}>
          <a className="block hover:bg-gray-200 py-4">
            <h3 className="font-extrabold">{category.title}</h3>
            <p className="text-gray-500">{category.description}</p>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default CategoriesList;
