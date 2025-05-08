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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const googleProvider = new GoogleAuthProvider();
      const [nameWord, setNameWord] = useState();
      useEffect(() => {
        const initial = user?.displayName?.charAt(0).toUpperCase() || "";
        setNameWord(initial);
      }, [user]);

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const googleSignin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (createUser) {
        setTimeout(() => {
          setUser(currentUser);
          setLoading(false);
        }, 500);
        console.log(currentUser);
      } else {
        setUser(null);
      }
      return unsubscribe();
    });
  }, []);

  console.log(loading);

  const signOutUser = () => {
    return signOut(auth);
  };

  const userInfo = {
    user,
    error,
    loading,
    nameWord,
    setLoading,
    setError,
    setUser,
    createUser,
    signInUser,
    googleSignin,
    signOutUser,
  };

  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
