import React, { useEffect } from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { NET_LOGO, USER_LOGO } from "../utils/constant";
import { toggleGptSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constant";
import { changeLanguage } from "../utils/configSlice.js";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user); // can be null at start!
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  // 🔹 Watch for login/logout
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe(); // cleanup listener
  }, []);

  // 🔹 Handle sign out
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
      })
      .catch(() => navigate("/error"));
  };

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  // 🔹 Decide whether to show Sign In or Sign Out
  const buttonLabel = location.pathname === "/browse" ? "Sign Out" : null;

  return (
    <div className="absolute w-screen px-8 py-2 bg-linear-to-b from-black z-10 flex justify-between items-center">
      <img className="w-40" src={NET_LOGO} alt="logo" />

      <div className="flex items-center gap-3">
        {user && showGptSearch && (
          <select
            className="bg-black/70 text-white font-semibold px-4 py-2 rounded-md border border-gray-600 
               hover:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-700 cursor-pointer
               transition duration-200"
            onChange={handleLanguageChange}
          >
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option
                key={lang.identifier}
                value={lang.identifier}
                className="bg-gray-800 text-white"
              >
                {lang.name}
              </option>
            ))}
          </select>
        )}
        {user && (
          <>
            <h1 className="my-2 px-2 font-bold text-white text-lg">
              Hello {user.displayName || "User"}
            </h1>
            <button
              className="font-bold text-white p-2 mx-2 cursor-pointer bg-black rounded-md hover:bg-red-700 transition"
              onClick={handleGptSearchClick}
            >
              {showGptSearch ? "Home" : "GPT Search"}
            </button>
            <img
              className="w-12 h-12 rounded"
              src={USER_LOGO}
              alt="user-logo"
              title={`Hello ${user.displayName}`}
            />
            <button className="font-bold text-white p-2 mx-2 cursor-pointer bg-black rounded-md hover:bg-red-700 transition">
              About
            </button>
          </>
        )}
        {buttonLabel && (
          <button
            onClick={
              buttonLabel === "Sign Out" ? handleSignOut : () => navigate("/")
            }
            className="font-bold text-white p-2 mx-2 cursor-pointer bg-black rounded-md hover:bg-red-700 transition"
          >
            {buttonLabel}
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
