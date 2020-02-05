import React, { useEffect, useState, useContext } from "react";
import CalendarContext from "../../context/calendarContext";
import Buttons from "./Buttons";
import Day from "./Day";
import DayDetail from "./DayDetail";
import MyEvents from "./MyEvents";
import NewEvent from "./NewEvent";

const Calendar = () => {
  const [jumpMonth, setJumpMonth] = useState(0);
  const [jumpYear, setJumpYear] = useState(2020);
  const [jumpToggled, setJumpToggled] = useState(false);
  const body = document.getElementsByTagName("body");

  // onChange methods to jump a new date
  const onYearChange = e => {
    setJumpYear(parseInt(e));
  };

  const onMonthChange = e => {
    setJumpMonth(parseInt(e));
  };

  // Months array
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

  // Init context
  const calendarContext = useContext(CalendarContext);
  const {
    getCurrentDate,
    currentMonth,
    currentYear,
    days,
    jumpTo,
    currentEvents,
    detailSidebarToggled,
    eventsSidebarToggled,
    newEventSidebarToggled
  } = calendarContext;

  // Get current date when the component mounts
  useEffect(() => {
    const date = new Date();
    getCurrentDate(date.getFullYear(), date.getMonth(), date.getDate());
    // eslint-disable-next-line
  }, []);

  if (detailSidebarToggled || eventsSidebarToggled || newEventSidebarToggled) {
    body[0].style.overflowY = "hidden";
  } else {
    body[0].style.overflowY = "visible";
  }

  return (
    <div className="calendar">
      <div className="title">
        {months[currentMonth]} {currentYear}{" "}
        <button
          className={jumpToggled ? "edit-date-btn toggled" : "edit-date-btn"}
          onClick={() => {
            setJumpToggled(!jumpToggled);
          }}
        >
          <i className="fas fa-pencil-alt"></i>
        </button>
        <Buttons />
        <div
          className={jumpToggled ? "dropdown-jump toggled" : "dropdown-jump"}
        >
          <select
            className="dropdown-jump__month"
            defaultValue={jumpMonth}
            onChange={e => {
              onMonthChange(e.target.value);
            }}
          >
            <option value="0">January</option>
            <option value="1">February</option>
            <option value="2">March</option>
            <option value="3">April</option>
            <option value="4">May</option>
            <option value="5">June</option>
            <option value="6">July</option>
            <option value="7">August</option>
            <option value="8">September</option>
            <option value="9">October</option>
            <option value="10">November</option>
            <option value="11">December</option>
          </select>
          <input
            type="number"
            className="dropdown-jump__year"
            min="0"
            onChange={e => {
              onYearChange(e.target.value);
            }}
            value={jumpYear}
          />
          <button
            className="dropdown-jump__btn"
            onClick={() => {
              jumpTo(jumpMonth, jumpYear);
              setJumpToggled(false);
            }}
          >
            Go
          </button>
        </div>
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
      <DayDetail />
      <MyEvents />
      <NewEvent />
    </div>
  );
};

export default Calendar;
