import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase/firebase.init";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  //   useEffect(() => {}, []);
  //   useEffect(() => {
  //     //step 1-set objerver
  //     //step 2 set in variable
  //     //step 3: return and call the variable so that you can clear the ref

  //   }, []);
  useEffect(() => {
    //mount or set the observer
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    //clear or unmount the observer
    return () => {
      unsubscribe();
    };
  }, []);
  //   onAuthStateChanged(auth, (currentUser) => {
  //     if (currentUser) {
  //       console.log(currentUser);
  //     } else {
  //       console.log(currentUser);
  //     }
  //   });
  const authInfo = {
    user,
    loading,
    createUser,
    signInUser,
    signOutUser,
  };
  return <AuthContext value={authInfo}> {children}</AuthContext>;
};

export default AuthProvider;
