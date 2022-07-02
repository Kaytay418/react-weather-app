import React from "react";

export default function FormattedDate(props) {
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
  let hours = (props.date.getHours() + 24) % 12 || 12;
  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let dayOrNight = "AM";
  if (props.date.getHours() < 13) {
    dayOrNight = "AM";
  }
  if (props.date.getHours() > 12) {
    dayOrNight = "PM";
  }
  return (
    <div>
      {day} {hours}:{minutes} {dayOrNight}
    </div>
  );
}
