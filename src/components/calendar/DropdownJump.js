import React, { useState, useContext } from "react";
import CalendarContext from "../../context/calendarContext";

const DropdownJump = ({ jumpToggled, setJumpToggled }) => {
  const [jumpMonth, setJumpMonth] = useState(1);
  const [jumpYear, setJumpYear] = useState(2020);

  const calendarContext = useContext(CalendarContext);
  const { jumpTo } = calendarContext;

  // onChange methods to jump a new date
  const onYearChange = e => {
    setJumpYear(parseInt(e));
  };

  const onMonthChange = e => {
    setJumpMonth(parseInt(e));
  };

  return (
    <div className={jumpToggled ? "dropdown-jump toggled" : "dropdown-jump"}>
      <select
        className="dropdown-jump__month"
        defaultValue={jumpMonth}
        onChange={e => {
          onMonthChange(e.target.value);
        }}
      >
        <option value="1">January</option>
        <option value="2">February</option>
        <option value="3">March</option>
        <option value="4">April</option>
        <option value="5">May</option>
        <option value="6">June</option>
        <option value="7">July</option>
        <option value="8">August</option>
        <option value="9">September</option>
        <option value="10">October</option>
        <option value="11">November</option>
        <option value="12">December</option>
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
  );
};

export default DropdownJump;
