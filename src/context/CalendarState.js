import React, { useReducer } from "react";
import CalendarContext from "./calendarContext";
import CalendarReducer from "./calendarReducer";
import {
  GET_CURRENT_DATE,
  SET_DAYS,
  PREV_MONTH,
  NEXT_MONTH,
  JUMP_TO,
  ADD_EVENT,
  EDIT_EVENT,
  DELETE_EVENT,
  SET_LOADING
} from "./types";

const CalendarState = props => {
  const initialState = {
    currentDayOfWeek: null,
    currentDayOfMonth: null,
    currentMonth: null,
    currentYear: null,
    currentDate: {},
    days: [],
    events: [],
    loading: false
  };

  const [state, dispatch] = useReducer(CalendarReducer, initialState);

  // Get current date
  const getCurrentDate = () => {
    // Today's date
    const date = new Date();
    const currDayOfWeek = date.getDay();
    const currDayOfMonth = date.getDate();
    const currMonth = date.getMonth();
    const currYear = date.getFullYear();

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

    // Find the starting day of the month
    let startingDay = ((currDayOfWeek - (currDayOfMonth - 1)) % 7) + 7;

    setDays(startingDay, months[currMonth], currYear);

    dispatch({
      type: GET_CURRENT_DATE,
      payload: {
        currDayOfWeek,
        currDayOfMonth,
        currMonth: months[currMonth],
        currYear
      }
    });
  };

  // Set days
  const setDays = (sd, m, y) => {
    let emptyDaysTop = sd - 1;
    let emptyDaysBottom = 0;
    let totalDaysOfMonth = 0;

    if (
      [
        "January",
        "March",
        "May",
        "July",
        "August",
        "October",
        "December"
      ].includes(m)
    ) {
      emptyDaysBottom = 7 - ((sd + 30) % 7);
      totalDaysOfMonth = 31;
    } else if (["April", "June", "September", "November"].includes(m)) {
      emptyDaysBottom = 7 - ((sd + 29) % 7);
      totalDaysOfMonth = 30;
    } else {
      if ((y % 4 === 0 && y % 100 !== 0) || y % 400 === 0) {
        // Leap year
        emptyDaysBottom = 7 - ((sd + 28) % 7);
        totalDaysOfMonth = 29;
      } else {
        // Not a leap year
        emptyDaysBottom = 7 - ((sd + 27) % 7);
        totalDaysOfMonth = 28;
      }
    }

    // Create days array
    let daysArr = [];
    for (let i = 0; i < emptyDaysTop; i++) {
      let dayObj = { visible: false, dayOfMonth: 0, events: null };
      daysArr.push(dayObj);
    }
    for (let i = 1; i <= totalDaysOfMonth; i++) {
      let dayObj = { visible: true, dayOfMonth: i, events: null };
      daysArr.push(dayObj);
    }
    for (let i = 0; i < emptyDaysBottom; i++) {
      let dayObj = { visible: false, dayOfMonth: 0, events: null };
      daysArr.push(dayObj);
    }

    dispatch({
      type: SET_DAYS,
      payload: daysArr
    });
  };

  // Get previous month
  const prevMonth = () => {
    console.log("Previous month");
  };

  // Get next month
  const nextMonth = () => {
    console.log("Next month");
  };

  // Jump to date
  const jumpTo = (month, year) => {
    console.log("Jump to " + month + " " + year);
  };

  // Add event
  const addEvent = () => {
    console.log("Add event");
  };

  // Edit event
  const editEvent = () => {
    console.log("Edit event");
  };

  // Delete event
  const deleteEvent = () => {
    console.log("Delete event");
  };

  // Set Loading
  const setLoading = () => {
    dispatch({
      type: SET_LOADING
    });
  };

  return (
    <CalendarContext.Provider
      value={{
        currentDayOfWeek: state.currentDayOfWeek,
        currentDayOfMonth: state.currentDayOfMonth,
        currentMonth: state.currentMonth,
        currentYear: state.currentYear,
        currentDate: state.currentDate,
        days: state.days,
        events: state.events,
        loading: state.events,
        getCurrentDate,
        prevMonth,
        nextMonth,
        jumpTo,
        addEvent,
        editEvent,
        deleteEvent,
        setLoading
      }}
    >
      {props.children}
    </CalendarContext.Provider>
  );
};

export default CalendarState;
