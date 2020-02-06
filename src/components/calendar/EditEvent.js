// import React, { useContext, useState } from "react";
// import CalendarContext from "../../context/calendarContext";

// const EditEvent = () => {
//   const calendarContext = useContext(CalendarContext);
//   const {
//     editEventSidebarToggled,
//     toggleEditEventSidebar,
//     editedEvent,
//     saveEditedEvent,
//     clearEditedEvent
//   } = calendarContext;

//   // Empty event object
//   let ev = {
//     id: editedEvent.id,
//     description: editedEvent.description,
//     date: editedEvent.date,
//     type: editedEvent.type,
//     reminder: editedEvent.reminder
//   };

//   // onChange methods
//   const onEditDescChange = val => {
//     ev.description = val;
//   };
//   const onEditDateChange = val => {
//     ev.date = val;
//   };
//   const onEditTypeChange = val => {
//     ev.type = val;
//   };
//   const onEditReminderChange = val => {
//     ev.reminder = val;
//   };

//   return (
//     <div
//       className={
//         editEventSidebarToggled
//           ? "edit-event-sidebar toggled box-shadow"
//           : "edit-event-sidebar"
//       }
//       style={{
//         top: window.scrollY
//       }}
//     >
//       <button
//         className="sidebar__close-btn"
//         onClick={() => {
//           toggleEditEventSidebar(false);
//           clearEditedEvent();
//         }}
//       >
//         <i className="fas fa-times-circle"></i>
//       </button>
//       <p className="edit-event-sidebar__title text-shadow">Edit event</p>
//       <label htmlFor="edit-event-sidebar__description">Description</label>
//       <input
//         type="text"
//         className="edit-event-sidebar__description"
//         maxLength="30"
//         value={ev.description}
//         onChange={e => {
//           onEditDescChange(e.target.value);
//         }}
//       />
//       <label htmlFor="edit-event-sidebar__date">Date</label>
//       <input
//         type="date"
//         className="edit-event-sidebar__date"
//         value={ev.date}
//         onChange={e => {
//           onEditDateChange(e.target.value);
//         }}
//       />
//       <label htmlFor="edit-event-sidebar__type">Event Type</label>
//       <select
//         className="edit-event-sidebar__type"
//         value={ev.type}
//         onChange={e => {
//           onEditTypeChange(e.target.value);
//         }}
//       >
//         <option value="birthday">Birthday</option>
//         <option value="anniversary">Anniversary</option>
//         <option value="deadline">Deadline</option>
//         <option value="other">Other</option>
//       </select>
//       <label htmlFor="edit-event-sidebar__reminder">Reminder</label>
//       <select
//         className="edit-event-sidebar__reminder"
//         value={ev.reminder}
//         onChange={e => {
//           onEditReminderChange(e.target.value);
//         }}
//       >
//         <option value="Five minutes ago">Five minutes ago</option>
//         <option value="a hour ago">An hour ago</option>
//         <option value="a day ago">A day ago</option>
//         <option value="a week ago">A week ago</option>
//         <option value="null">None</option>
//       </select>
//       <button
//         className="edit-event-sidebar__edit-btn"
//         onClick={() => {
//           if (ev.description === "" || ev.date === "") {
//             alert("Fill both of description and date fields.");
//           } else {
//             saveEditedEvent(ev);
//             clearEditedEvent();
//           }
//           toggleEditEventSidebar(false);
//         }}
//       >
//         Edit Event
//       </button>
//     </div>
//   );
// };

// export default EditEvent;
