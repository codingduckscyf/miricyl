import Layout from "~/components/Layout/Layout";
import useSWR from "swr";
import { useFavorite } from "~/lib/useLocalStorage";
import Content from "~/components/Content";

const Favorites = () => {
  const { data: content, error } = useSWR(`/api/content`);
  const { heartIconClickHandler, favorites } = useFavorite();

  if (!content && !error) {
    return <div>Loading...</div>;
  }

  if (!content) {
    return <div>Not found.</div>;
  }

  const filtered = content.data.filter((contentItem) => {
    return favorites.includes(contentItem.id);
  });

  const videos = filtered.filter((el) => {
    return el.content_type === "video";
  });

  const articles = filtered.filter((el) => {
    return el.content_type === "article";
  });

  return (
    <Layout>
      <div className="p-32 font-bold text-center">
        <h1 className="text-4xl text-center">Your favorite items</h1>
        <h2 className="text-2xl">Saved Videos</h2>
        <Content
          contentArray={videos}
          heartIconClickHandler={heartIconClickHandler}
          favorites={favorites}
        />
        <h2 className="text-2xl">Saved Articles</h2>
        <Content
          contentArray={articles}
          heartIconClickHandler={heartIconClickHandler}
          favorites={favorites}
        />
      </div>
    </Layout>
  );
};

export default Favorites;
