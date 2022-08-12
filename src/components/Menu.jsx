import React from 'react';
import { Link } from "react-router-dom";
import { FaUserAlt, FaBrain, FaSuitcase, FaReadme, FaAt, FaFacebookSquare, FaGithubSquare, FaTwitterSquare, FaLinkedin, FaMedium, FaTiktok } from 'react-icons/fa';
import {ImCancelCircle} from "react-icons/im";
import AppContext from '../context/AppContext';
import "../styles/components/Menu.css";
import profiles from "../profiles";

const Menu = () => {
    const {displayMenu} = React.useContext(AppContext);

    const handleClickOnClose = () => {
        try{
            displayMenu();
            console.log("Simon");
        }
        catch(e){
            console.log("Could not change menu!");
        }

    }
    return (
        <nav className="Menu">
            <ul className="Menu-list">
                <li className="Menu-top" onClick={handleClickOnClose}>
                    <Link to="/">
                        <figure>
                            <img src="https://miguelhernandezmx.com/wp-content/uploads/2022/05/my_photo.jpeg" alt="Home"/>
                        </figure>
                        <p>Miguel Hernández</p>
                        <p>Web developer</p>
                    </Link>
                    <span><ImCancelCircle /></span>
                </li>
                <ul className="Menu-middle">
                    <li className="Menu-item" onClick={handleClickOnClose}>
                        <div>
                            <Link to="/about">
                                <span><FaUserAlt /></span>
                                <span>About</span>
                            </Link>
                        </div>
                    </li>
                    <li className="Menu-item" onClick={handleClickOnClose}>
                        <div>
                            <Link to="/skills">
                                <span><FaBrain /></span>
                                <span>Skills</span>
                            </Link>
                        </div>
                    </li>
                    <li className="Menu-item" onClick={handleClickOnClose}>
                        <div>
                            <Link to="/work">
                                <span><FaSuitcase /></span>
                                <span>Work</span>
                            </Link>
                        </div>
                    </li>
                    <li className="Menu-item" onClick={handleClickOnClose}>
                        <div>
                            <Link to="/blog">
                                <span><FaReadme /></span>
                                <span>Blog</span>
                            </Link>
                        </div>
                    </li>
                    <li className="Menu-item" onClick={handleClickOnClose}>
                        <div>
                            <Link to="/contact">
                                <span><FaAt /></span>
                                <span>Contact</span>
                            </Link>
                        </div>
                    </li>
                </ul>
                <ul className="Menu-social">
                    <li className="Social-item">
                        <span><a target="_blank" href={profiles.github}><FaGithubSquare /></a></span>
                    </li>
                    <li className="Social-item">
                        <span><a target="_blank" href={profiles.twitter}><FaTwitterSquare /></a></span>
                    </li>
                    <li className="Social-item">
                        <span><a target="_blank" href={profiles.linkedin}><FaLinkedin /></a></span>
                    </li>
                    <li className="Social-item">
                        <span><a target="_blank" href={profiles.facebook}><FaFacebookSquare /></a></span>
                    </li>
                    <li className="Social-item">
                        <span><a target="_blank" href={profiles.medium}><FaMedium /></a></span>
                    </li>
                    <li className="Social-item">
                        <span><a target="_blank" href={profiles.tiktok}><FaTiktok /></a></span>
                    </li>
                </ul>
            </ul>
        </nav>
    );
}

export default Menu;