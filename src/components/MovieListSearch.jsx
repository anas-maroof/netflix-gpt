import React from "react";
import MovieCard from "./MovieCard";

const MovieListSearch = ({ title, movies }) => {
  if (!movies) return;
  return (
    <div className="">
      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex">
          <MovieCard key={movies.id} posterPath={movies.poster_path} />
        </div>
      </div>
    </div>
  );
};

export default MovieListSearch;
