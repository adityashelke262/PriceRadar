import react from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar />

      <main className="page-content">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;