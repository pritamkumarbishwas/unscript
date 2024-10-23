import React from 'react';
import styles from './Reduction.module.css'; // Import CSS module
import image from '../assets/div.relatives.png';

function Reduction() {
    return (
        <div className={styles.container}>
            <div className={styles.imageBox}>
                <img src={image} alt="Description" />
            </div>
            <div className={styles.contentBox}>
                <h2><span>80%</span> cost reduction</h2>
                <p>
                    Eliminate the need for expensive equipment,
                    location rentals, and professional videographer,
                    reducing overall production costs.
                </p>
                <a href="/" className={styles.discoverMore}>
                    Discover More <span className={styles.arrow}>→</span>
                </a>
            </div>
        </div>
    );
}

export default Reduction;
