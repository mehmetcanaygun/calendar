import React, { useContext } from "react";
import CalendarContext from "../../context/calendarContext";

const Day = ({ day: { visible, dayOfMonth, date } }) => {
  // Init calendar context
  const calendarContext = useContext(CalendarContext);
  const {
    events,
    setDayDetail,
    toggleDetailSidebar,
    toggleNewEventSidebar,
    toggleEventsSidebar
  } = calendarContext;

  let todaysEvents = [];

  // Loop through all the events and if event's date and today's date match, push them in today's events
  events.map(event => {
    if (date === event.date) {
      todaysEvents.push(event);
    }
  });

  // Get date to highlight current day on calendar
  const d = new Date();
  const today = d.getDate();
  let cn = "day";

  if (today === dayOfMonth) cn = "day current-day";
  if (!visible) cn = "day hidden";

  return (
    <button
      className={cn}
      onClick={() => {
        setDayDetail(dayOfMonth, todaysEvents);
        toggleDetailSidebar(true);
        toggleNewEventSidebar(false);
        toggleEventsSidebar(false);
      }}
    >
      {dayOfMonth}
      <div>
        {todaysEvents.map((e, index) => (
          <span key={index} e={e}>
            {" "}
            <i className={`fas fa-star ${e.type}`}></i>
          </span>
        ))}
      </div>
    </button>
  );
};

export default Day;
