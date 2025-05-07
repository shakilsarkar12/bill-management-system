import React from "react";
import { Outlet } from "react-router";
import CategoriesBtn from "../../Component/CategoriesBtn/CategoriesBtn";
import { Navigate } from "react-router";

const Bill = () => {
  return (
    <div className="mt-12">
      <Navigate to="/bills/0"/>
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-10 text-gray-800">
        Pay Your Bills
      </h2>

      <CategoriesBtn/>
      <Outlet />
    </div>
  );
};

export default Bill;
