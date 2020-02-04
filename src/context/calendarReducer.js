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

export default (state, action) => {
  switch (action.type) {
    case GET_CURRENT_DATE:
      return {
        ...state,
        currentDayOfWeek: action.payload.currDayOfWeek,
        currentDayOfMonth: action.payload.currDayOfMonth,
        currentMonth: action.payload.currMonth,
        currentYear: action.payload.currYear
      };
    case SET_DAYS:
      return {
        ...state,
        days: action.payload
      };
    default:
      return state;
  }
};
