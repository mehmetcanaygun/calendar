import React from "react";

const Day = ({ day: { visible, dayOfMonth, events } }) => {
  return (
    <button className={visible ? "day" : "day hidden"}>{dayOfMonth}</button>
  );
};

export default Day;
