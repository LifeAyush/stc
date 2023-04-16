import React from "react";
import "./eventCard.css";

const EventCard = (props) => {
  return (
    <div className="ecard">
      <h7>{props.data.group}</h7>
      <h3>{props.data.title}</h3>
      <h5>Date: {props.data.date}</h5>
      <p>{props.data.desc}</p>
      <div className="ecard-b">
        <img src={props.data.pocImg} alt="" />
        <div className="ecard-b2">
          <h6>{props.data.pocName}</h6>
          <h5>{props.data.pocContact}</h5>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
