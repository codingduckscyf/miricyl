import Layout from "~/components/Layout/Layout";
import "~/styles/index.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
