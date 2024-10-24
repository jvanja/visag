import { useEffect, useState, useRef, memo } from "react";

const VideoPlayer = (props: { videoSrc: string; slowPlayback: boolean }) => {
  const [hasInteracted, setHasInteracted] = useState(false); // Track if user interacted
  const videoPlayer = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoPlayer.current !== null && hasInteracted) {
      videoPlayer.current.load();
      videoPlayer.current.playbackRate = props.slowPlayback ? 0.4 : 1;
      videoPlayer.current.play();
    }
    setHasInteracted(true);
  }, [props]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="col-span-3">
      <video
        ref={videoPlayer}
        className="w-full h-auto"
        controls
        preload="auto"
        src={props.videoSrc}
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default memo(VideoPlayer);
