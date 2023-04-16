import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import PageHeading from "../../Components/PageHeading/PageHeading";
import TeamCard from "../../Components/Cards/TeamCard/TeamCard";
import sampleImage4 from "../../Assets/Images/sampleImg4.png";

const Team = () => {
  const filter = [
    {
      id: 1,
      name: "Leadership",
    },
    {
      id: 2,
      name: "Operations",
    },
    {
      id: 3,
      name: "Design",
    },
    {
      id: 4,
      name: "Development",
    },
    {
      id: 5,
      name: "Editorial",
    },
    {
      id: 6,
      name: "MultiMedia",
    },
    {
      id: 7,
      name: "Outreach",
    },
  ];
  const teamData = [
    {
      id: 1,
      img: sampleImage4,
      name: "Somesh Solanki",
      por: "Design Lead",
      vertical: "Design",
      linkedIn: "",
      facebook: "",
      instagram: "",
    },
    {
      id: 2,
      img: sampleImage4,
      name: "Somesh Solanki",
      por: "Design Lead",
      vertical: "Design",
      linkedIn: "",
      facebook: "",
      instagram: "",
    },
    {
      id: 3,
      img: sampleImage4,
      name: "Somesh Solanki",
      por: "Design Lead",
      vertical: "Design",
      linkedIn: "",
      facebook: "",
      instagram: "",
    },
    {
      id: 4,
      img: sampleImage4,
      name: "Somesh Solanki",
      por: "Design Lead",
      vertical: "Design",
      linkedIn: "",
      facebook: "",
      instagram: "",
    },
  ];
  return (
    <div className="page">
      <Navbar />
      <div className="heading-section">
        <PageHeading title="Our Team" subTitle="We host many tech events" />
        <div className="filter">
          {filter.map((item) => {
            return (
              <span
                key={item.id}
                className={
                  item.id === filter.length
                    ? "filter-item-right filter-item"
                    : item.id === 1
                    ? "filter-item-left filter-item"
                    : "filter-item"
                }
              >
                {item.name}
              </span>
            );
          })}
        </div>
      </div>
      <div className="card-grid">
        {teamData.map((member, id) => {
          return <TeamCard key={id} data={member} />;
        })}
      </div>
    </div>
  );
};

export default Team;
