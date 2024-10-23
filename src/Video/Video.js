import React, { useRef, useState } from 'react';
import './Video.css';
import sampleVideo from '../assets/SampleVideo_1280x720_1mb.mp4';

const Video = () => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayPause = () => {
        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="video-container">
            <h3>Trusted by Over 10,000+ Customers Worldwide.</h3>
            <video className="background-video" ref={videoRef} loop muted playsInline>
                <source src={sampleVideo} type="video/mp4" />
            </video>

            <button className="play-pause-btn" onClick={handlePlayPause}>
                {isPlaying ? 'Pause' : 'Play'}
            </button>
        </div>
    );
};

export default Video;
