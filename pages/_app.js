import "~/styles/index.css";
import { SWRConfig } from "swr";
import { fetcher } from "~/lib/fetcher";
import { Provider } from "next-auth/client";
import { createContext, useState } from "react";
import { useEffect } from "react/cjs/react.development";

export const UserContext = createContext();

const UserContextProvider = (props) => {
  const [user, setUser] = useState({
    token: "",
    email: "",
    isAdmin: false,
  });
  const storeUser = (user) => {
    setUser({
      token: user.token,
      email: user.email,
      isAdmin: user.is_admin,
    });
  };
  const logout = () => {
    setUser({});
  };
  useEffect(() => {
    fetch("/api/auth/user")
      .then((res) => {
        res.json();
        console.log(res.json());
      })
      .then((data) => {
        storeUser(data);
        console.log(data);
      });
  }, []);
  return (
    <UserContext.Provider value={{ user, storeUser, setUser, logout }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default function MyApp({ Component, pageProps }) {
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
