import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components/navbar";

export const MainLayout: React.FC = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
