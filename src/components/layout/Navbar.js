import React, { useContext } from "react";
import CalendarContext from "../../context/calendarContext";

const Navbar = () => {
  const calendarContext = useContext(CalendarContext);
  const {
    toggleNewEventSidebar,
    toggleEventsSidebar,
    toggleDetailSidebar
  } = calendarContext;

  return (
    <nav className="navbar">
      <div className="logo">
        <p>
          My<span>Calendar</span>{" "}
          <a
            href="https://github.com/mehmetcanaygun"
            target="_blank"
            rel="noopener noreferrer"
          >
            by MCA
          </a>
        </p>
      </div>
      <div className="button-group">
        {/* <button
          className="new-event-btn"
          onClick={() => {
            toggleEventsSidebar(true);
            toggleDetailSidebar(false);
            toggleNewEventSidebar(false);
          }}
        >
          <i className="fas fa-star"></i> My Events
        </button> */}
        <button
          className="new-event-btn"
          onClick={() => {
            toggleNewEventSidebar(true);
            toggleDetailSidebar(false);
            toggleEventsSidebar(false);
          }}
        >
          <i className="fas fa-plus"></i> New Event
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
