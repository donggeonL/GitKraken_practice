import React from "react";
import { useState, useEffect } from "react";
import "./Clock.css";


const Clock = () => {
  const [time, setTime] = useState("");
  const [toDayV, setToday] = useState("");

  function formatTime(val) {
    if (val < 10) {
      return "0";
    } else {
      return "";
    }
  }

  useEffect(() => {
    const timerID = setInterval(() => tick(), 100);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  useEffect(() => {
    const toDayID = () => today()

    return toDayID;
  });

  function tick() {
    const d = new Date();
    const h = d.getHours();
    const m = d.getMinutes();
    const s = d.getSeconds();

  setTime(
      formatTime(h) + h + " : " + formatTime(m) + m + " : " + formatTime(s) + s
      );
  }

  function today() {
    const toDay = new Date();
    const year = toDay.getFullYear();
    const month = toDay.getMonth() + 1;
    const dayValue = toDay.getDate();
    console.log("?? = " + formatTime(month) + month + " - " + formatTime(dayValue) + dayValue );

    setToday(year + " - " + formatTime(month) + month + " - " + formatTime(dayValue) + dayValue);
  }

  return (
    <div className="clock_container">
      <h3 className="intro">Hi, There Welcome DonggeonL Page</h3>
      <div className="screen">
      <h1 className="day">{toDayV}</h1>
      <h1 className="time">{time}</h1>
      </div>

      <div className="box">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Clock;
