import React, { useEffect } from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { NET_LOGO, USER_LOGO } from "../utils/constant";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user); // can be null at start!

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

  // 🔹 Decide whether to show Sign In or Sign Out
  const buttonLabel = location.pathname === "/browse" ? "Sign Out" : null;

  return (
    <div className="absolute w-screen px-8 py-2 bg-linear-to-b from-black z-10 flex justify-between items-center">
      <img className="w-40" src={NET_LOGO} alt="logo" />

      <div className="flex items-center gap-3">
        {user && (
          <>
            <h1 className="my-2 px-2 font-bold text-white text-lg">
              Hello {user.displayName || "User"}
            </h1>
            <img
              className="w-12 h-12 rounded"
              src={USER_LOGO}
              alt="user-logo"
            />
          </>
        )}
        {buttonLabel && (
          <button
            onClick={
              buttonLabel === "Sign Out" ? handleSignOut : () => navigate("/")
            }
            className="font-bold text-white p-2 mx-2 cursor-pointer bg-red-600/80 rounded-md hover:bg-red-700 transition"
          >
            {buttonLabel}
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
