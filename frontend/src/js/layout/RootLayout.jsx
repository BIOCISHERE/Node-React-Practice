import React from "react";
import Navbar from "../component/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../component/Footer";

const RootLayout = () => {
  return (
    <div className="container-fluid">
      <Navbar />
      <div className="container-fluid">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default RootLayout;
