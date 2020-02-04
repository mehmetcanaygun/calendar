import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <p>
          My<span>Calendar</span>
        </p>
      </div>
      <div className="button-group">
        <button className="new-event-btn">
          <i className="fas fa-star"></i> My Events
        </button>
        <button className="new-event-btn">
          <i className="fas fa-plus"></i> New Event
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
