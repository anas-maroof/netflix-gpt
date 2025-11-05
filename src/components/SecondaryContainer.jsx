import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="bg-black">
      <div className="-mt-42 pl-5 relative z-20">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Popular"} movies={movies.nowPopularMovies} />
        <MovieList title={"Top Rated"} movies={movies.nowTopRatedMovies} />
        <MovieList title={"Upcoming"} movies={movies.nowUpcomingMovies} />
        <MovieList title={"TV Series - Popular"} movies={movies.nowSeries} />
        <MovieList title={"TV Series - On Air"} movies={movies.nowSeriesAir} />
        <MovieList title={"TV Series - Top Rated"} movies={movies.nowSeriesRated} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
