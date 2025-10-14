// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Danger---do not share publically
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbq2BKonfD9sZX3e8vrPxfjk5Nxw0OwI8",
  authDomain: "email-password-auth-82df7.firebaseapp.com",
  projectId: "email-password-auth-82df7",
  storageBucket: "email-password-auth-82df7.firebasestorage.app",
  messagingSenderId: "208168475847",
  appId: "1:208168475847:web:a6f945e942804dc47e72e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);