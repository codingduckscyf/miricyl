import "~/styles/index.css";
import { SWRConfig } from "swr";
import { fetcher } from "~/lib/fetcher";
import { Provider } from "next-auth/client";
import { createContext, useState } from "react";

export const UserContext = createContext();

export default function MyApp({ Component, pageProps }) {
  const UserContextProvider = (props) => {
    const [user, setUser] = useState({ email: "Anything" });
    const storeUser = (user) => {
      setUser({
        token: token,
        email: user.email,
        isAdmin: user.is_admin,
      });
    };

    const logout = () => {
      setUser({});
    };
    return (
      <UserContext.Provider value={{ user, storeUser, logout }}>
        {props.children}
      </UserContext.Provider>
    );
  };

  return (
    <UserContextProvider>
      <Provider session={pageProps.session}>
        <SWRConfig value={{ fetcher }}>
          <main>
            <Component {...pageProps} />
          </main>
        </SWRConfig>
      </Provider>
    </UserContextProvider>
  );
}
