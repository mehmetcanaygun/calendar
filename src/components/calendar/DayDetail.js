import React, { useContext } from "react";
import CalendarContext from "../../context/calendarContext";

const DayDetail = () => {
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
  const calendarContext = useContext(CalendarContext);
  const {
    detailSidebarToggled,
    toggleDetailSidebar,
    dayDetail,
    currentMonth,
    currentYear,
    editEvent,
    deleteEvent
  } = calendarContext;

  return (
    <div
      className={
        detailSidebarToggled
          ? "detail-sidebar toggled box-shadow"
          : "detail-sidebar"
      }
      style={{
        top: window.scrollY,
        background: "url(./detail-bg.jpg) no-repeat center center fixed"
      }}
    >
      <button
        className="sidebar__close-btn"
        onClick={() => {
          toggleDetailSidebar(false);
        }}
      >
        <i className="fas fa-times-circle"></i>
      </button>
      <p className="detail-sidebar__date text-shadow">{`${months[currentMonth]} ${dayDetail.today}, ${currentYear}`}</p>
      <ul className="detail-sidebar__events">
        {dayDetail.events.map(event => (
          <li className="text-shadow" key={event.id}>
            {event.description}
            <button
              className="delete-event-btn"
              onClick={() => {
                deleteEvent(event.id);
              }}
            >
              <i className="fas fa-trash"></i>
            </button>
            <button
              className="edit-event-btn"
              onClick={() => {
                editEvent(event.id);
              }}
            >
              <i className="fas fa-pencil-alt"></i>
            </button>
          </li>
        ))}
      </ul>
      <a
        href={`https://en.wikipedia.org/wiki/${months[currentMonth]}_${dayDetail.today}`}
        target="_blank"
        className="detail-sidebar__link"
      >
        On this day in history
      </a>
    </div>
  );
};

export default DayDetail;
