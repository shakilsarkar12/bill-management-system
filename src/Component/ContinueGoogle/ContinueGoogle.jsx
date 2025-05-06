import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React from 'react';
import { toast } from 'react-toastify';
import { auth } from '../../Firebase/firebase.init';
import { useNavigate } from 'react-router';
import { FcGoogle } from 'react-icons/fc';

const ContinueGoogle = ({color}) => {
      const navigate = useNavigate();
    const googleProvider = new GoogleAuthProvider();
    const handleGoogleLogin = () => {
          console.log("Google")
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
        <button 
            type='button'
        onClick={handleGoogleLogin}
        className={`btn btn-outline hover:btn-${color} text-gray-500 hover:text-gray-700 w-full flex items-center justify-center gap-2`}
      >
        <FcGoogle size={20} />
        Continue with Google
      </button>
    );
};

export default ContinueGoogle;