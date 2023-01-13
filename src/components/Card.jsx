import React from "react";

function Card(props){
    return(
      <div className="card" >
          <img className="card-img" src={`../images/${props.imageUrl}`}/>
          <div className="card-stat">
          <p><img className="map-img" src="../images/map.png" /> <span>{props.location}</span><a className="gmap-link" href={props.googleMapsUrl}>View on Google Maps</a> </p>
          <h1 className="card-title">{props.title}</h1>
          <h4 className="card-date"><span>{props.startDate}</span> - <span>{props.endDate}</span></h4>
          <p className="card-description">{props.description}</p>
          </div> 
      </div>

    )
}

export default Card