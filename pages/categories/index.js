import useSWR from "swr";

const Categories = () => {
  const { data } = useSWR("/api/categories");
  const test = data && JSON.stringify(data, null, 2);
  return (
    <div>
      <h2>Categories to be shown here</h2>
      {test.map(item, (index) => (
        <li key={index}>{item}</li>
      ))}
    </div>
  );
};
export default Categories;
