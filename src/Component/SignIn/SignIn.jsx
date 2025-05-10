import React, { useContext, useRef } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";
import ContinueGoogle from "../ContinueGoogle/ContinueGoogle";
import { AuthContext } from "../../Context/AuthContext/AuthContext";

const SignIn = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const getEmailforResetPass = useRef();
  const { signInUser, setUser, error, setError, forgatePassword } =
    useContext(AuthContext);

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    setError("");
    signInUser(email, password)
      .then((result) => {
        toast.success("Logged uccessfull !!");
        setUser(result.user);
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleForgatePassword = () => {
    const email = getEmailforResetPass.current.value;
    forgatePassword(email)
      .then(() => {
        toast("forgate password")
      })
      .catch((error) => {
        toast.warn(error.message);
      });
  }
  return (
    <div className="mx-4 mt-40">
      <div className="max-w-sm mx-auto mt-10 sm:mt-16 bg-gray-100 p-4 sm:p-6 py-8 rounded-lg">
        <h2 className="text-xl sm:text-2xl font-bold text-center text-gray-700 mb-6">
          Login to Your Account
        </h2>
        <form onSubmit={handleSignIn} className="space-y-5">
          <input
            name="email"
            ref={getEmailforResetPass}
            className="border border-accent focus:outline-accent w-full px-4 py-2 rounded-sm"
            type="email"
            placeholder="Email"
            required
          />
          <input
            name="password"
            className="border border-accent focus:outline-accent w-full px-4 py-2 rounded-sm"
            type="password"
            placeholder="Password"
            required
          />

          <button
            onClick={handleForgatePassword}
            type="button"
            className="text-right text-sm text-blue-600 cursor-pointer"
          >
            Forget Password?
          </button>
          {error && (
            <p className="text-red-500 text-sm">Invalid Email or Password</p>
          )}
          <button className="btn btn-accent text-white w-full ">Sign In</button>
          <div className="divider">OR</div>
          <ContinueGoogle color="accent" />
          <p className="text-center text-sm sm:text-base mt-4">
            Don’t have an account?{" "}
            <Link
              state={location.pathname}
              to="/auth/signup"
              className="text-blue-600 hover:underline"
            >
              Signup
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
