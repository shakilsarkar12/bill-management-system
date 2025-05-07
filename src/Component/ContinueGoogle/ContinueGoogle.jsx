import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../Context/AuthContext/AuthContext';

const ContinueGoogle = ({ color }) => {
  const { setUser, googleSignin } = useContext(AuthContext);

      const navigate = useNavigate();

    const handleGoogleLogin = () => {
          console.log("Google")
        googleSignin()
          .then((result) => {
            toast.success("Logged in with Google !");
            console.log(result.user);
            setUser(result.user)
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