import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if(!movies) return;
  return (
    <div className="px-6">
        <h1 className="text-3xl py-2 font-bold text-white">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex">
            {movies.map(movie => <MovieCard key={movie.id} posterPath={movie.poster_path} id={movie.id} title={movie.original_title} overview={movie.overview}/>)}
          
        </div>
      </div>
    </div>
  );
};

export default MovieList;
