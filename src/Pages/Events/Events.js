import React from "react";
import "./events.css";
import Navbar from "../../Components/Navbar/Navbar";
import PageHeading from "../../Components/PageHeading/PageHeading";

const Events = () => {
  const filter = [
    {
      id: 1,
      name: "Today",
    },
    {
      id: 2,
      name: "Tomorrow",
    },
    {
      id: 3,
      name: "Upcoming Week",
    },
    {
      id: 4,
      name: "This Month",
    },
  ];
  return (
    <div className="page">
      <Navbar />
      <div className="heading-section">
        <PageHeading title="Our Events" subTitle="We host many tech events" />
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

export default Events;
