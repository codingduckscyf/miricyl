import "~/styles/index.css";
import { SWRConfig } from "swr";
import { fetcher } from "~/lib/fetcher";
import { Provider } from "next-auth/client";

export default function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <SWRConfig value={{ fetcher }}>
        <main>
          <Component {...pageProps} />
        </main>
      </SWRConfig>
    </Provider>
  );
}
