import React, { useEffect, useState } from 'react';
import '../css/Header.css';

export const HeaderComponent = () => {
    const [bgColor, setBgColor] = useState('rgb(0, 3, 14)');

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setBgColor('rgb(0, 3, 17)'); // Change to dark blue when scrolled down
            } else {
                setBgColor('rgb(0, 3, 14)'); // Original color before scrolling
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div
                className="header"
                style={{ backgroundColor: bgColor, transition: 'background-color 0.5s ease' }}
            >
                <label className="header label"
                    style={{ backgroundColor: bgColor, transition: 'background-color 0.5s ease' }}>DevFolio</label>
                <ul className="header li" style={{ backgroundColor: bgColor, transition: 'background-color 0.5s ease' }}>
                    <li>ABOUT</li>
                    <li>SKILLS</li>
                    <li>VISIONARY</li>
                    <li>PROJECTS</li>
                    <li>EDUCATION</li>
                </ul>
                <button>DOWNLOAD CV</button>
            </div>
        </>
    );
};
