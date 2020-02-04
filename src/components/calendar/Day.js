import React, { useContext } from "react";
import CalendarContext from "../../context/calendarContext";

const Day = ({ day: { visible, dayOfMonth, date }, toggleDay }) => {
  // Init calendar context
  const calendarContext = useContext(CalendarContext);
  const { events, setCurrentEvents } = calendarContext;

  let todaysEvents = [];

  // Loop through all the events and if event's date and today's date match, push them in today's events
  events.map(event => {
    if (date === event.date) {
      // console.log(
      //   "Bugün: " + date + ". Bugünde " + event.description + " var."
      // );
      todaysEvents.push(event);
    }
  });

  // Get date to highlight current day on calendar
  const d = new Date();
  const today = d.getDate();

  let cn = "day";

  if (today === dayOfMonth) cn = "day current-day";
  if (!visible) cn = "day hidden";

  // Toggle day detail box
  const toggleDetail = c => {
    toggleDay(c);
  };

  return (
    <button
      className={cn}
      onClick={() => {
        setCurrentEvents(todaysEvents);
        toggleDetail(true);
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
