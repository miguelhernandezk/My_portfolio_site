import React from 'react';
import "../styles/components/ButtonHover.css"

const ButtonHover = ({text}) => {
    return (
        <div className="btn btn-one">
            <span>{text}</span>
        </div>
    );
}

export default ButtonHover; 