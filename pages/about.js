import Head from "next/head";
import Layout from "~/components/Layout/Layout";
import { useContext } from "react";
import { UserContext } from "./_app";

const AboutPage = () => {
  const { user } = useContext(UserContext);
  return (
    <Layout title="about">
      <div>
        <h1 className="text-green-800 bg-green-300 font-bold text-5xl p-32">
          {`This is About ${user.email}`}
        </h1>
      </div>
    </Layout>
  );
};

export default AboutPage;
