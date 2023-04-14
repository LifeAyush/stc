import React from "react";
import "./events.css";
import Navbar from "../../Components/Navbar/Navbar";
import PageHeading from "../../Components/PageHeading/PageHeading";
import sampleImage1 from "../../Assets/Images/sampleImg1.png";
import sampleImage2 from "../../Assets/Images/sampleImg2.png";
import sampleImage3 from "../../Assets/Images/sampleImg3.png";

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
  const eventData = [
    {
      id: 1,
      img: sampleImage1,
      group: "SDS Labs",
      title: "UX review presentations",
      date: "15/08/2022",
      pocImg: sampleImage3,
      pocName: "Somesh Solanki",
      pocContact: "9461801990",
    },
    {
      id: 2,
      img: sampleImage2,
      group: "DSG",
      title: "ML review presentations",
      date: "18/08/2022",
      pocImg: sampleImage3,
      pocName: "Aaryan Garg",
      pocContact: "9461801125",
    },
    {
      id: 3,
      img: sampleImage2,
      group: "DSG",
      title: "ML review presentations",
      date: "18/08/2022",
      pocImg: sampleImage3,
      pocName: "Aaryan Garg",
      pocContact: "9461801125",
    },
    {
      id: 4,
      img: sampleImage2,
      group: "DSG",
      title: "ML review presentations",
      date: "18/08/2022",
      pocImg: sampleImage3,
      pocName: "Aaryan Garg",
      pocContact: "9461801125",
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
