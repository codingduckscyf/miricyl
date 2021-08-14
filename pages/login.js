import SiteHeader from "~/components/SiteHeader";
import Footer from "~/components/Footer";
import { useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { UserContext } from "./_app";
import * as yup from "yup";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required().min(6),
});

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const { storeUser, setIsLoggedIn } = useContext(UserContext);
  const router = useRouter();

  const user = {
    email: email,
    password: password,
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (schema.isValid(user)) {
      fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          if (data && data.error) {
            setLoginError(data.message);
          }
          if (data && data.token) {
            if (data.is_admin) {
              storeUser(data);
              setIsLoggedIn(true);
              router.push("/favorites");
            } else {
              router.push("/");
            }
          }
        });
    } else {
    }
  };

  return (
    <div className="min-h-screen relative flex flex-col justify-between align-center bg-gray-300">
      <SiteHeader />
      <form
        onSubmit={handleLogin}
        className="flex flex-col w-1/4 h-2/4 p-12 mx-auto bg-gray-200 justify-center align-center shadow-lg border rounded-md border-none"
      >
        <p className="text-center">Login</p>
        <label>Email</label>
        <input
          className="border rounded-sm border-none"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          className="border rounded-sm border-none"
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="submit"
          value="Sign In"
          className="w-2/4 m-3 self-center border rounded-md border-none"
        />
        {loginError ? <p style={{ color: "red" }}>{loginError}</p> : null}
      </form>
      <Footer />
    </div>
  );
};

export default Login;
