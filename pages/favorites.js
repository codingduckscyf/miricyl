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
      <div className="p-32">
        <h1 className="text-4xl">Your favorite items</h1>
        <Content
          contentTitle="Saved Videos"
          contentArray={videos}
          heartIconClickHandler={heartIconClickHandler}
          favorites={favorites}
        />
        <Content
          contentTitle="Saved Articles"
          contentArray={articles}
          heartIconClickHandler={heartIconClickHandler}
          favorites={favorites}
        />
      </div>
    </Layout>
  );
};

export default Favorites;
