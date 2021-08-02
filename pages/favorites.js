import Layout from "~/components/Layout/Layout";

const Favorites = () => {
  return (
    <Layout>
      <div className="bg-green-200 p-32">
        <h1 className="text-4xl">Your favorite items</h1>
        <div>
          <h3 className="text-2xl">Articles</h3>
          <h3 className="text-2xl">Videos</h3>
          <h3 className="text-2xl">Useful Links</h3>
        </div>
      </div>
    </Layout>
  );
};

export default Favorites;
