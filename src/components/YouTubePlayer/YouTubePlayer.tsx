import React, { useRef, useEffect } from 'react';

const YouTubePlayer = ({ videoId }) => {
  const playerRef = useRef(null);

  useEffect(() => {
    // Load the YouTube player API script
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // Initialize the YouTube player when the API is ready
    window.onYouTubeIframeAPIReady = initPlayer;

    return () => {
      window.onYouTubeIframeAPIReady = null;
    };
  }, []);

  const initPlayer = () => {
    // Create a new YouTube player
    playerRef.current = new window.YT.Player('player', {
      height: '360',
      width: '640',
      videoId: videoId,
      events: {
        // You can add event handlers here if needed
      },
    });
  };

  return (
    <div id="player">
      {/* This <div> will be replaced by the YouTube player */}
    </div>
  );
};

export default YouTubePlayer;
