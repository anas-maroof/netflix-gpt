import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Profile from "./Profile";
import { BG_URL } from "../utils/constant";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Header */}
      <Header />

      {/* Main Content Section with BG and Overlay */}
      <div className="relative flex-grow flex items-center justify-center py-20 px-5">
        {/* Background Image */}
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src={BG_URL}
          alt="Background"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent"></div>

        {/* Foreground Content */}
        <div className="relative z-10">
          <Profile />
        </div>
      </div>

      {/* Footer (stays visible naturally) */}
      <Footer />
    </div>
  );
};

export default About;
