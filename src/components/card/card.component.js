import React from 'react';

import './card.styles.css';

export const Card = props => (
    <div className="card-container">
        <h1> ID: {props.item.id}</h1>
        <p>Headline: {props.item.story.headline}</p>
        <p><button type="button" >Fav</button></p>
    </div>

);