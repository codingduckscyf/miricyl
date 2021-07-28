import { useRouter } from "next/router";
import Layout from "~/components/Layout/Layout";
import useSWR from "swr";
const Post = () => {
  const router = useRouter();
  const { slug } = router.query;
  const { data, error } = useSWR(slug ? "/api/categories/" + slug : undefined);

  if (!data && !error) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <Layout>Not found.</Layout>;
  }

  return (
    <Layout title={data.name}>
      <h1 className="text-red-800 bg-yellow-300 font-bold text-5xl p-32">
        Hey hey hey from {data.name} page!
      </h1>
    </Layout>
  );
};

export default Post;
