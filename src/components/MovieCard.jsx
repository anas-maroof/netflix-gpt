import React from "react";
import { IMG_CDN_URL } from "../utils/constant";
import { Link } from "react-router-dom";

const MovieCard = ({ posterPath, id }) => {
  if (!posterPath) return null;
  return (
    <div className="w-48 pr-4">
      <Link to={`/trailer/${id}`} key={id}>
        <img
          className="rounded-lg border border-white cursor-pointer"
          alt="poster"
          src={IMG_CDN_URL + posterPath}
        />
      </Link>
    </div>
  );
};

export default MovieCard;
