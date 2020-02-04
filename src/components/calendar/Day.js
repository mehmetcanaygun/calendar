import React from "react";

const Day = ({ day: { visible, dayOfMonth, events } }) => {
  const date = new Date();
  const today = date.getDate();

  let cn = "day";

  if (today === dayOfMonth) cn = "day current-day";
  if (!visible) cn = "day hidden";

  return <button className={cn}>{dayOfMonth}</button>;
};

export default Day;
