import { useRouter } from "next/router";
import useSWR from "swr";
const Post = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data } = useSWR("/api/categories/" + id);
  console.log(data);
  return <p>Post: {id}</p>;
};

export default Post;
