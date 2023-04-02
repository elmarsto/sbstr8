// from https://videojs.com/guides/react/ 2023-04-02 with adaptations from prettier
// by way of https://gist.github.com/hamishrouse/4be2f37987cfe4af6a2c8a99e0ab5988
import React from 'react';
import videojs from 'video.js';
import Player from 'video.js/dist/types/player';
import { VideoJsPlayerOptions } from 'video.js/dist/types/options';
import 'video.js/dist/video-js.css';

interface VideoJsProps {
  options: PlayerOptions;
  onReady: (player: any) => void;
}

export const VideoJs = (props: VideoJsProps) => {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const playerRef = React.useRef<Player>(null);
  const { options, onReady } = props;

  React.useEffect(() => {
    // Make sure Video.js player is only initialized once
    if (!playerRef.current) {
      // The Video.js player needs to be _inside_ the component el for React 18 Strict Mode.
      const videoElement = document.createElement('video-js');

      videoElement.classList.add('vjs-big-play-centered');
      if (videoRef.current) {
        videoRef.current.appendChild(videoElement);
      }

      const player = (playerRef.current = videojs(videoElement, options, () => {
        videojs.log('player is ready');
        onReady && onReady(player);
      }));

      // You could update an existing player in the `else` block here
      // on prop change, for example:
    } else {
      const player = playerRef.current;
      if (player) {
        player.autoplay(options.autoplay);
        player.src(options.sources);
      }
    }
  }, [options, videoRef, onReady]);

  // Dispose the Video.js player when the functional component unmounts
  React.useEffect(() => {
    const player = playerRef.current;

    return () => {
      if (player && !player.isDisposed()) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, [playerRef]);

  return (
    <div data-vjs-player>
      <div ref={videoRef} />
    </div>
  );
};
