import React from 'react';
import './MinutesOfHour.css'; // Import the CSS file for styling
import image from '../assets/div.relative.png'; // Import the image from your assets

function MinutesOfHour() {
    return (
        <div className="container">
            <div className="content-box">
                <h2><span>Minutes,</span> not Hours.</h2>
                <p>
                    No need for lengthy processes like
                    filming, editing, or storyboarding,
                    content can be created in minutes
                    by simply providing a script.
                </p>
                <a href="/" className="discover-more">
                    Discover More <span className="arrow">→</span>
                </a>
            </div>
            <div className="image-box">
                <img src={image} alt="Description" />
            </div>
        </div>
    );
}

export default MinutesOfHour;
