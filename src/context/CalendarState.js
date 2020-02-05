import React, { useReducer } from "react";
import CalendarContext from "./calendarContext";
import CalendarReducer from "./calendarReducer";
import {
  GET_CURRENT_DATE,
  SET_DAYS,
  PREV_MONTH,
  NEXT_MONTH,
  TOGGLE_DETAIL_SB,
  TOGGLE_EVENTS_SB,
  TOGGLE_NEW_EVENT_SB,
  SET_DAY_DETAIL,
  ADD_EVENT,
  EDIT_EVENT,
  DELETE_EVENT,
  SET_LOADING
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
    events: [
      {
        id: 0,
        date: "2020-March-11",
        type: "birthday",
        description: "MCA's birthday.",
        reminder: "1 day ago"
      },
      {
        id: 1,
        date: "2020-May-19",
        type: "anniversary",
        description: "Gençlik ve Spor Bayramı",
        reminder: null
      },
      {
        id: 2,
        date: "2020-July-10",
        type: "deadline",
        description: "İş",
        reminder: "1 week ago"
      },
      {
        id: 3,
        date: "2020-February-12",
        type: "other",
        description: "Market alışverişi",
        reminder: "an hour ago"
      },
      {
        id: 4,
        date: "2020-February-12",
        type: "birthday",
        description: "X doğum günü",
        reminder: null
      },
      {
        id: 5,
        date: "2020-February-12",
        type: "anniversary",
        description: "Y yıldönümü",
        reminder: null
      },
      {
        id: 6,
        date: "2020-February-12",
        type: "deadline",
        description: "proje teslim",
        reminder: null
      }
    ],
    loading: false
  };

  const [state, dispatch] = useReducer(CalendarReducer, initialState);

  // Get current date
  const getCurrentDate = (year, month, date) => {
    const currDayOfMonth = date;
    const currMonth = month;
    const currYear = year;

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
    let startingDay = new Date(currYear, currMonth, 1).getDay();

    setDays(startingDay, months[currMonth], currYear);

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
      let dayObj = {
        visible: false,
        dayOfMonth: 0,
        date: `${y}-${m}-0`,
        events: null
      };
      daysArr.push(dayObj);
    }
    for (let i = 1; i <= totalDaysOfMonth; i++) {
      let dayObj = {
        visible: true,
        dayOfMonth: i,
        date: `${y}-${m}-${i}`,
        events: null
      };
      daysArr.push(dayObj);
    }
    for (let i = 0; i < emptyDaysBottom; i++) {
      let dayObj = {
        visible: false,
        dayOfMonth: 0,
        date: `${y}-${m}-0`,
        events: null
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
    if (state.currentMonth === 0) {
      getCurrentDate(state.currentYear - 1, 11, 1);

      dispatch({
        type: PREV_MONTH,
        payload: { month: 11, year: state.currentYear - 1 }
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
    if (state.currentMonth === 11) {
      getCurrentDate(state.currentYear + 1, 0, 1);

      dispatch({
        type: NEXT_MONTH,
        payload: { month: 0, year: state.currentYear + 1 }
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
  const addEvent = () => {
    console.log("Add event");
  };

  // Edit event
  const editEvent = id => {
    console.log("Edit event " + id);
  };

  // Delete event
  const deleteEvent = id => {
    console.log("Delete event " + id);
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
        currentDayOfMonth: state.currentDayOfMonth,
        currentMonth: state.currentMonth,
        currentYear: state.currentYear,
        days: state.days,
        events: state.events,
        dayDetail: state.dayDetail,
        detailSidebarToggled: state.detailSidebarToggled,
        eventsSidebarToggled: state.eventsSidebarToggled,
        newEventSidebarToggled: state.newEventSidebarToggled,
        loading: state.events,
        getCurrentDate,
        prevMonth,
        nextMonth,
        jumpTo,
        toggleDetailSidebar,
        toggleEventsSidebar,
        toggleNewEventSidebar,
        setDayDetail,
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
