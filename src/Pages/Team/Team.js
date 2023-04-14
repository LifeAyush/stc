import React from "react";
import "./team.css";
import Navbar from "../../Components/Navbar/Navbar";
import PageHeading from "../../Components/PageHeading/PageHeading";

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
    </div>
  );
};

export default Team;
