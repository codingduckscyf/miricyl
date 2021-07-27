import "~/styles/index.css";
import { SWRConfig } from "swr";
import { fetcher } from "~/lib/fetcher";

export default function MyApp({ Component, pageProps }) {
  return (
    <SWRConfig
      value={{
        fetcher,
      }}
    >
      <main>
        <Component {...pageProps} />
      </main>
    </SWRConfig>
  );
}
