import react from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar />

      <main style={{ paddingTop: "90px" }}>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;