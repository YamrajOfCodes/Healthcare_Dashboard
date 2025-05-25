import React from 'react'
import "./appointment.css"
import { CircleDashedIcon } from "lucide-react";


function Appoinment({title, time, doctor, classn}) {
  return (
    <>
    
    <div className={classn}>
        <div className="appoinment-title">
            <div className="title-appointment">
            <p>{title}</p>
            </div>
            <div className="title-icon">
            <CircleDashedIcon className='tc'></CircleDashedIcon>
            </div>
        </div>
        <div className="appoinment-time">
            {time}
        </div>
        <div className="doctor-name">
            <p>{doctor}</p>
        </div>

    </div>

    </>
  )
}

export default Appoinment