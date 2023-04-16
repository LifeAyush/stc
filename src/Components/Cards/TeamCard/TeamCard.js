import React from "react";
import "./teamCard.css";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const TeamCard = (props) => {
  console.log(props.data.name);
  return (
    <div className="tcard">
      <img src={props.data.img} alt="" />
      <div className="tcard-mid">
        <h1>{props.data.name}</h1>
        <p>{props.data.por}</p>
      </div>
      <div className="links">
        <a href={props.data.linkedIn}>
          <FaLinkedinIn />
        </a>
        <a href={props.data.instagram}>
          <FaInstagram />
        </a>
      </div>
    </div>
  );
};

export default TeamCard;
