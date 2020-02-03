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

    setDays(currDayOfWeek, currDayOfMonth, currMonth + 1, currYear);

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
  const setDays = (dw, dm, m, y) => {
    // console.log(dw, dm, m, y);
    let emptyDaysTop = 0;
    let emptyDaysBottom = 0;
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
