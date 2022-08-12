import React from "react";
import { SiMongodb, SiNextdotjs, SiExpress, SiRedux } from "react-icons/si";
import {FaNode, FaReact} from "react-icons/fa";
import "../styles/containers/Skills.css";

const Skills = () => {
  return (
    <div className="Skills">
        <div className="Skills-description">
            <h1>Skills and experience</h1>
            <p>
                Since beginning my journey as a web developer a year ago,
                I've rapidly improved my skills, building small projects.
                Recently, I started to consult for small business, building 
                web applications for consumer use. 
            </p>
            <p>
                I create responsive websites, I'm still learning web animations, though. 
                I try to use best practises and improve my projects as soon as I learn new stuff. 
                Right now, I would say my main area of expertise is frontend, specially React.
                However, I have basic knowledge of backend (The contact form of this website was 
                tbuilt using node.js).
            </p>
            <p>
                I have also worked using wordpress and some other no-code tools. 
            </p>
            <p>
                Visit my <a href="https://www.linkedin.com/in/miguelhmx">Linkedin profile</a> for more details or just contact me.
            </p>
        </div>
        <div className="Skills-list">
            <ul>
                <li className="Skill">
                    <span><SiMongodb /></span>
                    <span>MongoDB</span>
                </li>
                <li className="Skill">
                    <span><FaNode/></span>
                    <span>Node</span>
                </li>
                <li className="Skill">
                    <span><SiNextdotjs /></span>
                    <span>Next.js</span>
                </li>
                <li className="Skill">
                    <span><FaReact /></span>
                    <span>React</span>
                </li>
                <li className="Skill">
                    <span><SiExpress /></span>
                    <span>Express</span>
                </li>
                <li className="Skill">
                    <span><SiRedux /></span>
                    <span>Redux</span>
                </li>
            </ul>
        </div>
    </div>
  );
};

export default Skills;
