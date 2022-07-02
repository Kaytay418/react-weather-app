import React from "react";
import FormattedDate from "./FormattedDate";
import Images from "./assets/images.js";

export default function WeatherInfo(props) {
  return (
    <div className="weatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <img src={Images[props.data.icon]} alt={props.data.description} />
          <span className="temp">{Math.round(props.data.temperature)}</span>
          <span className="unit">°F</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
