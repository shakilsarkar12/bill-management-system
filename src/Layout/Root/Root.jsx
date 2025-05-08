import React from "react";
import Navbar from "../../Component/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../../Component/Footer/Footer";

const Root = () => {
  return (
    <div>
      <Navbar />
      <main className="min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-80px)] mt-16 md:mt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Root;
