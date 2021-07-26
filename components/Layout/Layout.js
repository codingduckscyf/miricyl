import Footer from "../Footer";
import SiteHeader from "../SiteHeader";
import Head from "next/head";

const Layout = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <SiteHeader />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
