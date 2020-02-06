import React, { useContext, useState } from "react";
import CalendarContext from "../../context/calendarContext";

const NewEvent = () => {
  const calendarContext = useContext(CalendarContext);
  const {
    newEventSidebarToggled,
    toggleNewEventSidebar,
    addEvent
  } = calendarContext;

  const [desc, setDesc] = useState("");
  const [date, setDate] = useState("");
  const [type, setType] = useState("other");
  const [reminder, setReminder] = useState("undefined");

  const clearInputs = () => {
    setDesc("");
    setDate("");
    setType("other");
    setReminder("undefined");
  };

  return (
    <div
      className={
        newEventSidebarToggled
          ? "new-event-sidebar toggled box-shadow"
          : "new-event-sidebar"
      }
      style={{
        top: window.scrollY
        // background: "url(./new-event-bg.jpg) no-repeat center center fixed"
      }}
    >
      <button
        className="sidebar__close-btn"
        onClick={() => {
          toggleNewEventSidebar(false);
        }}
      >
        <i className="fas fa-times-circle"></i>
      </button>
      <p className="new-event-sidebar__title">Add a new event</p>
      <label htmlFor="new-event-sidebar__description">Description</label>
      <input
        type="text"
        className="new-event-sidebar__description"
        value={desc}
        maxLength="30"
        onChange={e => {
          setDesc(e.target.value);
        }}
      />
      <label htmlFor="new-event-sidebar__date">Date</label>
      <input
        type="date"
        className="new-event-sidebar__date"
        value={date}
        onChange={e => {
          setDate(e.target.value);
        }}
      />
      <label htmlFor="new-event-sidebar__type">Event Type</label>
      <select
        className="new-event-sidebar__type"
        value={type}
        onChange={e => {
          setType(e.target.value);
        }}
      >
        <option value="birthday">Birthday</option>
        <option value="anniversary">Anniversary</option>
        <option value="deadline">Deadline</option>
        <option value="other">Other</option>
      </select>
      <label htmlFor="new-event-sidebar__reminder">Reminder</label>
      {/* <select
        className="new-event-sidebar__reminder"
        defaultValue="null"
        onChange={e => {
          setReminder(e.target.value);
        }}
      >
        <option value="Five minutes ago">Five minutes ago</option>
        <option value="a hour ago">An hour ago</option>
        <option value="a day ago">A day ago</option>
        <option value="a week ago">A week ago</option>
        <option value="undefined">None</option>
      </select> */}
      <button
        className="new-event-sidebar__add-btn"
        onClick={() => {
          if (desc === "" || date === "") {
            alert("Fill both of description and date fields.");
          } else {
            addEvent(desc, date, type, reminder);
            clearInputs();
          }
          toggleNewEventSidebar(false);
        }}
      >
        Add Event
      </button>
    </div>
  );
};

export default NewEvent;
