import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import PageHeading from "../../Components/PageHeading/PageHeading";
import TeamCard from "../../Components/Cards/TeamCard/TeamCard";
import member from "../../Assets/Images/memberImage.png";
import Footer from "../../Components/Footer/Footer";

const Team = () => {
  const [filter, setFilter] = useState("All");
  const filterOptions = [
    {
      id: 1,
      name: "All",
    },
    {
      id: 2,
      name: "Leadership",
    },
    {
      id: 3,
      name: "Operations",
    },
    {
      id: 4,
      name: "Design",
    },
    {
      id: 5,
      name: "Development",
    },
    {
      id: 6,
      name: "Editorial",
    },
    {
      id: 7,
      name: "MultiMedia",
    },
    {
      id: 8,
      name: "Outreach",
    },
  ];
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
    <>
      <div className="page">
        <Navbar />
        <div className="heading-section">
          <PageHeading title="Our Team" subTitle="We host many tech events" />
          <div className="filter">
            {filterOptions.map((item) => {
              return (
                <span
                  key={item.id}
                  className={
                    item.id === filterOptions.length
                      ? "filter-item-right filter-item"
                      : item.id === 1
                      ? "filter-item-left filter-item"
                      : "filter-item"
                  }
                  onClick={() => setFilter(item.name)}
                >
                  {item.name}
                </span>
              );
            })}
          </div>
        </div>
        <div className="card-grid">
          {teamData.map((member, id) => {
            if (filter === "All") {
              return <TeamCard key={id} data={member} />;
            } else if (member.vertical === filter) {
              return <TeamCard key={id} data={member} />;
            }
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Team;
