import React from "react";
export default function FomattedDate(props) {
  if (!props.date || isNaN(props.date.getTime())) {
    return null;
  }
  console.log("Date:", props.date);
  console.log("Hours:", props.date.getHours());
  console.log("Minutes:", props.date.getMinutes());
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.date.getDay()];
  let hours = props.date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return (
    <div>
      {day} {hours}:{minutes}
    </div>
  );
}
