import React from 'react';
import AppContext from '../context/AppContext';
import "../styles/components/ToggleButton.css"

const ToggleButton = () => {
    const {turnOnLight} = React.useContext(AppContext);

    const handleClickOnSlider = () => {
        console.log("holi")
        alert("Light mode coming soon");
        console.log("adios")
    }

    return (
        <label className="switch">
            <input type="checkbox" checked="true" onClick={handleClickOnSlider}/>
            <span className="slider round"></span>
        </label>
    );
}

export default ToggleButton;