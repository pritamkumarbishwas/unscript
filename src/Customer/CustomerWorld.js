import React from 'react';
import './CustomerWorld.css';

const CustomerWorld = () => {
    const logos = [
        { src: require('../assets/customer/1.png'), alt: "Company 1 Logo" },
        { src: require('../assets/customer/2.png'), alt: "Company 2 Logo" },
        { src: require('../assets/customer/3.png'), alt: "Company 3 Logo" },
        { src: require('../assets/customer/4.png'), alt: "Company 4 Logo" },
        { src: require('../assets/customer/5.png'), alt: "Company 5 Logo" },
        { src: require('../assets/customer/6.png'), alt: "Company 6 Logo" },
        { src: require('../assets/customer/7.png'), alt: "Company 7 Logo" },
        { src: require('../assets/customer/8.png'), alt: "Company 8 Logo" },
        { src: require('../assets/customer/9.png'), alt: "Company 9 Logo" },
        { src: require('../assets/customer/10.png'), alt: "Company 10 Logo" },
        { src: require('../assets/customer/11.png'), alt: "Company 11 Logo" },
        { src: require('../assets/customer/12.png'), alt: "Company 12 Logo" },
        { src: require('../assets/customer/13.png'), alt: "Company 13 Logo" },
        { src: require('../assets/customer/14.png'), alt: "Company 14 Logo" },
        { src: require('../assets/customer/15.png'), alt: "Company 15 Logo" },
        { src: require('../assets/customer/16.png'), alt: "Company 16 Logo" },
        { src: require('../assets/customer/17.png'), alt: "Company 17 Logo" },
        { src: require('../assets/customer/18.png'), alt: "Company 18 Logo" },
        { src: require('../assets/customer/19.png'), alt: "Company 19 Logo" },
        { src: require('../assets/customer/20.png'), alt: "Company 20 Logo" },
        { src: require('../assets/customer/21.png'), alt: "Company 21 Logo" },
        { src: require('../assets/customer/22.png'), alt: "Company 22 Logo" },
        { src: require('../assets/customer/23.png'), alt: "Company 23 Logo" },
    ];

    return (
        <div className="logo-grid">
            <h2>Trusted by Over 10,000+ Customers Worldwide.</h2>
            {Array.from({ length: 3 }, (_, rowIndex) => (
                <div className="logo-row" key={rowIndex}>
                    {logos.slice(rowIndex * 6, rowIndex * 6 + 6).map((logo, index) => (
                        <div className="logo-container" key={`${rowIndex}-${index}`}>
                            <img src={logo.src} alt={logo.alt} />
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default CustomerWorld;
