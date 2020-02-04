import React, { useContext } from "react";
import CalendarContext from "../../context/calendarContext";

const Buttons = () => {
  const calendarContext = useContext(CalendarContext);
  const { prevMonth, nextMonth } = calendarContext;

  return (
    <div className="buttons">
      <button
        className="prev-btn"
        onClick={() => {
          prevMonth();
        }}
      >
        <i className="fas fa-chevron-left"></i>
      </button>
      <button
        className="next-btn"
        onClick={() => {
          nextMonth();
        }}
      >
        <i className="fas fa-chevron-right"></i>
      </button>
    </div>
  );
};

export default Buttons;
