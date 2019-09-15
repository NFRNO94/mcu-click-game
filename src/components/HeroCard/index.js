import React from "react";
import "./style.css";

function HeroCard(props) {
    return (
        <div className="hero" onClick={() => props.clickCount(props.id)}>
            <div className="gallery">
                <img src={props.image} alt={props.name} width="600" height="400" />
                <div className="desc"><strong>{props.name}</strong></div>
            </div>
        </div>
    )
}

export default HeroCard;