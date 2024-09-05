import React from 'react'
import '../css/Header.css'

export const HeaderComponent = () => {
    return (
        <>
            <div className="header">
                <label>DevFolio</label>
                <ul>
                    <li>ABOUT</li>
                    <li>SKILLS</li>
                    <li>VISIONARY</li>
                    <li>PROECTS</li>
                    <li>EDUCATION</li>
                </ul>
                <button>DOWNLOAD CV</button>
            </div>
        </>
    )
}
