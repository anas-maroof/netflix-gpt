import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const { trailerVideo, error } = useMovieTrailer(movieId);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Add delay (3–4s) before showing result
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, [trailerVideo, error]);

  // Loader screen
  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center h-[80vh] bg-black text-white">
        <div className="w-16 h-16 border-4 border-t-transparent border-red-600 rounded-full animate-spin"></div>
        <p className="mt-6 text-lg text-gray-300">Fetching your movie trailer...</p>
      </div>
    );
  }

  // Error or no trailer
  if (error || !trailerVideo) {
    return (
      <div className="flex flex-col justify-center items-center h-[80vh] bg-linear-to-b from-gray-900 to-black text-white text-center px-6">
        <h1 className="text-4xl font-bold mb-3 text-red-500 animate-pulse">
          😔 No Trailer Found
        </h1>
        <p className="text-gray-300 mb-8 max-w-lg leading-relaxed">
          Sorry for the inconvenience. We couldn’t find a trailer for this movie.
          Explore other amazing movies waiting for you!
        </p>
        <button
          onClick={() => navigate("/browse")}
          className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition duration-300"
        >
          🎬 Go Back to Browse
        </button>
      </div>
    );
  }

  // Show trailer normally
  return (
    <div className="w-screen overflow-x-scroll no-scrollbar">
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1&loop=1`}
        title="YouTube trailer"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
