import Layout from "~/components/Layout/Layout";

const AboutPage = () => {
  return (
    <Layout title="about">
      <div className="container mx-auto p-20 bg-green-300">
        <style jsx>{`
          .container {
            background-image: url(https://images.unsplash.com/photo-1509909756405-be0199881695?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2600&q=80);
            background-repeat: no-repeat;
            background-size: cover;
            width: 100vw;
          }
        `}</style>
        <div className="bg-gray-300 bg-opacity-80 text-gray-900 md:px-20 px-18 py-6 border rounded-xl">
          <h1 className="text-6xl my-8 text-green-900 font-extrabold text-center">
            Our Vision
          </h1>
          <p className=" text-5xl my-4">
            Our vision is for a world free from mental illness and the stigma
            attached. We aim to fund research and campaign for infants,
            children, young people and their families affected by mental
            illness.
          </p>
          <p className="text-3xl">
            Taking the amount of charitable funding for cancer and a World
            Health Organisation measure for the impact of mental health on young
            people, the UK should be funding over £100,000,000 of charitably
            funded research into children and young people’s mental health.
            Currently, even including government research, it is less than half
            this. Help us change this. Let’s create a miracle for mental health.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
