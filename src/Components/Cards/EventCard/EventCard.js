import React from 'react'
import "./eventCard.css"
import img2 from "../../../Assets/Images/img2.svg"
import img3 from "../../../Assets/Images/sampleImage3.svg"

const EventCard = () => {
  return (
    <div className='ecard'>
        <img src={img2} alt="" />
        <p className='ecard-m1'>SDS Labs</p>
        <h1>UX review presentations</h1>
        <p className='date'>Date : 15/08/2022</p>
        <div className='ecard-b'>
          <img src={img3} alt="" />
          <div className='ecard-b-1'>
            <h4>Somesh Solanki</h4>
            <p>9461801990</p>
          </div>
        </div>
    </div>
  )
}

export default EventCard