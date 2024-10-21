import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const Navbar: React.FC = () => {
  const navigator = useNavigate();

  const onClickHome = () => {
    navigator("/");
  };

  return (
    <nav className="w-[98%] flex justify-center items-center gap-x-6 lg:gap-x-16 bg-slate-600 bg-gradient-to-b from-slate-400  py-3 text-xl font-semibold rounded-b-full mx-auto shadow-lg text-gray-50">
      <button
        className="hover:underline  hover:shadow-white shadow-inner rounded-3xl px-3 py-1"
        onClick={onClickHome}
      >
        HOME
      </button>
      <Link to={"/posts"}>
        <button className="hover:underline hover:shadow-white shadow-inner rounded-3xl px-3 py-1">
          POSTS
        </button>
      </Link>
      <Link to={"/users"}>
        <button className="hover:underline  hover:shadow-white shadow-inner rounded-3xl px-3 py-1">
          USERS
        </button>
      </Link>
    </nav>
  );
};
