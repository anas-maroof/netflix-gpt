import { useState, useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";

const useMovieTrailer = (movieId) => {
  const [trailerVideo, setTrailerVideo] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!movieId) return;

    const fetchTrailer = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
          API_OPTIONS
        );

        // Handle non-OK responses (like 404, 500, etc.)
        if (!response.ok) throw new Error(`HTTP Error ${response.status}`);

        const data = await response.json();

        if (!data.results || data.results.length === 0) {
          throw new Error("No trailer found");
        }

        // Find the official trailer, fallback to first video
        const trailer =
          data.results.find((v) => v.type === "Trailer") || data.results[0];

        setTrailerVideo(trailer);
      } catch (err) {
        console.error("Error fetching trailer:", err.message);
        setError(true);
      }
    };

    fetchTrailer();
  }, [movieId]);

  return { trailerVideo, error };
};

export default useMovieTrailer;
