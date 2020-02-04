import React, { useEffect, useState, useContext } from "react";
import CalendarContext from "../../context/calendarContext";
import Buttons from "./Buttons";
import Day from "./Day";

const Calendar = () => {
  const [jumpMonth, setJumpMonth] = useState(0);
  const [jumpYear, setJumpYear] = useState(2020);
  const [jumpToggled, setJumpToggled] = useState(false);
  const [dayToggled, setDayToggled] = useState(false);

  // onChange methods to jump a new date
  const onYearChange = e => {
    setJumpYear(parseInt(e));
  };

  const onMonthChange = e => {
    setJumpMonth(parseInt(e));
  };

  // Toggle Day Detail Box
  const toggleDay = c => {
    setDayToggled(c);
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
    currentEvents
  } = calendarContext;

  // Get current date when the component mounts
  useEffect(() => {
    const date = new Date();
    getCurrentDate(date.getFullYear(), date.getMonth(), date.getDate());
    // eslint-disable-next-line
  }, []);

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
            <Day key={index} day={day} toggleDay={toggleDay} />
          ))}
        </div>
      </div>

      {/* Day Detail Box */}
      <div
        className={
          dayToggled ? "day-detail toggled box-shadow" : "day-detail box-shadow"
        }
      >
        <button
          className="close-btn"
          onClick={() => {
            toggleDay(false);
          }}
        >
          <i className="fas fa-times-circle"></i>
        </button>
        <div className="day-detail__events">
          <ul>
            {currentEvents.length > 0 ? (
              currentEvents.map((e, index) => (
                <li key={index}>{e.description}</li>
              ))
            ) : (
              <p>There isn't any event for today.</p>
            )}
          </ul>
        </div>
        <hr />
        <a
          href="https://tr.wikipedia.org/wiki/11_Mart"
          className="day-detail__link"
        >
          On this day in history
        </a>
      </div>
    </div>
  );
};

export default Calendar;
