import React from "react";
import VideoBackground from "./VideoBackground";
import { useParams } from "react-router-dom";
import VideoTitle from "./VideoTitle";
import TrailerHeader from "./TrailerHeader";

const TrailerContainer = () => {
  const {id} = useParams();
  return (
    <div>
      <TrailerHeader />
      {/* <VideoTitle title={title} overview={overview} /> */}
      <VideoBackground movieId={id} />
    </div>
  );
};

export default TrailerContainer;
