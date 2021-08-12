import SiteHeader from "~/components/SiteHeader";
import Footer from "~/components/Footer";
import { useState } from "react";
import { useRouter } from "next/router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
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
            router.push("/AdminRules");
          } else {
            router.push("/");
          }
        }
      });
  };

  return (
    <div className="min-h-screen relative flex flex-col justify-between align-center">
      <SiteHeader />
      <form
        onSubmit={handleLogin}
        className="flex flex-col w-1/4 h-2/4 p-12 mx-auto justify-center align-center shadow-lg border rounded-md border-none"
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
          value="Submit"
          className="w-2/4 m-3 self-center border rounded-md border-none"
        />
        {loginError ? <p style={{ color: "red" }}>{loginError}</p> : null}
      </form>
      <Footer />
    </div>
  );
};

export default Login;
