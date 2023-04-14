import React from 'react'
import "./groupCard.css"
import img1 from "../../../Assets/Images/img1.svg"
import linkdin from "../../../Assets/Images/linkdin.svg"
import fb from "../../../Assets/Images/fb.svg"
import insta from "../../../Assets/Images/insta.svg"
import {FiArrowUpRight} from "react-icons/fi"

const GroupCard = () => {
  return (
    <div className="gcard">
      <div className='gcard-top'>
        <img src={img1} alt="image" />
        <div className='blur'>
          <a href=""><img src={linkdin} alt="" /></a>
          <a href=""><img src={fb} alt="" /></a>
          <a href=""><img src={insta} alt="" /></a>
        </div>
        </div>
        <h1>Migrating To Linear 101</h1>
        <p>Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.</p>
        <a href="">Read Post <FiArrowUpRight /></a>
    </div>
  )
}

export default GroupCard