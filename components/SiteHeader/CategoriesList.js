import Link from "next/link";
import useSWR from "swr";
import convertSlugToTitle from "~/lib/convertSlugToTitle";

const CategoriesList = () => {
  const { data: categories } = useSWR("/api/categories");
  return (
    <div>
      {categories &&
        categories.data.map(({ id, slug }) => (
          <Link href={`/categories/${slug}`} key={id}>
            <a className="block hover:bg-gray-200 p-4">
              <h3 className="font-extrabold">{convertSlugToTitle(slug)}</h3>
            </a>
          </Link>
        ))}
    </div>
  );
};

export default CategoriesList;
