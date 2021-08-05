import Layout from "~/components/Layout/Layout";
import useSWR from "swr";
import { useRouter } from "next/dist/client/router";
import ContentCard from "~/components/ContentCard";
import IssueInfo from "~/components/IssueInfo";

const Issue = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data: issueContent, error: issueContentError } = useSWR(
    `/api/issues/${id}/content`
  ); // fetch content related to an issue
  const { data: issueInfo, error: issueInfoError } = useSWR(
    `/api/issues/${id}`
  );

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
      <ul className="flex flex-col sm:flex-row flex-wrap justify-between p-4 my-12">
        {issueContent.data.map((issue) => (
          <ContentCard
            key={issue.id}
            imgSrc={issue.img_url ?? "https://picsum.photos/100"}
            imgAlt={issue.title}
            contentType={issue.content_type}
            title={issue.title}
            caption={issue.description}
            link={
              issue.video_url ?? "https://en.wikipedia.org/wiki/Mental_health"
            }
          />
        ))}
      </ul>
    </Layout>
  );
};

export default Issue;
