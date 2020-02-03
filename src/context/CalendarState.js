import React, { useReducer } from "react";
import CalendarContext from "./calendarContext";
import CalendarReducer from "./calendarReducer";
import {
  GET_CURRENT_DATE,
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
    currentDay: null,
    currentMonth: null,
    currentYear: null,
    days: [],
    events: [],
    loading: false
  };

  const [state, dispatch] = useReducer(CalendarReducer, initialState);

  // Get current date
  const getCurrentDate = () => {
    console.log("Get current date");
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
        currentDay: state.currentDay,
        currentMonth: state.currentMonth,
        currentYear: state.currentYear,
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
