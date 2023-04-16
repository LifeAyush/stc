import React from "react";
import "./groupCard.css";
import img1 from "../../../Assets/Images/groupLogo.svg";
import { FiArrowUpRight } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const GroupCard = (props) => {
  console.log(props);
  return (
    <div className="gcard">
      <div className="gcard-top">
        <h2>{props.data.name}</h2>
        
        <img src={props.data.logo} alt="" />
      </div>
      <div className="gcard-mid">
        <p>{props.data.desc}</p>
        <a href={props.data.notion}>
          Resources <FiArrowUpRight />
        </a>
      </div>
      <div className="gcard-bottom">
        <a href={props.data.linkedIn}>
          <FaLinkedinIn />
        </a>
        <a href={props.data.instagram}>
          <FaInstagram />
        </a>
        <a href={props.data.github}>
          <FaGithub />
        </a>
        <a href={props.data.website}>
          <FaInstagram />
        </a>
        <a href={props.data.facebook}>
          <FaFacebookF />
        </a>
      </div>
    </div>
  );
};

export default GroupCard;
