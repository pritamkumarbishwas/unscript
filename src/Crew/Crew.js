import React from 'react';
import styles from './Crew.module.css'; // Import CSS module
import image from '../assets/crew.png'; // Import the image from your assets

function Crew() {
    return (
        <div className={styles.container}>
            <div className={styles.contentBox}>
                <h2>A Crew of <span>15 vs 1 AI tool</span></h2>
                <p>
                    Video production coordination involves managing schedules and equipment.
                    AI videos streamline this, reducing labor and
                    management efforts.
                </p>
                <a href="/" className={styles.discoverMore}>
                    Discover More <span className={styles.arrow}>→</span>
                </a>
            </div>
            <div className={styles.imageBox}>
                <img src={image} alt="Description" />
            </div>
        </div>
    );
}

export default Crew;
