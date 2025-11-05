import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video text-white absolute pt-[20%] px-12 bg-linear-to-r from-black">
      <h1 className="font-bold text-6xl">{title}</h1>
      <p className="py-6 text-lg w-1/2">{overview}</p>
      <div>
        <button className="bg-white text-black p-2 px-8 text-2xl rounded-lg cursor-pointer hover:bg-opacity-50">
          ▶︎ Play
        </button>
        <button className="bg-gray-500/70 text-white p-2 px-4 mx-2 text-2xl rounded-lg cursor-pointer">ⓘ More Info</button>
      </div>
    </div>
  );
};

export default VideoTitle;
