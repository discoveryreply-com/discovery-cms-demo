import { useEffect, useRef, useState } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import styles from './VideoPlayer.module.css';
import { useComponentData } from '@discoverycms/connector';

export default function VideoPlayer({ componentId, onReady }) {
    const [screenWidth, setScreenWidth] = useState(null);

    useEffect(() => {
        setScreenWidth(window.screen.width);
    }, []);

    const videoWidth = (screenWidth / 100) * 70;

    const data = useComponentData(componentId);
    const videoRef = useRef(null);
    const playerRef = useRef(null);
    const options = {
        autoplay: false,
        controls: true,
        width: videoWidth, //pixels
        sources: [
            {
                src: data.video.url,
                type: 'video/mp4',
            },
        ],
    };

    useEffect(() => {
        // Make sure Video.js player is only initialized once
        if (!playerRef.current && videoRef.current && videoWidth) {
            const videoElement = document.createElement('video-js');

            videoElement.classList.add('vjs-big-play-centered');
            videoRef.current.appendChild(videoElement);

            const player = (playerRef.current = videojs(videoElement, options, () => {
                onReady && onReady(player);
            }));
        } else if (playerRef.current) {
            const player = playerRef.current;

            player.autoplay(options.autoplay);
            player.src(options.sources);
        }
    }, [options, videoRef, onReady]);

    // Dispose the Video.js player when the functional component unmounts
    useEffect(() => {
        const player = playerRef.current;

        return () => {
            if (player && !player.isDisposed()) {
                player.dispose();
                playerRef.current = null;
            }
        };
    }, [playerRef]);

    return (
        <div data-vjs-player className={styles.video ?? ''} data-discovery-id={componentId}>
            <div ref={videoRef} />
        </div>
    );
}
