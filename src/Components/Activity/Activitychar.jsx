import React from "react";
import "./activity.css";

const ActivityChart = () => {
  return (
    <div className="activity-container">
      <div className="activity-header">
        <h2 className="activity-title">Activity</h2>
        <p className="activity-subtitle">3 appointments this week</p>
      </div>
      
      <div className="chart-container">
        {/* Monday */}
        <div className="day-column">
          <div className="bars-container">
            <div className="bar primary"></div>
            <div className="bar secondary"></div>
            <div className="bar tertiary"></div>
          </div>
          <div className="day-label">Mon</div>
        </div>
        
        {/* Tuesday */}
        <div className="day-column">
          <div className="bars-container">
            <div className="bar primary"></div>
            <div className="bar secondary"></div>
            <div className="bar tertiary"></div>
            <div className="bar tertiary"></div>
          </div>
          <div className="day-label">Tues</div>
        </div>
        
        {/* Wednesday */}
        <div className="day-column">
          <div className="bars-container">
            <div className="bar tertiary"></div>
            <div className="bar secondary"></div>
            <div className="bar primary"></div>
          </div>
          <div className="day-label">Wed</div>
        </div>
        
        {/* Thursday */}
        <div className="day-column">
          <div className="bars-container">
            <div className="bar tertiary"></div>
            <div className="bar secondary"></div>
            <div className="bar tertiary"></div>
          </div>
          <div className="day-label">Thurs</div>
        </div>
        
        {/* Friday */}
        <div className="day-column">
          <div className="bars-container">
            <div className="bar primary"></div>
            <div className="bar secondary"></div>
            <div className="bar tertiary"></div>
          </div>
          <div className="day-label">Fri</div>
        </div>
        
        {/* Saturday */}
        <div className="day-column">
          <div className="bars-container">
            <div className="bar tertiary"></div>
            <div className="bar primary"></div>
            <div className="bar secondary"></div>
            <div className="bar tertiary"></div>
          </div>
          <div className="day-label">Sat</div>
        </div>
        
        {/* Sunday */}
        <div className="day-column">
          <div className="bars-container">
            <div className="bar primary"></div>
            <div className="bar secondary"></div>
          </div>
          <div className="day-label">Sun</div>
        </div>
      </div>
    </div>
  );
};

export default ActivityChart;