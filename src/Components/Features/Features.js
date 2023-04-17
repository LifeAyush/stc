import React, { useEffect, useState } from "react";
import "./features.css";
import PrimaryBtn from "../PrimaryBtn/PrimaryBtn";
import Feature from "./Feature";
import mockup1 from "../../Assets/Images/mockup1.png";
import mockup2 from "../../Assets/Images/mockup2.png";

const Features = () => {
  const [active, setActive] = useState(1);
  const [mockup, setMockup] = useState(mockup1);
  const features = [
    {
      id: 1,
      title: "TechShila",
      desc: "TechShila is the annual Inter Bhawan Tech Meet of IIT Roorkee. All Bhawans compete amongst each other to win the general championship",
    },
    {
      id: 2,
      title: "Technical Weekend School",
      desc: "Introducing freshers to the various technical groups of IIT Roorkee, the Technical Weekend School is a series of Intro Talks managed and scheduled by STC",
    },
    {
      id: 3,
      title: "Techzbition",
      desc: "Techzbition is the annual technical exhibition of IIT Roorkee. Students showcase their talent and innovation through their projects in this exhibition",
    },
  ];
  useEffect(() => {
    if (active === 1) {
      setMockup(mockup1);
    } else if (active === 2) {
      setMockup(mockup2);
    } else {
      setMockup(mockup1);
    }
  }, [active]);
  return (
    <div className="features" id="features">
      <div className="features-header">
        <h4 className="features-subtitle">About Us</h4>
        <p className="features-para">
          STC is a community of passionate students dedicated to promoting
          innovation, creativity, and technical excellence through various
          events, workshops, and projects.
        </p>
      </div>
      <div className="features-flex">
        <div className="features-flex-content">
          {features.map((feature) => {
            return (
              <Feature
                data={feature}
                active={active === feature.id}
                key={feature.id}
                setActive={setActive}
              />
            );
          })}
        </div>
        <img src={mockup} alt="STC" className="features-mockup" />
      </div>
      <div className="features-btn">
        <PrimaryBtn link="#metrics" text="Learn More" type="dark" />
      </div>
    </div>
  );
};

export default Features;
