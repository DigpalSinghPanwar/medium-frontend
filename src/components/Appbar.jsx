import { Avatar } from "./BlogCard";
import { useNavigate } from "react-router-dom";

export const Appbar = () => {
  const navigate = useNavigate();
  const name = localStorage.getItem("name") || "Anonymous";

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userid");
    localStorage.removeItem("name");
    navigate("/");
  };

  return (
    <div className="border-b items-center flex justify-between px-10 py-4">
      <div>
        <button
          onClick={() => navigate("/blogs")}
          className="flex flex-col justify-center cursor-pointer"
        >
          Medium
        </button>
      </div>
      <div className="min-w-64 flex justify-between">
        <button
          onClick={() => navigate("/publish")}
          type="button"
          className="mr-4 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 "
        >
          New
        </button>
        <span className="logout">
          <Avatar size={"big"} name={name} />
        </span>
        <button
          onClick={logout}
          type="button"
          className="mr-4 text-white bg-black hover:bg-slate-950 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-md text-sm px-5 py-2.5 text-center me-2 mb-2 "
        >
          logout
        </button>
      </div>
    </div>
  );
};
