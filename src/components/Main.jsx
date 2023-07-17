import React from "react";

function Main(props) {
    return (
        <div>
        <div className="main--content">
            <img className="location--img" src={props.img} alt={props.location}/>
            <div className="info">
                <p className="country">{props.country}</p>
                <h1>{props.location}</h1>
                <p className="date">{props.date}</p>
                <p>{props.info}</p>
            </div>
        </div>
        <hr />
    </div>
    )
}

export default Main