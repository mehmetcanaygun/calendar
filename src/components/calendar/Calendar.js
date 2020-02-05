import React, { useEffect, useState, useContext } from "react";
import CalendarContext from "../../context/calendarContext";
import Buttons from "./Buttons";
import DropdownJump from "./DropdownJump";
import Day from "./Day";
import DayDetail from "./DayDetail";
import MyEvents from "./MyEvents";
import NewEvent from "./NewEvent";

const Calendar = () => {
  const [jumpToggled, setJumpToggled] = useState(false);
  const body = document.getElementsByTagName("body");

  // Months array
  const months = [
    "zero",
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
    detailSidebarToggled,
    eventsSidebarToggled,
    newEventSidebarToggled
  } = calendarContext;

  // Get current date when the component mounts
  useEffect(() => {
    const date = new Date();
    getCurrentDate(date.getFullYear(), date.getMonth() + 1, date.getDate());
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
        <DropdownJump
          jumpToggled={jumpToggled}
          setJumpToggled={setJumpToggled}
        />
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
