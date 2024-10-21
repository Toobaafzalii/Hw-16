import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components/navbar";

export const MainLayout: React.FC = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <div className="w-full h-52 bg-slate-600 bg-gradient-to-t from-slate-500 rounded-t-full"></div>
    </>
  );
};
