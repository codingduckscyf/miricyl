import Layout from "~/components/Layout/Layout";
import useSWR from "swr";
import { useFavorite } from "~/lib/useLocalStorage";
import Content from "~/components/Content";
import favorite from "../public/images/favorite.jpeg";
import Header from "~/components/Header";

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
      <Header
        backgroundColor="blue"
        imgSrc={favorite}
        imgAlt="pile of books"
        title="My favourite items"
        caption={""}
      />
      <div className="font-bold text-center">
        <Content
          contentTitle="Videos"
          contentArray={videos}
          heartIconClickHandler={heartIconClickHandler}
          favorites={favorites}
        />
        <Content
          contentTitle="Articles"
          contentArray={articles}
          heartIconClickHandler={heartIconClickHandler}
          favorites={favorites}
        />
      </div>
    </Layout>
  );
};

export default Favorites;
