// from https://videojs.com/guides/react/ 2023-04-02 with adaptations from prettier
// by way of https://gist.github.com/hamishrouse/4be2f37987cfe4af6a2c8a99e0ab5988
import React from 'react';
import videojs from 'video.js';
import Player from 'video.js/dist/types/player';
import 'video.js/dist/video-js.css';

// TODO: figure out why this is not exported from video.js
interface PlayerOptions {
  autoplay: boolean;
  sources: {
    src: string;
    type: string;
  }[];
}

interface VideoProps {
  options: PlayerOptions;
  onReady: (player: any) => void;
}

export const Video = (props: VideoProps) => {
  const videoRef = React.useRef<HTMLDivElement>(null);
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

      const player = videojs(videoElement, options, () => {
        videojs.log('player is ready');
        onReady && onReady(player);
      });

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
      }
    };
  }, [playerRef]);

  return (
    <div data-vjs-player>
      <div ref={videoRef} />
    </div>
  );
};
