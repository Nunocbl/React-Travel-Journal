

import React from "react";

export default function Card(props) {
    const info = props.item
    return (
        <div className="card">
            <div className="card-imgContainer">
                <img src={info.imageUrl}></img>
            </div>

            <div className="information">
                <div className="location">
                    <span className="material-icons">
                        location_on
                    </span>
                    <p>{info.location}</p>
                    <a href={info.googleMapsUrl}>View on Google Maps</a>
                </div>

                <h1>{info.title}</h1>

                <p className="dates">{info.startDate} - {info.endDate}</p>

                <p className="description">{info.description}</p>
            </div>
        </div>
    )
}