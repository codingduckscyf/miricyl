import { useContext, useState } from "react";
import Logout from "../Buttons/Logout";
import { UserContext } from "~/pages/_app";
import Link from "next/dist/client/link";

const AdminDashboard = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { user } = useContext(UserContext);

  return user.email ? (
    <div className="dropdown relative bg-gray-50 mr-24">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="bg-gray-50 text-black font-bold px-5 py-1 border border-none rounded text-md"
      >
        Admin Dashboard
      </button>
      {isExpanded ? (
        <div className="block absolute z-100 flex flex-col justify-center items-left bg-gray-50 p-2 w-full">
          <hr />
          <p className="text-lg p-2 text-blue">
            You are logged in as
            <br />
            <span className="font-bold">{user.email.split("@")[0]}</span>
          </p>
          <hr />
          <Link href="/add-content">
            <a className="text-sm p-2 font-bold text-lg">Add Content</a>
          </Link>
          <hr />
          <Logout link="/" />
        </div>
      ) : null}
    </div>
  ) : null;
};

export default AdminDashboard;
