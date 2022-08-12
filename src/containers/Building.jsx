import React from 'react';
import { AiFillBuild } from "react-icons/ai";
import "../styles/containers/Building.css";


const Building = () => {
    return (
        <div className="Building">
            <span><AiFillBuild /></span>
            <p>🏗 This section is not yet build. Sorry 🥲</p>
        </div>
    );
}

export default Building;