import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9c363af5-4750-4f14-87d1-8125f5276db0/web/IN-en-20251027-TRIFECTA-perspective_b68b1528-3a10-4997-9f99-48ccbdb86626_large.jpg"
          alt="Background"
        />
      </div>
      <form className="w-4/12 absolute p-12 bg-black/80 my-24 mx-auto right-0 left-0 rounded-lg">
        <h1 className="font-bold text-3xl py-4 text-white">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-2 bg-gray-700 text-white w-full"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-2 bg-gray-700 text-white w-full"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-2 bg-gray-700 text-white w-full"
        />
        <button className="p-2 my-6 bg-red-700 w-full rounded-lg cursor-pointer">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="py-4 text-white cursor-pointer"
          onClick={toggleSignInForm}
        >
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already a User? Sing In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
