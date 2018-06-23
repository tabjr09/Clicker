import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
  <button className="card" onClick={() => props.removeFriend(props.id)} >
    <div className="img-container"  >
      <img alt={props.name} src={props.image} /> 
    </div>
  </button>
);

export default FriendCard;


//clicked={props.clicked}
//onClick={() => props.handleIncrement}
//onClick={() => props.removeFriend(props.id)} >
//onClick={() => props.removeFriend(props.id)}




