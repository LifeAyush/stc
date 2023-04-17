import React from "react";
import "./teamCard.css";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

const TeamCard = ({ data }) => {
  return (
    <div className="tcard">
      <img src={data.img} alt="" />
      <div className="tcard-mid">
        <h1>{data.name}</h1>
        <p>{data.por}</p>
      </div>
      <div className="team-links">
        <a href={data.linkedIn} target="_blank" rel="noreferrer">
          <AiFillLinkedin />
        </a>
        <a href={data.instagram} target="_blank" rel="noreferrer">
          <AiOutlineInstagram />
        </a>
      </div>
    </div>
  );
};

export default TeamCard;
