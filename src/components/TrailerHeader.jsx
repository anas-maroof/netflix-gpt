import React, { useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { NET_LOGO, USER_LOGO, SUPPORTED_LANGUAGES } from "../utils/constant";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice.js";

const TrailerHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  // 🔹 Watch for login/logout
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        if (location.pathname === "/" || location.pathname === "/login") {
          navigate("/browse");
        }
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full px-8 py-3 bg-linear-to-b from-black z-50 flex justify-between items-center shadow-md">
      <img
        className="w-40 cursor-pointer"
        src={NET_LOGO}
        alt="logo"
        onClick={() => navigate("/browse")}
        title="Go to Home"
      />

      <div className="flex items-center gap-3">

        {/* 🔹 User Info & Buttons */}
        {user && (
          <>
            <h1 className="my-2 px-2 font-bold text-white text-lg">
              Hello {user.displayName || "User"}
            </h1>

            <img
              className="w-12 h-12 rounded"
              src={USER_LOGO}
              alt="user-logo"
              title={`Hello ${user.displayName}`}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default TrailerHeader;
