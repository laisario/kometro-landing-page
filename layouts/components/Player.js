import { useEffect, useRef } from "react";

const Player = ({ videoSrc, autoplay = false, ...others }) => {
  const videoEl = useRef(null);
  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch(error => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);
  return (
      <video
        style={{ maxWidth: "100%", width: "1000px", margin: "0 auto" }}
        playsInline
        loop
        muted
        controls
        src={videoSrc} 
        alt="All the devices"
        ref={videoEl}
      >
        <source src={videoSrc}  />

      </video>
  )
};

export default Player;
