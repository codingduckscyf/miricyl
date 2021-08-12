import { useRouter } from "next/router";
import useSWR from "swr";
import Form from "~/components/Form";
import Layout from "~/components/Layout/Layout";

const UpdateContent = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data: issueContent, error: issueContentError } = useSWR(
    `/api/content/${id}`
  ); // fetch content related to an issue

  const handleUpdateContent = async (data) => {
    const response = await fetch(`/api/content/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      router.push(`/issues/${data.relations}`);
    } else {
      setError(true);
    }
  };

  if (!issueContent && !issueContentError) {
    return <div>Loading...</div>;
  }

  if (!issueContent) {
    return <div>Not content found.</div>;
  }

  const data = {
    title: issueContent.data[0].title,
    description: issueContent.data[0].description,
    content_type: issueContent.data[0].content_type,
    img_url: issueContent.data[0].img_url,
    video_url: issueContent.data[0].video_url,
    relations: "",
  };

  return (
    <Layout>
      <div>
        <div className="text-center text-2xl text-purple-800 w-2/4 mx-auto font-bold mt-6">
          Make your changes and submit the form
        </div>
        <Form
          data={data}
          submit={handleUpdateContent}
          formTitle={"Update content form"}
        />
      </div>
    </Layout>
  );
};

export default UpdateContent;
