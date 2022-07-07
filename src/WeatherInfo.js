import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="weatherInfo">
      <h1 className="text-center">{props.data.city}</h1>
      <ul>
        <li className="text-center mb-4">
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize description">
          {props.data.description}
        </li>
      </ul>
      <WeatherIcon code={props.data.icon} size={52} />
      <WeatherTemperature fahrenheit={props.data.temperature} />
      <div className="row mb-4 extras">
        <div className="col-5 humid">Humidity: {props.data.humidity}%</div>
        <div className="col-5 wind">
          Wind: {Math.round(props.data.wind * 2.23694)} mph
        </div>
      </div>
    </div>
  );
}
