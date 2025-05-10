import React, { useEffect, useState } from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
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
    setLoading(false);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const createUser = (email, password) => {
    setLoading(false);
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


  const signOutUser = () => {
    return signOut(auth);
  };

  const forgatePassword = (email) => {
    return sendPasswordResetEmail(auth, email)
}

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
    forgatePassword
  };

  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
