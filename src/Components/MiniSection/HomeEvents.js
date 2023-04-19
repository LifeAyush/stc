import React from "react";
import "./miniSection.css";
import EventCard from "../Cards/EventCard/EventCard";
import PrimaryBtn from "../PrimaryBtn/PrimaryBtn";
import poc from "../../Assets/Images/poc.png";

const HomeEvents = () => {
  const eventData = [
    {
      id: 1,
      group: "SDS Labs",
      title: "UX review presentations",
      date: "15/08/2022",
      desc: "As the sun slowly set over the horizon, a gentle breeze rustled the leaves of the tall trees in the distance, while a small group of birds chirped merrily on a nearby branch. In the distance, a lone wolf howled at the moon as a small stream trickled its way down the rocky terrain, glistening in the fading light",
      pocImg: poc,
      pocName: "Somesh Solanki",
      pocContact: "9461801990",
    },
    {
      id: 2,
      group: "DSG",
      title: "ML review presentations",
      date: "17/10/2021",
      desc: "As the sun slowly set over the horizon, a gentle breeze rustled the leaves of the tall trees in the distance, while a small group of birds chirped merrily on a nearby branch. In the distance, a lone wolf howled at the moon as a small stream trickled its way down the rocky terrain, glistening in the fading light",
      pocImg: poc,
      pocName: "Aryan Garg",
      pocContact: "9461801125",
    },
    {
      id: 3,
      group: "DSG",
      title: "ML review presentations",
      date: "17/10/2021",
      desc: "As the sun slowly set over the horizon, a gentle breeze rustled the leaves of the tall trees in the distance, while a small group of birds chirped merrily on a nearby branch. In the distance, a lone wolf howled at the moon as a small stream trickled its way down the rocky terrain, glistening in the fading light",
      pocImg: poc,
      pocName: "Aryan Garg",
      pocContact: "9461801125",
    },
    {
      id: 4,
      group: "DSG",
      title: "ML review presentations",
      date: "17/10/2021",
      desc: "As the sun slowly set over the horizon, a gentle breeze rustled the leaves of the tall trees in the distance, while a small group of birds chirped merrily on a nearby branch. In the distance, a lone wolf howled at the moon as a small stream trickled its way down the rocky terrain, glistening in the fading light",
      pocImg: poc,
      pocName: "Aryan Garg",
      pocContact: "9461801125",
    },
  ];
  return (
    <div className="ms ms-light">
      <div className="ms-title-flex">
        <h1 className="ms-title-flex-title ms-light">Latest Events</h1>
        <PrimaryBtn link="/events" text="View All Events" type="dark" />
      </div>
      <div className="card-grid">
        {eventData.map((event, id) => {
          if (event.id < 4) {
            return <EventCard key={id} data={event} />;
          }
        })}
      </div>
    </div>
  );
};

export default HomeEvents;
