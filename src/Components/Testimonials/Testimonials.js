import React from "react";
import "./testimonials.css";
import Testimonial from "./Testimonial";
import testimonialImage from "../../Assets/Images/testimonialImage.png";

const Testimonials = () => {
  const testimonialData = [
    {
      id: 1,
      para: "Love the simplicity of the service and the prompt customer support. We can’t imagine working without it",
      name: "Prof. Karun Rawat",
      por: "Faculty Advisor, STC",
      img: testimonialImage,
    },
  ];
  return (
    <div className="testmonials">
      <div className="testimonials-header">
        <h1 className="testimonials-title">Testimonials</h1>
        <h4 className="testimonials-subtitle">
          Insights from esteemed faculty
        </h4>
      </div>
      {testimonialData.map((testimonial) => {
        return <Testimonial data={testimonial} />;
      })}
    </div>
  );
};

export default Testimonials;
