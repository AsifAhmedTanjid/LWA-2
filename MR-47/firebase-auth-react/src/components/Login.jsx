import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../firebase/firebase.init';

const googleProvider = new GoogleAuthProvider();
const Login = () => {
    const [user,setUser]=useState(null);
    const handleGoogleSignIn = ()=>{
        console.log('google btn clicked');
        signInWithPopup(auth,googleProvider)
        .then(result=>{
            console.log(result.user);
            setUser(result.user);
            
        })
        .catch(error=>{
            console.log(error);
            
        })
        
    }
    const handleSignOut =()=>{
        signOut(auth).then(()=>{
            console.log('singout done');
            setUser(null)
            
        }).catch (error =>{
            console.log(error);
            
        })
    }
    return (
        <div>
            <h1>Please Login</h1>
            
            
            {
                user ?<button onClick={handleSignOut}>Sign Out</button>:<button onClick={handleGoogleSignIn}>SignIn WIth Google</button>
            }
          {user &&   <div>
                <h3>{user.displayName}</h3>
                <h5>{user.email}</h5>
                <img src={user.photoURL} alt="" />
            </div>}
        </div>
    );
};

export default Login;