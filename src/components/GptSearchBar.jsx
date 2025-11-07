import React, { useRef, useState } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { API_OPTIONS } from "../utils/constant";
import { addGptMovies } from "../utils/gptSlice";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const { movieResults } = useSelector((store) => store.gpt);
  const searchText = useRef(null);
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  const dispatch = useDispatch();

  // 👇 shimmer state
  const [loading, setLoading] = useState(false);

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    // 🟢 Start shimmer immediately
    setLoading(true);

    // 🕒 Force shimmer to stay visible at least 10 seconds
    const shimmerTimeout = setTimeout(() => setLoading(false), 10000);

    try {
      const query =
        "Act as a movie recommendation system and suggest me some good movies for the query: " +
        searchText.current.value +
        ". And only give me 15 movie names, comma separated. Example: Pathan, Jawan, Dunki, King, My Name is Khan.";

      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
      const result = await model.generateContent(query);

      const gptMovies = result.response.text().split(",");
      console.log("AI Response:", gptMovies);

      const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
      const tmdbResults = await Promise.all(promiseArray);
      const filteredResults = tmdbResults.map((movies) => movies[0]);

      // 🟢 Stop shimmer once data arrives
      clearTimeout(shimmerTimeout);
      setLoading(false);

      dispatch(
        addGptMovies({
          movieNames: gptMovies,
          movieResults: filteredResults, // only first result
        })
      );
    } catch (err) {
      console.error(err);
      clearTimeout(shimmerTimeout);
      setLoading(false);
    }
  };
  return (
    <div className="flex justify-center ">
      <form
        className="w-6/12 absolute p-12 bg-transparent my-24 mx-auto right-0 left-0 rounded-lg flex items-center space-x-2"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="p-4 bg-white text-black w-9/12 rounded-lg focus:outline-none"
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="p-4 bg-red-700 w-3/12 rounded-lg cursor-pointer hover:bg-red-800"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
        {loading && (
          <div className="ml-3 w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
        )}
      </form>
      {/* 🟡 shimmer cards displayed during loading */}
      {loading && (!movieResults || movieResults.length === 0) && (
        <div className="-mt-25 absolute top-[60%] w-full flex flex-wrap justify-center gap-4">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="w-48 h-72 bg-gray-700 rounded-lg animate-pulse border border-gray-600"
            ></div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GptSearchBar;
