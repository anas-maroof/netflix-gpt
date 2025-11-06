import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptSearchMovieSuggestions from "./GptSearchMovieSuggestions";
import { BG_URL } from "../utils/constant";

const GptSearch = () => {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {/* Background image */}
      <img
        className="h-full w-full object-cover"
        src={BG_URL}
        alt="Background"
      />

      {/* Overlay to make image dull */}
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/50 to-transparent"></div>

      {/* Foreground content */}
      <div className="absolute inset-0">
        <GptSearchBar />
        <GptSearchMovieSuggestions />
      </div>
    </div>
  );
};

export default GptSearch;
