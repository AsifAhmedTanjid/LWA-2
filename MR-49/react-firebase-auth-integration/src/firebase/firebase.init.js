
//Danger!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDV6M8a84w-qdQoNIA_q4Yrm8WMEIBETPE",
  authDomain: "react-firebase-auth-97f07.firebaseapp.com",
  projectId: "react-firebase-auth-97f07",
  storageBucket: "react-firebase-auth-97f07.firebasestorage.app",
  messagingSenderId: "796543050625",
  appId: "1:796543050625:web:e1fa23e17f6624dd60fe80"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);