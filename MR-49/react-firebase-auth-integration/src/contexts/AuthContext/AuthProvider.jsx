import React from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase/firebase.init";

const AuthProvider = ({ children }) => {
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
      console.log(currentUser);
    } else {
      console.log(currentUser);
    }
  });
  const authInfo = {
    createUser,
    signInUser,
  };
  return <AuthContext value={authInfo}> {children}</AuthContext>;
};

export default AuthProvider;
