import useSWR from "swr";
import SubCatCard from "~/components/SubCatCard";

const Categories = ({ issuesCategories }) => {
  const { data: categories } = useSWR("/api/categories");

  return (
    <div>
      <div className="flex flex-col md:flex-row md:flex-wrap justify-end items-center md:justify-between mb-20 sm:mx-12">
        {issuesCategories &&
          issuesCategories.map(({ id, category_id, name }) => (
            <SubCatCard
              key={id}
              backgroundColor1={
                category_id === 1
                  ? "yellow"
                  : category_id === 2
                  ? "green"
                  : category_id === 3
                  ? "indigo"
                  : "indigo"
              }
              backgroundColor2={
                category_id === 1
                  ? "yellow"
                  : category_id === 2
                  ? "green"
                  : category_id === 3
                  ? "indigo"
                  : "indigo"
              }
              title={name}
              category={
                categories &&
                categories.data.map(
                  ({ name, id }) => category_id === id && name
                )
              }
              link={`issues/${id}`}
            />
          ))}
      </div>
    </div>
  );
};
export default Categories;
