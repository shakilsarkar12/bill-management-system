import React, { useEffect, useState } from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../Firebase/firebase.init";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
    };
    
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (createUser) {
        setUser(currentUser);
        console.log(currentUser);
      } else {
        setUser(null);
      }
      return unsubscribe();
    });
  }, []);
    

  const userInfo = {
    user,
    error,
    setError,
    setUser,
    createUser,
    signInUser,
    img: "https://i.ibb.co.com/r2hSG9ZX/about.jpg",
  };

  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
