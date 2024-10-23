import React from 'react';
import { FaTelegramPlane } from 'react-icons/fa'; // Importing the Telegram icon
import styles from './BookDemo.module.css';

function BookDemo() {
    return (
        <div className={styles.heroSection}>
            <div className={styles.titleSection}>
                <h1 className={styles.title}>
                    Book a Demo
                    <FaTelegramPlane style={{ fontSize: '1.0rem', marginLeft: '0.5rem', border: "1px solid gray", borderRadius: "5px", padding:"5px" }} />

                </h1>
            </div>
            <div className={styles.contentSection}>
                <p className={styles.content}>
                    Our video output beats the likes of Google Vlogger, and at par with Microsoft’s VASA-1 & Alibaba’s EMO
                </p>
                <div className={styles.formSection}>
                    <input type="email" placeholder="Email" className={styles.inputField} />
                    <button className={styles.subscribeButton}>Subscribe</button>
                </div>
            </div>
        </div>
    );
}

export default BookDemo;
