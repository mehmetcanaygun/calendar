import React, { useState, useContext } from "react";
import CalendarContext from "../../context/calendarContext";
import Buttons from "./Buttons";
import Day from "./Day";

const Calendar = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  const calendarContext = useContext(CalendarContext);
  const {
    getCurrentDate,
    currentMonth,
    currentYear,
    days,
    jumpTo
  } = calendarContext;

  useState(() => {
    const date = new Date();
    getCurrentDate(date.getFullYear(), date.getMonth(), date.getDate());
    // eslint-disable-next-line
  }, []);

  return (
    <div className="calendar">
      {/* <div className="title">
        <select id="">
          <option value="January">January</option>
          <option value="February">February</option>
          <option value="March">March</option>
          <option value="April">April</option>
          <option value="May">May</option>
          <option value="June">June</option>
          <option value="July">July</option>
          <option value="August">August</option>
          <option value="September">September</option>
          <option value="October">October</option>
          <option value="November">November</option>
          <option value="December">December</option>
        </select>
        <input type="number" value={currentYear} />
      </div> */}
      <div className="title">
        {months[currentMonth]} {currentYear}{" "}
        <button
          onClick={() => {
            jumpTo();
          }}
        >
          <i className="fas fa-pencil-alt"></i>
        </button>
        <Buttons />
      </div>
      <div className="calendar-table">
        <div className="thead">
          <div>Monday</div>
          <div>Tuesday</div>
          <div>Wednesday</div>
          <div>Thursday</div>
          <div>Friday</div>
          <div>Saturday</div>
          <div>Sunday</div>
        </div>
        <div className="tbody">
          {days.map((day, index) => (
            <Day key={index} day={day} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
