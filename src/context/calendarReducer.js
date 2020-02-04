import {
  GET_CURRENT_DATE,
  SET_DAYS,
  PREV_MONTH,
  NEXT_MONTH,
  SET_CURRENT_EVENTS,
  ADD_EVENT,
  EDIT_EVENT,
  DELETE_EVENT,
  SET_LOADING
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
    case SET_CURRENT_EVENTS:
      return {
        ...state,
        currentEvents: action.payload
      };
    default:
      return state;
  }
};
