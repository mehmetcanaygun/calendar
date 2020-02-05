import React, { useContext } from "react";
import CalendarContext from "../../context/calendarContext";

const NewEvent = () => {
  const calendarContext = useContext(CalendarContext);
  const {
    newEventSidebarToggled,
    toggleNewEventSidebar,
    dayDetail,
    currentMonth,
    currentYear,
    editEvent,
    deleteEvent
  } = calendarContext;

  return (
    <div
      className={
        newEventSidebarToggled
          ? "new-event-sidebar toggled box-shadow"
          : "new-event-sidebar"
      }
      style={{ top: window.scrollY }}
    >
      <button
        className="sidebar__close-btn"
        onClick={() => {
          toggleNewEventSidebar(false);
        }}
      >
        <i className="fas fa-times-circle"></i>
      </button>
    </div>
  );
};

export default NewEvent;
