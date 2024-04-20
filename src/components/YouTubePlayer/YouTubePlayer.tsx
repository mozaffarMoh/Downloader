import { useEffect, useRef } from "react";
import "./YouTubePlayer.scss";

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: any;
  }
}

const YouTubePlayer = ({ videoId }: any) => {
  const playerRef: any = useRef(null);

  useEffect(() => {
    
    const onYouTubeIframeAPIReady = () => {
      // Create the YouTube player once the API is ready
      playerRef.current = new window.YT.Player("youtube-player", {
        height: "360",
        width: "640",
        videoId: videoId,
        playerVars: {
          autoplay: 0, // Change to 1 if you want autoplay
        },
      });
    };
    console.log(playerRef.current);
    
    // Load the YouTube Iframe Player API script
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag: any = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;

    return () => {
      // Clean up when the component unmounts
      if (playerRef.current) {
        playerRef.current.destroy();
      }
    };
  }, [videoId]);

  return <div id="youtube-player"></div>;
};

export default YouTubePlayer;
