import useSWR from "swr";
import SubCatCard from "~/components/SubCatCard";
import getColorForCategoryId from "~/lib/getColorForCategoryId";
import convertSlugToTitle from "~/lib/convertSlugToTitle";
const Categories = () => {
  const { data: issuesCategories } = useSWR("/api/issues");

  return (
    <div>
      <div className="flex flex-col md:flex-row md:flex-wrap justify-end items-center md:justify-between mb-20 sm:mx-12">
        {issuesCategories &&
          issuesCategories.data.map(({ id, category_id, name, slug }) => (
            <SubCatCard
              key={id}
              backgroundColor={getColorForCategoryId(category_id)}
              title={name}
              category={convertSlugToTitle(slug)}
              link={`issues/${id}`}
            />
          ))}
      </div>
    </div>
  );
};
export default Categories;
