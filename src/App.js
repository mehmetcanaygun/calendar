import React from "react";
import CalendarState from "./context/CalendarState";
import Navbar from "./components/layout/Navbar";
import Calendar from "./components/calendar/Calendar";

import "./css/App.css";

function App() {
  return (
    <CalendarState>
      <div className="App">
        <Navbar />
        <div className="container">
          <Calendar />
        </div>
      </div>
    </CalendarState>
  );
}

export default App;
