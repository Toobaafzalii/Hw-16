import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const Navbar: React.FC = () => {
  const navigator = useNavigate();

  const onClickHome = () => {
    navigator("/");
  };

  return (
    <nav className="w-full flex justify-around items-center bg-amber-300 py-2 text-xl font-semibold ">
      <button onClick={onClickHome}>HOME</button>
      <Link to={"/posts"}>
        <button>POSTS</button>
      </Link>
      <Link to={"/users"}>
        <button>USERS</button>
      </Link>
    </nav>
  );
};
