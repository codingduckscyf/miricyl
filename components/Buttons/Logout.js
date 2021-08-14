import Link from "next/link";
import { useContext } from "react";
import { UserContext } from "~/pages/_app";

const Login = ({ link }) => {
  const { setIsLoggedIn, logout } = useContext(UserContext);
  const signOut = () => {
    fetch("/api/auth/logout")
      .then((res) => res.json())
      .then(({ message }) => {
        if (message) {
          logout();
          setIsLoggedIn(false);
        }
      });
  };

  return (
    <Link href={link}>
      <a>
        <button
          type="button"
          className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-1 rounded"
          onClick={signOut}
        >
          Logout
        </button>
      </a>
    </Link>
  );
};

export default Login;
