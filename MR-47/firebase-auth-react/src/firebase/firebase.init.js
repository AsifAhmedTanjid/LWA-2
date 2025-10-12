//do not send firebase config to repo
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPTBTjUzHMGII-cAFhN9ShCMVjFFVF_GY",
  authDomain: "simple-firebase-auth-58a58.firebaseapp.com",
  projectId: "simple-firebase-auth-58a58",
  storageBucket: "simple-firebase-auth-58a58.firebasestorage.app",
  messagingSenderId: "34249457335",
  appId: "1:34249457335:web:8400e86d7e1c8dd2d65732"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);