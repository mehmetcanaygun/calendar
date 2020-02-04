import React, { useState, useContext } from "react";
import CalendarContext from "../../context/calendarContext";
import Day from "./Day";

const Calendar = () => {
  const calendarContext = useContext(CalendarContext);
  const { getCurrentDate, currentMonth, currentYear, days } = calendarContext;

  useState(() => {
    getCurrentDate();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="calendar">
      <p className="title">
        {currentMonth} {currentYear}{" "}
        <span>
          <button>
            <i className="fas fa-pencil-alt"></i>
          </button>
        </span>
      </p>
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
