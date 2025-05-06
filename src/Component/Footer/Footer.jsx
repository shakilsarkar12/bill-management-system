import React from "react";
import { NavLink } from "react-router";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#1E293B] text-white pt-12 pb-6 mt-16">
      <div className="px-4 sm:px-8 md:px-12 lg:px-0 lg:w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
        <div>
          <div className="flex items-center text-2xl md:text-3xl font-bold mb-4">
            <img className="icon w-14 md:w-20" src={logo} alt="Logo" />
            Pay<span className="text-info">Bill</span>
          </div>
          <p className="text-base md:text-lg text-gray-300">
            Simplifying your utility payments, recharges, and money transfers —
            all in one secure platform.
          </p>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-4">Navigation</h4>
          <ul className="space-y-2 text-base md:text-lg text-gray-300">
            <li>
              <NavLink onClick={()=>window.scrollTo(0, 0)} to="/" className="hover:underline">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink onClick={()=>window.scrollTo(0, 0)} to="/bill" className="hover:underline">
                Bill
              </NavLink>
            </li>
            <li>
              <NavLink onClick={()=>window.scrollTo(0, 0)} to="/profile" className="hover:underline">
                Profile
              </NavLink>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-base md:text-lg text-gray-300">
            <li className="hover:underline cursor-pointer">Transfer Money</li>
            <li className="hover:underline cursor-pointer">Bill Payments</li>
            <li className="hover:underline cursor-pointer">Mobile Recharge</li>
            <li className="hover:underline cursor-pointer">Cash Out</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-4">Support</h4>
          <ul className="space-y-2 text-base md:text-lg text-gray-300">
            <li className="hover:underline cursor-pointer">FAQs</li>
            <li className="hover:underline cursor-pointer">Privacy Policy</li>
            <li className="hover:underline cursor-pointer">Terms of Service</li>
            <li className="hover:underline cursor-pointer">Contact Us</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-5 text-2xl text-gray-300">
            <a href="#">
              <FaFacebook className="hover:text-blue-500 transition" />
            </a>
            <a href="#">
              <FaTwitter className="hover:text-sky-400 transition" />
            </a>
            <a href="#">
              <FaLinkedin className="hover:text-blue-600 transition" />
            </a>
            <a href="#">
              <FaInstagram className="hover:text-pink-500 transition" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 text-center pt-4 text-sm md:text-base text-gray-400">
        © {new Date().getFullYear()} Pay Bill. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
