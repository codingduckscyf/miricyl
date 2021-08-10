import Link from "next/link";
import useSWR from "swr";

const CategoriesList = () => {
  const { data: categories } = useSWR("/api/categories");
  return (
    <div>
      {categories &&
        categories.data.map(({ id, slug, name }) => (
          <Link href={`/categories/${slug}`} key={id}>
            <a className="block hover:bg-gray-200 p-6">
              <h3 className="font-extrabold">{name}</h3>
            </a>
          </Link>
        ))}
    </div>
  );
};

export default CategoriesList;
