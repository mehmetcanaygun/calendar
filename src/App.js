import React from "react";
import CalendarState from "./context/CalendarState";

import "./css/App.css";

function App() {
  return (
    <CalendarState>
      <div className="App">Hello</div>
    </CalendarState>
  );
}

export default App;
