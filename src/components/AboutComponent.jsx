import React, { useEffect, useState } from 'react'
import '../css/About.css'
import dp from '../assets/dp.png'

export const AboutComponent = () => {
    const [role, setRole] = useState("");
    const roleArr = ["Web Developer", "Front End Developer", "Back End Developer", "Node Developer", "React Developer"];

    useEffect(() => {
        let totalDelay = 0;

        const displayRoles = () => {
            roleArr.forEach((item, index) => {
                let updatedRole = "";

                for (let i = 0; i < item.length; i++) {
                    setTimeout(() => {
                        updatedRole += item[i];
                        setRole(updatedRole);
                    }, totalDelay + i * 100);
                }

                totalDelay += item.length * 100;

                setTimeout(() => {
                    for (let j = item.length - 1; j >= 0; j--) {
                        setTimeout(() => {
                            updatedRole = updatedRole.slice(0, j);
                            setRole(updatedRole);
                        }, (item.length - j) * 100);
                    }
                }, totalDelay);

                totalDelay += item.length * 100;

                if (index === roleArr.length - 1) {
                    setTimeout(() => {
                        totalDelay = 0;
                        displayRoles();
                    }, totalDelay);
                }
            });
        };

        displayRoles();
    }, []);
    return (
        <>
            <div className="about-container">
                <div className='about'>
                    <span>Hi, I am </span><br></br>
                    <span className='name'>Shylash V K</span> <br></br>
                    <span className='iam'>I am a </span>
                    <span className='role'>{role}</span>
                    <span className="blinking-cursor">|</span>
                    <br></br>
                    <p>
                        A skilled React and Node developer with an impressive portfolio, driven by a passion for staying current with both frontend and backend technologies. A collaborative team player, dedicated to delivering high-quality work, and thrive in fast-paced environments. Eager to apply creativity, innovation and ready to make meaningful contributions to dynamic projects.
                    </p>
                </div>

                <div className='dp'>
                    <img src={dp} alt="Profile" />
                </div>

            </div>
        </>
    )
}
