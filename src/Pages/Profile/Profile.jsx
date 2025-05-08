import React from "react";
import ProfileSidebar from "../../Component/ProfileSidebar/ProfileSidebar";
import { Navigate, Outlet } from "react-router";

const MyProfile = () => {
  return (
    <div className="flex">
      <Navigate to="/profile/myprofile" />
      <div className="w-fit lg:w-96 bg-gray-200 sm:bg-gray-50 fixed top-16 -translate-x-12 opacity-0 hover:opacity-100 hover:translate-x-0 transition duration-500 sm:relative sm:top-0 sm:translate-x-0 sm:opacity-100 ">
        <ProfileSidebar />
      </div>
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default MyProfile;
