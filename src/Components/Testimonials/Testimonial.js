import React from "react";
import "./testimonials.css";

const Testimonial = ({ data }) => {
  return (
    <div className="testimonial">
      <div className="testimonial-content">
        <p className="testimonial-para">{data.para}</p>
        <div className="testimonial-por-flex">
          <div className="testimonial-por-name">- {data.name}</div>
          <div className="testimonial-por">{data.por}</div>
        </div>
      </div>
      <img src={data.img} alt="STC" className="testimonial-img" />
    </div>
  );
};

export default Testimonial;
