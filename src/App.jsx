import React, { useState } from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import { Search, Bell } from "lucide-react";
import ReportCard from "./Components/ReportCard/ReportCard";
import Lungs from "../src/assets/lungs.png";
import Teeth from "../src/assets/teeth.png";
import Bone from "../src/assets/bone.png";
import { Plus } from "lucide-react";
import Appoinment from "./Components/Appoinment/Appoinment";
import Schedule from "./Components/Schedule/Schedule";
import ActivityChart from "./Components/Activity/Activitychar";


const App = () => {
  const cardElements = [
    {
      title: "Lungs",
      img: Lungs,
      date: "16 Oct 2024",
      percentage: "70%",
      color: "#AA4446",
    },
    {
      title: "Teeth",
      img: Teeth,
      date: "16 Oct 2024",
      percentage: "70%",
      color: "#73CDBB",
    },
    {
      title: "Bone",
      img: "https://static.vecteezy.com/system/resources/previews/020/032/996/non_2x/3d-icon-of-dog-bone-free-png.png",
      date: "16 Oct 2022",
      percentage: "70%",
      color: "#F96F59",
    },
  ];

  return (
    <>
      <div className="container">
        <Sidebar />

        <div className="section-dasboard">

        <div className="section-two">

          
          <div className="top">
            <Search className="search" />
            <input type="text" placeholder="Search" />
            <Bell className="bell" />
          </div>

          <div className="middle-box">

          <div className="middle">
            <div className="heading">
              <h2 style={{ color: "#0F144A" }}>Dashboard</h2>
              <span>This Week</span>
            </div>
            <div className="main-content">
              <div className="left">
                <div className="box">
                  <img src={Human} alt="" srcset="" />
                </div>
              </div>
              <div className="right">
                {cardElements?.map((element, index) => {
                  return (
                    <>
                      <ReportCard
                        index={index}
                        title={element.title}
                        img={element.img}
                        percentage={element.percentage}
                        color={element.color}
                        date={element.date}
                      />
                    </>
                  );
                })}
              </div>
            </div>
          </div>

          </div>

          <div className="activity">
            <ActivityChart></ActivityChart>
          </div>

        </div>

        <div className="section-thrid">
          <div className="profile">
            <div className="profile-img">
              <img
                src="https://cdn3d.iconscout.com/3d/premium/thumb/boy-3d-icon-download-in-png-blend-fbx-gltf-file-formats--young-male-man-people-character-avatar-pack-avatars-icons-5618502.png?f=webp"
                alt=""
              />
            </div>
            <div className="plus-icon">
              <Plus className="plus-ic"></Plus>
            </div>
          </div>

          <div className="calender">
            <div className="month-header">October 2021</div>
            <div className="weekdays">
              <div className="weekday">Mon</div>
              <div className="weekday">Tue</div>
              <div className="weekday">Wed</div>
              <div className="weekday">Thu</div>
              <div className="weekday">Fri</div>
              <div className="weekday">Sat</div>
              <div className="weekday">Sun</div>
            </div>

            <div className="days">
              <div className="day">
                <div className="day-number">25</div>
                <div className="time-slot">10:00</div>
                <div className="time-slot">11:00</div>
                <div className="time-slot">12:00</div>
              </div>

              <div className="day active">
                <div className="day-number">26</div>
                <div className="time-slot">08:00</div>
                <div className="time-slot active-time">09:00</div>
                <div className="time-slot">10:00</div>
              </div>

              <div className="day">
                <div className="day-number">27</div>
                <div className="time-slot">12:00</div>
                <div className="time-slot empty-slot">—</div>
                <div className="time-slot">13:00</div>
              </div>

              <div className="day">
                <div className="day-number">28</div>
                <div className="time-slot">10:00</div>
                <div className="time-slot fade">11:00</div>
                <div className="time-slot empty-slot">—</div>
              </div>

              <div className="day">
                <div className="day-number">29</div>
                <div className="time-slot empty-slot">—</div>
                <div className="time-slot">14:00</div>
                <div className="time-slot">14:00</div>
              </div>

              <div className="day">
                <div className="day-number">30</div>
                <div className="time-slot fade">12:01</div>
                <div className="time-slot">14:00</div>
                <div className="time-slot">15:00</div>
              </div>

              <div className="day">
                <div className="day-number">31</div>
                <div className="time-slot fade">10:00</div>
                <div className="time-slot">10:00</div>
                <div className="time-slot">11:00</div>
              </div>
            </div>
          </div>

          <div className="appoinment">
            <Appoinment title="Dentist" time="09:00 - 11:00" doctor="Dr. Cameron Williamson" classn="appoinment-box"></Appoinment>

            <Appoinment title="Physiotherapy Appointmnet" time="11:00 - 12:00" doctor="Dr. Kevin Djones" classn="appoinment-fade"></Appoinment>
          </div>

          <div className="schedule">
            <div className="schedule-headline">
                <h2>The Upcoming Schedule</h2>
            </div>

            <div className="schedule-day">
                <h4>On Thusday</h4>
            </div>

            <div className="schedule-book">
                 <Schedule title="Health checkup complete" time="11:00 AM"></Schedule>
            <Schedule title="Ophthalmologist" time="14:00 PM"></Schedule>
            </div>

            <div className="schedule-day">
                <h4>On Saturday</h4>
            </div>

            <div className="schedule-book">
                 <Schedule title="Cardiologist" time="12:00 AM"></Schedule>
            <Schedule title="Neurologist" time="16:00 PM"></Schedule>
            </div>
           

          </div>

        </div>

        </div>

      </div>
    </>
  );
};

export default App;
