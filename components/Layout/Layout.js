import Footer from "../Footer";
import SiteHeader from "../SiteHeader";

const Layout = ({ title, children }) => {
  return (
    <>
      <SiteHeader />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
