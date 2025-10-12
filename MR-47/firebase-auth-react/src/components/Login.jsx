import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React from 'react';
import { auth } from '../firebase/firebase.init';

const googleProvider = new GoogleAuthProvider();
const Login = () => {
    const handleGoogleSignIn = ()=>{
        console.log('google btn clicked');
        signInWithPopup(auth,googleProvider)
        .then(result=>{
            console.log(result.user);
            
        })
        .catch(error=>{
            console.log(error);
            
        })
        
    }
    return (
        <div>
            <h1>Please Login</h1>
            <button onClick={handleGoogleSignIn}>SignIn WIth Google</button>
        </div>
    );
};

export default Login;