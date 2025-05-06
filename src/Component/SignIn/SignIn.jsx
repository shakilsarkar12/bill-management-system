import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { auth } from "../../Firebase/firebase.init";

const SignIn = () => {
  const [Error, setError] = useState("");
  const navigate = useNavigate();

    const handleSignIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log("hello login")

        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                 toast.success("Logged uccessfull !!");
                console.log(result.user)
                navigate("/")
            })
            .catch(error => {
            console.log(error)
        })
    }

      const googleProvider = new GoogleAuthProvider();
      const handleGoogleLogin = () => {
        signInWithPopup(auth, googleProvider)
          .then((result) => {
            toast.success("Logged in with Google!");
            console.log(result.user);
            navigate("/");
          })
          .catch((error) => {
            console.log(error);
          });
      };

  return (
    <div className="mx-4"> 
      <div className="max-w-sm mx-auto mt-10 sm:mt-16 bg-gray-100 p-4 sm:p-6 py-8 rounded-lg">
        <h2 className="text-xl sm:text-2xl font-bold text-center text-gray-700 mb-6">
          Login to Your Account
        </h2>
        <form onSubmit={handleSignIn} className="space-y-5">
          <input
            name="email"
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

          <div className="text-right text-sm text-blue-600 cursor-pointer">
            Forget Password?
          </div>

          <button className="btn btn-accent text-white w-full ">Sign In</button>
          <div className="divider">OR</div>
          <button
            onClick={handleGoogleLogin}
            className="btn btn-outline hover:btn-accent text-gray-500 hover:text-gray-700 w-full flex items-center justify-center gap-2"
          >
            <FcGoogle size={20} />
            Continue with Google
          </button>

          <p className="text-center text-sm sm:text-base mt-4">
            Don’t have an account?{" "}
            <Link to="/auth/signup" className="text-blue-600 hover:underline">
              Signup
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
