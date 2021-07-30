import useSWR from "swr";
import SubCatCard from "~/components/SubCatCard";

const Categories = () => {
  const { data: issuesCategories } = useSWR("/api/issues");
  const { data: categories } = useSWR("/api/categories");
  return (
    <div>
      <div className="flex flex-col md:flex-row md:flex-wrap justify-end items-center md:justify-between mb-20">
        {issuesCategories &&
          issuesCategories.data.map(({ id, category_id, name }) => (
            <SubCatCard
              key={id}
              backgroundColor={
                category_id === 1
                  ? "red"
                  : category_id === 2
                  ? "pink"
                  : category_id === 3
                  ? "purple"
                  : "blue"
              }
              title={name}
              category={
                categories &&
                categories.data.map(
                  ({ name, id }) => category_id === id && name
                )
              }
              link="/"
            />
          ))}
      </div>
    </div>
  );
};
export default Categories;
