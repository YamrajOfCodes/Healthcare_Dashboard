import React from 'react'
import "./sechedule.css"

function Schedule({title, time}) {
  return (
    <>
    
    <div className="schedule-appoin">
      <div className="title-sa">{title}</div>
      <div className="time-sa">{time}</div>
    </div>

    </>
  )
}

export default Schedule