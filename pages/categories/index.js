import useSWR from "swr";

const Categories = () => {
  const { data } = useSWR("/api/categories");
  return (
    <div>
      <h2>Categories to be shown here</h2>
      {data
        ? data.data.map((item, index) => <li key={index}>{item.name}</li>)
        : null}
    </div>
  );
};
export default Categories;
