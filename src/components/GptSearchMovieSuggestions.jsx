import React from "react";
import { useSelector } from "react-redux";
import MovieListSearch from "./MovieListSearch";

const GptSearchMovieSuggestions = () => {
  const { movieNames, movieResults } = useSelector((store) => store.gpt);
  if (!movieNames) return null;

  return (
    <div className="mt-55 px-6 w-full">
      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex">
          {movieResults.map((movie, index) => (
            <MovieListSearch
              key={movie.id || index}
              title={movieNames[index]}
              movies={movieResults[index]}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GptSearchMovieSuggestions;
