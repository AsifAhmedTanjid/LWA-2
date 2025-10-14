import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase/firebase.init";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router";

const Register = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const terms = e.target.terms.checked;
    console.log("CLICKS", email, password);
    // reset status : success or error
    setError("");
    setSuccess(false);
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{6,}$/;
    if (!passwordPattern.test(password)) {
      setError(
        "Password must be at least 6 characters long, include at least one uppercase letter, one lowercase letter, and one special character."
      );
      return;
    }
    if(!terms){
      setError("Please accept terms and condition")
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log("after creation of new user", result.user);
        setSuccess(true);
        e.target.reset();
      })
      .catch((error) => {
        console.log("error happened", error.message);
        setError(error.message);
      });
  };
  const handleTogglePassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleRegister}>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  name="email"
                  type="email"
                  className="input"
                  placeholder="Email"
                />
                <label className="label">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="input"
                    placeholder="Password"
                    name="password"
                  />
                  <button
                    className="btn btn-xs absolute top-2 right-5"
                    onClick={handleTogglePassword}
                  >
                    {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                  </button>
                </div>
                <div>
                  <label className="label">
                    <input
                      type="checkbox"
                      name='terms'
                      className="checkbox"
                    />
                    Accept Terms And Condition
                  </label>
                </div>
      
                <button className="btn btn-neutral mt-4">Register</button>
              </fieldset>
              {success && (
                <p className="text-green-500">Acoount Created Successfully</p>
              )}
              {error && <p className="text-red-500">{error}</p>}
            </form>
            <p>Already have an account? <Link to="/login" className="text-blue-400 underline">Login</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
