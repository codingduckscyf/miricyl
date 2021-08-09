import Link from "next/link";
import useSWR from "swr";

const CategoriesList = () => {
  const { data: categories } = useSWR("/api/categories");
  return (
    <div className="border rounded-md border-none overflow-hidden">
      {categories.map((category) => (
        <Link href={category.link} key={category.id}>
          <a className="block hover:bg-gray-200 p-6">
            <h3 className="font-extrabold">{category.title}</h3>
            <p className="text-gray-500">{category.description}</p>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default CategoriesList;
