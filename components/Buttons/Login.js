import Link from "next/link";

const Login = ({ link }) => {
  return (
    <Link href={link}>
      <a>
        <button
          type="button"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Login
        </button>
      </a>
    </Link>
  );
};

export default Login;
