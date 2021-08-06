import { useRouter } from "next/router";
import { useState } from "react";
import Form from "~/components/Form";
import Layout from "~/components/Layout/Layout";

const AddContentPage = () => {
  const router = useRouter();
  const [error, setError] = useState(false);

  const handleAddContentSubmit = async (data) => {
    setError(false);
    const response = await fetch("/api/content", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      router.push(`/issues/${data.relations[0].id}`);
    } else {
      setError(true);
    }
  };

  //data for form
  const data = {
    title: "",
    description: "",
    content_type: "",
    img_url: "",
    video_url: "",
    relations: [],
  };

  return (
    <Layout>
      <div>
        {error && <h1>Please check your form</h1>}

        <h1 className="bg-yellow-400 p-32 text-6xl">Well hello again</h1>
        <Form data={data} submit={handleAddContentSubmit} />
      </div>
    </Layout>
  );
};

export default AddContentPage;
