import React from 'react';
import { Link, NavLink } from 'react-router';
import logo from "../../assets/logo.png"

const Navbar = () => {
    const links = <>
    <NavLink className="navlink hover:text-info duration-300" to='/'>Home</NavLink>
    <NavLink className="navlink hover:text-info duration-300" to='/bill'>Bill</NavLink>
    <NavLink className="navlink hover:text-info duration-300" to='/profile'>Profile</NavLink>
    </>

    return (
      <div className='bg-gray-100 px-2 sm:px-5 md:px-12 lg:px-0'>
        <div className="navbar  lg:w-11/12 lg:mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow space-y-5"
              >
                {links}
              </ul>
            </div>
            <a className="flex items-center text-xl md:text-2xl text-accent font-semibold">
              <img className="w-10 md:w-16" src={logo} alt="" />
              Pay <span className="text-info">Bill</span>
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 space-x-10 text-lg font-semibold">
              {links}
            </ul>
          </div>
          <div className="navbar-end  sm:space-x-4 md:space-x-6">
            <Link to="/auth/signin" className="btn btn-sm md:btn-md btn-accent text-lg">
              Sign In
            </Link>
            <Link to="/auth/signup" className="btn btn-sm md:btn-md btn-info text-lg hidden sm:inline sm:pt-0.5 md:pt-1">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    );
};

export default Navbar;