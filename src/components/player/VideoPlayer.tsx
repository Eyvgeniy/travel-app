import React from "react";

const VideoPlayer = ({ src }): JSX.Element => {
  return (
    <div className="video-responsive text-center">
      <iframe
        width="80%"
        height="400"
        src={src}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
