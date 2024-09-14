import React from 'react'
import '../css/Skills.css'
import { FaHtml5, FaCss3, FaReact, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { DiPostgresql } from "react-icons/di";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { FaChrome } from "react-icons/fa";



export const SkillsComponent = () => {
    return (
        <>
            <div className='skill-container'>
                <h3>Skills</h3><br />
                <p>Here are some of my skills on which I have learnt</p><br />
                <div className='box-container'>
                    <div className='box1'>
                        <h4>Frontend</h4>
                        <ul>
                            <li><FaHtml5 className='HTML' /> HTML</li>
                            <li><FaCss3 className='CSS' /> CSS</li>
                            <li><IoLogoJavascript className='js' /> JavaScript</li>
                            <li><FaReact className='react' /> React Js</li>
                        </ul>
                    </div>
                    <div className='box1'>
                        <h4>Backend</h4>
                        <ul>
                            <li><FaNodeJs className='nodeJs' /> Node Js</li>
                            <li><FaNodeJs className='nodeJs' /> Express Js</li>
                            <li><IoLogoJavascript className='js' /> JavaScript</li>
                            <li><DiPostgresql className='postgresql' /> PostgreSQL</li>
                        </ul>
                    </div>
                    <div className='box1'>
                        <h4>others</h4>
                        <ul>
                            <li><FaGitAlt className='git' /> Git</li>
                            <li><FaGithub className='github' /> GitHub</li>
                            <li><VscVscode className='vsCode' /> Code</li>
                            <li><FaChrome className='chrome' /> devTools</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
