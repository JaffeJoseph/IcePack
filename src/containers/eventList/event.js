import React from 'react';

function Event({ card }) {
    return (
        <div className="card">
            <img className="card-img-top" src={card.image} alt="Card cap" />
            <div className="card-block">
                <p className="card-text">{card.eventDate}</p>
                <p className="card-text">{card.eventTitle}</p>
                <p className="card-text">{card.eventLocation}</p>
            </div>
        </div>
    );
}

export default Event;

