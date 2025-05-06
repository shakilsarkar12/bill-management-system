import React, { useEffect, useState } from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../../Firebase/firebase.init";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [balence, setBalence] = useState(10000);
  const googleProvider = new GoogleAuthProvider();
  
    const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
    };
    
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
    };
    
    const googleSignin = () => {
        return signInWithPopup(auth, googleProvider);
    }
    
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

  const signOutUser = () => {
    return signOut(auth);
  };

  const userInfo = {
    user,
    error,
    balence,
    setError,
    setUser,
    setBalence,
    createUser,
    signInUser,
    googleSignin,
    signOutUser,
  };

  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
