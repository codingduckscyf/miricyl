import Form from "~/components/Form";
import Layout from "~/components/Layout/Layout";

const AddContentPage = () => {
  const handleAddContentSubmit = async (data) => {
    const response = await fetch("/api/content", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log("submit", data, "response", response);
    return response;
  };

  //data for form
  const data = {
    title: "",
    description: "",
    content_type: "",
    img_url: "",
    video_url: "",
  };

  return (
    <Layout>
      <div>
        <h1 className="bg-yellow-400 p-32 text-6xl">Well hello again</h1>
        <Form data={data} submit={handleAddContentSubmit} />
      </div>
    </Layout>
  );
};

export default AddContentPage;
