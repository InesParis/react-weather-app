import React from "react";
export default function ForecastFomattedDate(props) {
  if (!props.date || isNaN(props.date.getTime())) {
    // If date is not valid, return null or a placeholder
    return null;
  }
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let day = days[props.date.getDay()];

  return <div>{day}</div>;
}
