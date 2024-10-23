import React from 'react';
import styles from './Footer.module.css'; // Import CSS module
import logo from "../assets/logo.png"; // Ensure your logo is available in the assets folder

function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.heading}>
                <div className={styles.logo}>
                    <img src={logo} alt="Logo" className="nav-logo" />
                </div>
                <div className={styles.socialIcons}>
                    <a href="/" className={styles.icon}><i className="fab fa-linkedin"></i></a>
                    <a href="/" className={styles.icon}><i className="fab fa-instagram"></i></a>
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.services}>
                    <h4>Usecase</h4>
                    <p><a href="/">Learning and Development</a></p>
                    <p><a href="/">Marketing Teams</a></p>
                    <p><a href="/">Personalised videos</a></p>
                    <p><a href="/">Customer Service</a></p>
                    <p><a href="/">Dubbing</a></p>
                    <p><a href="/">Enterprise</a></p>
                </div>
                <div className={styles.socialMedia}>
                    <h4>Feature</h4>
                    <p><a href="/">AI Avatars</a></p>
                    <p><a href="/">Video Dubbing</a></p>
                    <p><a href="/">AI Face Swap</a></p>
                    <p><a href="/">Customised Virtual Influencer</a></p>
                    <p><a href="/">Video Personalisation</a></p>
                </div>
                <div className={styles.links}>
                    <h4>Resource</h4>
                    <p><a href="/">Blogs</a></p>
                    <p><a href="/">Support</a></p>
                    <p><a href="/">FAQ</a></p>
                </div>
                <div className={styles.details}>
                    <h4>Company</h4>
                    <p><a href="/">About us</a></p>
                    <p><a href="/">Contact</a></p>
                    <p><a href="/">Pricing</a></p>
                </div>
            </div>
            <footer className={styles.footerBottom}>
                <div className={styles.address}>
                    2nd Floor, 2735, 16th Cross Rd, PWD Quarters,
                    1st <br />Sector, HSR Layout, Bengaluru, Karnataka 560102
                </div>
                <div className={styles.copyright}>
                    Copyright © 2024 UnscriptAI
                </div>
            </footer>
        </div>
    );
}

export default Footer;
