import useSWR from "swr";
import SubCatCard from "~/components/SubCatCard";

const Categories = () => {
  const { data: categories } = useSWR("/api/issues");
  return (
    <div>
      <div className="flex flex-col md:flex-row md:flex-wrap justify-end items-center md:justify-between mb-20">
        {categories &&
          categories.data.map(({ id, category_id, name }) => (
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
                category_id === 1
                  ? "Depression"
                  : category_id === 2
                  ? "Life issues"
                  : "Sex & relationships"
              }
              link="/"
            />
          ))}
      </div>
    </div>
  );
};
export default Categories;
