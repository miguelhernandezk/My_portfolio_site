import React from 'react';
import { useNavigate } from "react-router-dom";
import ButtonHover from '../components/ButtonHover';
import "../styles/containers/Intro.css";

const Intro = () => {
    const navigate = useNavigate();
    const handleClick = () =>{
        navigate('/contact');
    }
    return (
        <div className="Intro">
            <div className="Intro-text">
                <p>
                    <span>H</span>
                    <span>i,</span>
                </p>
                <p>
                    <span>I'</span>
                    <span>m</span>
                    <span>&nbsp;</span>
                    <span>M</span>
                    <span>i</span>
                    <span>g</span>
                    <span>u</span>
                    <span>e</span>
                    <span>l</span>
                </p>
                <p>
                    <span>W</span>
                    <span>e</span>
                    <span>b</span>
                    <span>&nbsp;</span>
                    <span>d</span>
                    <span>e</span>
                    <span>v</span>
                    <span>e</span>
                    <span>l</span>
                    <span>o</span>
                    <span>p</span>
                    <span>e</span>
                    <span>r</span>
                    <span>&nbsp;</span>
                    <span>🖥</span>
                </p>
                <h2 className="Intro-position">Frontend Developer</h2>
                <div className="button-container" onClick={handleClick}><ButtonHover text="Contact me" /></div>
            </div>
            <div className="achievements"></div>
        </div>
    );
}

export default Intro;