import React from 'react';

const Cards = ({children}) => {
    return (
        <div className="CardsContainer">
            {children}
        </div>
    );
}

export default Cards;