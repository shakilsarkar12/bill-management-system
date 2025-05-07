import React from "react";
import { BiHelpCircle, BiHome } from "react-icons/bi";
import { FaClipboardList, FaUser } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { IoMdNotifications } from "react-icons/io";
import { NavLink } from "react-router"; 

const ProfileSidebar = () => {
  return (
    <div className="min-h-screen p-4 sm:p-6 flex flex-col justify-start sticky top-16 sm:top-20 left-0 w-full md:w-64">
      <ul className="space-y-3 sm:space-y-4 text-gray-700 font-medium">
        <NavLink
          to="/profile/dashboard"
          className="profile flex items-center gap-3 px-4 py-2 hover:bg-gray-200 rounded-lg transition"
        >
          <BiHome className="text-xl sm:text-2xl" />
          <span className="hidden md:inline">Dashboard</span>
        </NavLink>
        <NavLink
          to="/profile/my-profile"
          className="profile flex items-center gap-3 px-4 py-2 hover:bg-gray-200 rounded-lg transition"
        >
          <FaUser className="text-xl sm:text-2xl" />
          <span className="hidden md:inline">Profile</span>
        </NavLink>
        <NavLink
          to="/profile/payment-history"
          className="profile flex items-center gap-3 px-4 py-2 hover:bg-gray-200 rounded-lg transition"
        >
          <FaClipboardList className="text-xl sm:text-2xl" />
          <span className="hidden md:inline">Payment History</span>
        </NavLink>
        <NavLink
          to="/profile/notifications"
          className="profile flex items-center gap-3 px-4 py-2 hover:bg-gray-200 rounded-lg transition"
        >
          <IoMdNotifications className="text-xl sm:text-2xl" />
          <span className="hidden md:inline">Notifications</span>
        </NavLink>
        <NavLink
          to="/profile/settings"
          className="profile flex items-center gap-3 px-4 py-2 hover:bg-gray-200 rounded-lg transition"
        >
          <FiSettings className="text-xl sm:text-2xl" />
          <span className="hidden md:inline">Settings</span>
        </NavLink>
        <NavLink
          to="/profile/help"
          className="profile flex items-center gap-3 px-4 py-2 hover:bg-gray-200 rounded-lg transition"
        >
          <BiHelpCircle className="text-xl sm:text-2xl" />
          <span className="hidden md:inline">Help</span>
        </NavLink>
      </ul>
    </div>
  );
};

export default ProfileSidebar;
