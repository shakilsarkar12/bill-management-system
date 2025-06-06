import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { updateProfile } from "firebase/auth";
import ContinueGoogle from "../ContinueGoogle/ContinueGoogle";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import { IoEye, IoEyeOff } from "react-icons/io5";

const SignUp = () => {
  const location = useLocation();
  const [passwordError, setPasswordError] = useState("");
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();
  const { createUser, setUser, error, setError } = useContext(AuthContext);
  console.log(location);

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;

    if (!/[A-Z]/.test(password)) {
      setPasswordError("Password must have at least one Uppercase letter.");
      return;
    } else if (!/[a-z]/.test(password)) {
      setPasswordError("Password must have at least one Lowercase letter.");
      return;
    } else if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters.");
      return;
    } else {
      setPasswordError("");
    }
    createUser(email, password)
      .then((result) => {
        updateProfile(result.user, {
          displayName: name,
          photoURL: photoURL,
        });
        toast.success("Registration successful!");
        navigate(`${location.state ? location.state : "/"}`);
        setUser(result.user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="px-4 mt-40">
      <div className="max-w-sm mx-auto mt-10 sm:mt-16 bg-gray-100 p-4 sm:p-6 py-8 rounded-lg">
        <h2 className="text-xl sm:text-2xl font-bold text-center text-gray-700 mb-6">
          Create a New Account
        </h2>
        <form onSubmit={handleSignUp} className="space-y-5">
          <input
            name="name"
            className="border border-info focus:outline-info w-full px-4 py-2 rounded-sm"
            type="text"
            placeholder="name"
            required
          />
          <input
            name="photoURL"
            className="border border-info focus:outline-info w-full px-4 py-2 rounded-sm"
            type="url"
            placeholder="PhotoURL"
          />
          <input
            name="email"
            className="border border-info focus:outline-info w-full px-4 py-2 rounded-sm"
            type="email"
            placeholder="Email"
            required
          />
          <div className="relative">
            <input
              name="password"
              className="border border-accent focus:outline-accent w-full px-4 py-2 rounded-sm"
              type={showPass ? "text" : "password"}
              placeholder="Password"
              required
            />
            <button
              type="button"
              onClick={() => setShowPass(!showPass)}
              className="absolute top-3 right-4"
            >
              {showPass ? <IoEye size={20} /> : <IoEyeOff size={20} />}
            </button>
          </div>

          {passwordError && (
            <p className="text-red-500 text-sm">{passwordError}</p>
          )}
          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button className="btn btn-info text-white w-full ">Sign Up</button>
          <div className="divider">OR</div>
          <ContinueGoogle color="info" />
          <p className="text-center mt-4 text-sm sm:text-base">
            Already have an account?{" "}
            <Link to="/auth/signin" className="text-blue-600 hover:underline">
              Signin
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
