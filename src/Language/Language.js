import React from 'react';
import styles from './Language.module.css'; // Import CSS module
import image from '../assets/language.png'; // Import the image

function Language() {
    return (
        <div className={styles.container}>
            <div className={styles.imageBox}>
                <img src={image} alt="Cost Reduction" />
            </div>
            <div className={styles.contentBox}>
                <h2><span>140+</span>  Languages</h2>
                <p>
                    Engage non-English speaking audiences by
                    automating dubbing and translation to create
                    and distribute multilingual videos quickly.
                </p>
                <a href="/" className={styles.discoverMore}>
                    Discover More <span className={styles.arrow}>→</span>
                </a>
            </div>
        </div>
    );
}

export default Language;
