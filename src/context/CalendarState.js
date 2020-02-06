import React, { useReducer } from "react";
import CalendarContext from "./calendarContext";
import CalendarReducer from "./calendarReducer";
import uuid from "uuid";
import {
  GET_CURRENT_DATE,
  SET_DAYS,
  PREV_MONTH,
  NEXT_MONTH,
  TOGGLE_DETAIL_SB,
  TOGGLE_EVENTS_SB,
  TOGGLE_NEW_EVENT_SB,
  SET_DAY_DETAIL,
  SET_EVENTS
} from "./types";

const CalendarState = props => {
  const initialState = {
    currentDayOfMonth: null,
    currentMonth: null,
    currentYear: null,
    days: [],
    currentEvents: [],
    dayDetail: { today: null, events: [] },
    detailSidebarToggled: false,
    eventsSidebarToggled: false,
    newEventSidebarToggled: false,
    editEventSidebarToggled: false,
    editedEvent: {
      id: "",
      description: "",
      date: "",
      type: "",
      reminder: ""
    },
    events: []
  };

  const [state, dispatch] = useReducer(CalendarReducer, initialState);

  // Get current date
  const getCurrentDate = (year, month, date) => {
    const currDayOfMonth = date;
    const currMonth = month;
    const currYear = year;

    // Find the starting day of the month
    let startingDay = new Date(currYear, currMonth - 1, 1).getDay();
    setDays(startingDay, currMonth, currYear);

    dispatch({
      type: GET_CURRENT_DATE,
      payload: {
        currDayOfMonth,
        currMonth,
        currYear
      }
    });
  };

  // Set days
  const setDays = (sd, m, y) => {
    let emptyDaysTop = sd === 0 ? 6 : sd - 1;
    let emptyDaysBottom = 0;
    let totalDaysOfMonth = 0;

    if ([1, 3, 5, 7, 8, 10, 12].includes(m)) {
      emptyDaysBottom = 7 - ((sd + 30) % 7);
      totalDaysOfMonth = 31;
    } else if ([4, 6, 9, 11].includes(m)) {
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
    let newM = "";
    let newI = "";
    for (let i = 0; i < emptyDaysTop; i++) {
      let dayObj = {
        visible: false,
        dayOfMonth: 0,
        date: m < 10 ? `${y}-0${m}-${i}` : `${y}-${m}-${i}`
      };
      daysArr.push(dayObj);
    }
    for (let i = 1; i <= totalDaysOfMonth; i++) {
      if (m < 10) {
        newM = `0${m}`;
      } else {
        newM = m;
      }

      if (i < 10) {
        newI = `0${i}`;
      } else {
        newI = i;
      }

      let dayObj = {
        visible: true,
        dayOfMonth: i,
        date: `${y}-${newM}-${newI}`
      };
      daysArr.push(dayObj);
    }
    for (let i = 0; i < emptyDaysBottom; i++) {
      let dayObj = {
        visible: false,
        dayOfMonth: 0,
        date: m < 10 ? `${y}-0${m}-${i}` : `${y}-${m}-${i}`
      };
      daysArr.push(dayObj);
    }

    dispatch({
      type: SET_DAYS,
      payload: daysArr
    });
  };

  // Get previous month
  const prevMonth = () => {
    if (state.currentMonth === 1) {
      getCurrentDate(state.currentYear - 1, 12, 1);

      dispatch({
        type: PREV_MONTH,
        payload: { month: 12, year: state.currentYear - 1 }
      });
    } else {
      getCurrentDate(state.currentYear, state.currentMonth - 1, 1);

      dispatch({
        type: PREV_MONTH,
        payload: { month: state.currentMonth - 1, year: state.currentYear }
      });
    }
  };

  // Get next month
  const nextMonth = () => {
    if (state.currentMonth === 12) {
      getCurrentDate(state.currentYear + 1, 1, 1);

      dispatch({
        type: NEXT_MONTH,
        payload: { month: 1, year: state.currentYear + 1 }
      });
    } else {
      getCurrentDate(state.currentYear, state.currentMonth + 1, 1);

      dispatch({
        type: NEXT_MONTH,
        payload: { month: state.currentMonth + 1, year: state.currentYear }
      });
    }
  };

  // Jump to date
  const jumpTo = (month, year) => {
    getCurrentDate(year, month, 1);
  };

  // Set day detail
  const setDayDetail = (today, events) => {
    dispatch({
      type: SET_DAY_DETAIL,
      payload: { today, events }
    });
  };

  // Toggle Detail Sidebar
  const toggleDetailSidebar = condition => {
    dispatch({
      type: TOGGLE_DETAIL_SB,
      payload: condition
    });
  };

  // Toggle Events Sidebar
  const toggleEventsSidebar = condition => {
    dispatch({
      type: TOGGLE_EVENTS_SB,
      payload: condition
    });
  };

  // Toggle New Event Sidebar
  const toggleNewEventSidebar = condition => {
    dispatch({
      type: TOGGLE_NEW_EVENT_SB,
      payload: condition
    });
  };

  // Add event
  const addEvent = (desc, date, type, reminder) => {
    let newEvent = {
      id: uuid.v4(),
      date: date,
      type: type,
      description: desc,
      reminder: reminder
    };

    let events = [...state.events, newEvent];

    addEventsToLS(events);
    getEventsFromLS();

    getCurrentDate(state.currentYear, state.currentMonth, 1);
  };

  // Delete event
  const deleteEvent = id => {
    let events = state.events.filter(e => e.id !== id);
    addEventsToLS(events);
    getEventsFromLS();

    // dispatch({
    //   type: DELETE_EVENT,
    //   payload: id
    // });
  };

  // Get events from localstorage
  const getEventsFromLS = () => {
    const events = localStorage.getItem("events");
    if (events === null) {
      setEvents([]);
    } else {
      setEvents(JSON.parse(events));
    }
  };

  // Add event to localstorage
  const addEventsToLS = events => {
    localStorage.setItem("events", JSON.stringify(events));
  };

  // Set events
  const setEvents = events => {
    dispatch({
      type: SET_EVENTS,
      payload: events
    });
  };

  return (
    <CalendarContext.Provider
      value={{
        currentDayOfMonth: state.currentDayOfMonth,
        currentMonth: state.currentMonth,
        currentYear: state.currentYear,
        days: state.days,
        events: state.events,
        dayDetail: state.dayDetail,
        detailSidebarToggled: state.detailSidebarToggled,
        eventsSidebarToggled: state.eventsSidebarToggled,
        newEventSidebarToggled: state.newEventSidebarToggled,
        editEventSidebarToggled: state.editEventSidebarToggled,
        editedEvent: state.editedEvent,
        getCurrentDate,
        prevMonth,
        nextMonth,
        jumpTo,
        toggleDetailSidebar,
        toggleEventsSidebar,
        toggleNewEventSidebar,
        setDayDetail,
        addEvent,
        deleteEvent,
        getEventsFromLS,
        setEvents,
        addEventsToLS
      }}
    >
      {props.children}
    </CalendarContext.Provider>
  );
};

export default CalendarState;
