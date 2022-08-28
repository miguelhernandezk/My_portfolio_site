import React from 'react';
import "../styles/components/Card.css"

const MainCard = ({title, coverImage, brief, slug, color}) => {
    return (
        <div className={`Card${color}`}>
            <h2><a href={`https://techblog.miguelhernandezmx.com/${slug}`}>{title}</a></h2>
            <span>{brief}</span>
            <img src={coverImage} alt={title}/>            
        </div>
    );
}

export default MainCard;