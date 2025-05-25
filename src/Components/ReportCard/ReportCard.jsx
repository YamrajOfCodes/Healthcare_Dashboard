import React from 'react'
import "./reportcard.css"
import lungspng from "../../assets/lungs.png"

const ReportCard = ({title,img,date,percentage,color,index}) => {
  return (
    <div className='containerr'>
        <div className="top-section" >
            <div className='img-container'>
                <img src={img} alt="lung's image" />
            </div>
            <h3>{title}</h3>
        </div>
        <div className="bottom-section">
            <p>Date: {date}</p>
            <div className="progress">
                <div className="progress-bar" style={{width: `${percentage}%`, backgroundColor: color}}></div>
            </div>
        </div>
    </div>
  )
}

export default ReportCard