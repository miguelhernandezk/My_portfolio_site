import React from 'react';
import "../styles/components/Card.css"

const MainCard = ({title, coverImage, brief, slug}) => {
    
    return (
        <div className="Card">
            <h2><a href={`https://techblog.miguelhernandezmx.com/${slug}`}>{title}</a></h2>
            <span>{brief}</span>
            <img src={coverImage} alt={coverImage}/>            
        </div>
    );
}

export default MainCard;