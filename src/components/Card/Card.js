import React from "react";

import "./Card.css";
import { NavLink } from "react-router-dom";

const Card = (props) => {
  


  return (
    <div className={`card ${props.color} `}>
      {props.status ? <NavLink to={props.way}><p className={!props.status && 'work' }>{props.name}</p></NavLink> : <p className={!props.status && 'work' }>{props.name}</p>}
      
    </div>
  );
};

export default Card;
