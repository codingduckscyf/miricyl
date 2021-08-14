import Link from "next/link";
import { useContext } from "react";
import { UserContext } from "~/pages/_app";

const Login = ({ link }) => {
  const { logout } = useContext(UserContext);
  const signOut = () => {
    fetch("/api/auth/logout")
      .then((res) => res.json())
      .then(({ message }) => {
        if (message) {
          logout();
        }
      });
  };

  return (
    <Link href={link}>
      <a className="p-2 self-center">
        <button
          type="button"
          className="bg-blue-500 hover:bg-blue-700 text-white text-sm px-2 py-1 rounded border-none rounded"
          onClick={signOut}
        >
          Logout
        </button>
      </a>
    </Link>
  );
};

export default Login;
