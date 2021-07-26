import Head from "next/head";
import Layout from "~/components/Layout/Layout";

const AboutPage = () => {
  return (
    <Layout title="about">
      <div>
        <h1 className="text-green-800 bg-green-300 font-bold text-5xl p-32">
          This is About page
        </h1>
      </div>
    </Layout>
  );
};

export default AboutPage;
