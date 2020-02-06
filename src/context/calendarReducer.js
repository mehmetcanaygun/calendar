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
  DELETE_EVENT,
  SET_EVENTS
} from "./types";

export default (state, action) => {
  switch (action.type) {
    case GET_CURRENT_DATE:
      return {
        ...state,
        currentDayOfMonth: action.payload.currDayOfMonth,
        currentMonth: action.payload.currMonth,
        currentYear: action.payload.currYear
      };
    case SET_DAYS:
      return {
        ...state,
        days: action.payload
      };
    case PREV_MONTH:
      return {
        ...state,
        currentMonth: action.payload.month,
        currentYear: action.payload.year
      };
    case NEXT_MONTH:
      return {
        ...state,
        currentMonth: action.payload.month,
        currentYear: action.payload.year
      };
    case TOGGLE_DETAIL_SB:
      return {
        ...state,
        detailSidebarToggled: action.payload
      };
    case TOGGLE_EVENTS_SB:
      return {
        ...state,
        eventsSidebarToggled: action.payload
      };
    case TOGGLE_NEW_EVENT_SB:
      return {
        ...state,
        newEventSidebarToggled: action.payload
      };
    case SET_DAY_DETAIL:
      return {
        ...state,
        dayDetail: action.payload
      };
    case ADD_EVENT:
      return {
        ...state,
        events: [...state.events, action.payload]
      };
    case DELETE_EVENT:
      return {
        ...state,
        events: state.events.filter(e => e.id !== action.payload)
      };
    case SET_EVENTS:
      return {
        ...state,
        events: action.payload
      };
    default:
      return state;
  }
};
