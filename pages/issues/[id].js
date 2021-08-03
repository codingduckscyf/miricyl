import Layout from "~/components/Layout/Layout";
import useSWR from "swr";
import { useRouter } from "next/dist/client/router";
import ContentCard from "~/components/ContentCard";
import IssueInfo from "~/components/IssueInfo";
import { useFavorite } from "~/lib/useLocalStorage";

const Issue = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data: issueContent, error: issueContentError } = useSWR(
    `/api/issues/${id}/content`
  ); // fetch content related to an issue
  const { data: issueInfo, error: issueInfoError } = useSWR(
    `/api/issues/${id}`
  );

<<<<<<< HEAD
=======
  const { heartIconClickHandler, favorites } = useFavorite();

>>>>>>> 6fbe010 (adds favorites page)
  if (
    (!issueInfo && !issueInfoError) ||
    (!issueContent && !issueContentError)
  ) {
    const [favorites, setFavorites] = useLocalStorage("favoriteContents", []);

    const heartIconClickHandler = (id) => {
      const newFavorites = [...favorites];
      const index = newFavorites.indexOf(id);
      if (index === -1) {
        newFavorites.push(id);
      } else {
        newFavorites.splice(index, 1);
      }
      setFavorites(newFavorites);
    };

    if (!issueInfo && issueInfoError) {
      return <div>Loading...</div>;
    }

    if (!issueInfo || !issueContent) {
      return <div>Not found.</div>;
    }

    return (
      <Layout>
        <IssueInfo
          issueTitle={issueInfo.data.name}
          issueDescription={issueInfo.data.description}
        />
        <ul className="flex flex-col sm:flex-row flex-wrap justify-between p-4 my-12">
          {issueContent.data.map(
            ({ id, img_url, title, content_type, description, video_url }) => (
              <ContentCard
                key={id}
                isLiked={favorites.includes(id)}
                imgSrc={img_url ?? "https://picsum.photos/100"}
                imgAlt={title}
                contentType={content_type}
                title={title}
                caption={description}
                link={
                  video_url ?? "https://en.wikipedia.org/wiki/Mental_health"
                }
                heartIconClickHandler={() => heartIconClickHandler(id)}
              />
            )
          )}
        </ul>
      </Layout>
    );
  }
};
export default Issue;
