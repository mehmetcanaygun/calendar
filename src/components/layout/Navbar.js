import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <p className="text-shadow">
          My<span>Calendar</span>
        </p>
      </div>
      <div className="button-group">
        <button className="new-event-btn box-shadow">New Event</button>
      </div>
    </nav>
  );
};

export default Navbar;
