import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import logo from "../../assets/logo.png";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import { toast } from "react-toastify";

const Navbar = () => {
  const links = (
    <>
      <NavLink className="navlink hover:text-info duration-300" to="/">
        Home
      </NavLink>
      <NavLink className="navlink hover:text-info duration-300" to="/bills">
        Bill
      </NavLink>
      <NavLink className="navlink hover:text-info duration-300" to="/profile">
        Profile
      </NavLink>
    </>
  );

  const { user, signOutUser, setUser, balence } = useContext(AuthContext);

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        toast.warn("Sign-out successful.");
        setUser(null);
      })
      .catch((error) => {
        toast.warn(error);
      });
  };

  return (
    <div className="bg-gray-100/90 backdrop-blur-md  px-2 sm:px-5 md:px-12 lg:px-0 w-screen fixed top-0 left-0 z-50">
      <div className="navbar  lg:w-11/12 lg:mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="lg:hidden">
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
          <div className="flex items-center text-2xl md:text-3xl text-accent font-semibold">
            <img className="icon w-10 md:w-16" src={logo} alt="" />
            Pay <span className="text-info">Bill</span>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-10 text-lg font-semibold">
            {links}
          </ul>
        </div>
        <div className="navbar-end  sm:space-x-4 md:space-x-6">
          {user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={user.photoURL}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-4 shadow space-y-4"
              >
                <h2 className="text-lg font-medium">
                  Current Balance:{" "}
                  <span className="text-accent">{balence} BDT</span>
                </h2>
                <button
                  onClick={handleSignOut}
                  className="btn btn-sm md:btn-md btn-accent text-base md:text-lg  text-white"
                >
                  Log out
                </button>
              </ul>
            </div>
          ) : (
            <>
              <Link
                to="/auth/signin"
                className="btn btn-sm md:btn-md btn-accent text-base md:text-lg  text-white"
              >
                Sign In
              </Link>
              <Link
                to="/auth/signup"
                className="btn btn-sm md:btn-md btn-info text-base md:text-lg text-white hidden sm:flex"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
