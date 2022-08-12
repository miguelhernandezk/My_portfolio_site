import React from 'react';
import "../styles/components/Header.css"
import ToggleButton from './ToggleButton';
import { FaBars } from "react-icons/fa";
import AppContext from '../context/AppContext';

const Header = () => {
    const {displayMenu} = React.useContext(AppContext);

    const handleClickOnBars = () => {
        try{
            displayMenu();
        }
        catch(e){
            console.log("Could not change menu!");
        }

    }
    return (
        <div className="Header">
            <ul>
                <li className="Header-logo">
                   <ToggleButton />
                </li>
                <li className="Header-menu" onClick={handleClickOnBars}><FaBars /></li>
            </ul>
        </div>
    );
}

export default Header;