import { useRouter } from "next/router";
import { useState } from "react";
import Form from "~/components/Form";
import Layout from "~/components/Layout/Layout";

const AddContentPage = () => {
  const router = useRouter();
  const [error, setError] = useState(false);

  // send data obj to api/content
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

    // if response ok redirect to issue page
    if (response.ok) {
      router.push(`/issues/${data.relations}`);
    } else {
      setError(true);
    }
  };

  //data obj for the form
  const data = {
    title: "",
    description: "",
    content_type: "",
    img_url: "",
    video_url: "",
    relations: "",
  };

  return (
    <Layout>
      <div>
        <h1 className="text-center text-2xl px-32">
          To add new content for mental health issues just fill out the form
          below and submit it
        </h1>
        {error && (
          <h1 className="text-center text-2xl text-red-600">
            Please check your form
          </h1>
        )}
        <Form data={data} submit={handleAddContentSubmit} />
      </div>
    </Layout>
  );
};

export default AddContentPage;
