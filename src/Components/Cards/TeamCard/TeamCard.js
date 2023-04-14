import React from "react";
import "./teamCard.css";
import img4 from "../../../Assets/Images/sampleImage4.svg";
import linkdin from "../../../Assets/Images/l1.svg";
import fb from "../../../Assets/Images/fb1.svg";
import insta from "../../../Assets/Images/insta1.svg";

const TeamCard = () => {
  return (
    <div className="tcard">
      <img src={img4} alt="image" />
      <div className="blur-1">
        <h3>Alisa Hester</h3>
        <div className="blur-1-text">
          <p className="p1">PM,Hourglass</p>
          <p className="p2">Web Design Agency</p>
        </div>
      </div>
      <div className="blur-2">
        <h3>Alisa Hester</h3>
        <div className="blur-1-text">
          <p className="p1">PM,Hourglass</p>
          <p className="p2">Web Design Agency</p>
        </div>
        <div className="blur">
          <a href="">
            <img src={linkdin} alt="" />
          </a>
          <a href="">
            <img src={fb} alt="" />
          </a>
          <a href="">
            <img src={insta} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
