import { useRouter } from "next/router";
import { useState, useContext, useEffect } from "react";
import Form from "~/components/Form";
import Layout from "~/components/Layout/Layout";
import { UserContext } from "./_app";

const AddContentPage = () => {
  const { user } = useContext(UserContext);
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

  useEffect(() => {
    if (!user.isAdmin) {
      router.push("/");
    }
  }, [user, router]);
  if (!user.isAdmin) {
    return <div>Loading</div>;
  }
  return (
    <Layout>
      <div>
        <h1 className="text-center text-2xl text-purple-800 w-2/4 mx-auto font-bold mt-6">
          To add new content for mental health issues just fill out the form
          below and submit it
        </h1>
        {error && (
          <h1 className="text-center text-2xl text-red-600">
            Please check your form
          </h1>
        )}
        <Form
          data={data}
          submit={handleAddContentSubmit}
          formTitle="Add content form"
        />
      </div>
    </Layout>
  );
};

export default AddContentPage;
