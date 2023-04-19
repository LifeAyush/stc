import React from "react";
import "./miniSection.css";
import member from "../../Assets/Images/memberImage.png";
import TeamCard from "../Cards/TeamCard/TeamCard";
import PrimaryBtn from "../PrimaryBtn/PrimaryBtn";

const HomeTeam = () => {
  const teamData = [
    {
      id: 1,
      img: member,
      name: "Aaryan Bidani",
      por: "General Secretary Technical Affairs",
      vertical: "Leadership",
      linkedIn: "",
      instagram: "",
    },
    {
      id: 2,
      img: member,
      name: "Ashutosh Singla",
      por: "Deputy General Secretary Technical Affairs",
      vertical: "Leadership",
      linkedIn: "",
      instagram: "",
    },
    {
      id: 3,
      img: member,
      name: "Aaryan Garg",
      por: "Tech Manager",
      vertical: "Leadership",
      linkedIn: "",
      instagram: "",
    },
    {
      id: 4,
      img: member,
      name: "Ayush Patil",
      por: "Tech Lead",
      vertical: "Development",
      linkedIn: "",
      instagram: "",
    },
  ];
  return (
    <div className="ms ms-dark">
      <div className="ms-title-flex">
        <h1 className="ms-title-flex-title ms-dark">Latest Events</h1>
        <PrimaryBtn link="/team" text="View All Team" type="light" />
      </div>
      <div className="card-grid">
        {teamData.map((member, id) => {
          if (member.id < 4) {
            return <TeamCard key={id} data={member} />;
          }
        })}
      </div>
    </div>
  );
};

export default HomeTeam;
