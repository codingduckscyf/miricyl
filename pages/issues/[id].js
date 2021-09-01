import Layout from "~/components/Layout/Layout";
import useSWR from "swr";
import { useRouter } from "next/dist/client/router";
import Content from "~/components/Content";
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

  const { heartIconClickHandler, favorites } = useFavorite();

  if (
    (!issueInfo && !issueInfoError) ||
    (!issueContent && !issueContentError)
  ) {
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
      <Content
        contentArray={issueContent.data}
        heartIconClickHandler={heartIconClickHandler}
        favorites={favorites}
      />
    </Layout>
  );
};

export default Issue;
