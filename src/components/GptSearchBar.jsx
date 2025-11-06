import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";
const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  return (
    <div className="flex justify-center ">
      <form className="w-6/12 absolute p-12 bg-transparent my-24 mx-auto right-0 left-0 rounded-lg flex items-center space-x-2">
        <input
          className="p-4 bg-white text-black w-9/12 rounded-lg focus:outline-none"
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button className="p-4 bg-red-700 w-3/12 rounded-lg cursor-pointer hover:bg-red-800">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
