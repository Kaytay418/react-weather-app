import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Seattle" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.katie-latham.com"
            rel="noreferrer"
            target="_blank"
          >
            Katie Latham
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/Kaytay418/react-weather-app"
            rel="noreferrer"
            target="_blank"
          >
            open-sourced
          </a>{" "}
          on Github
        </footer>
      </div>
    </div>
  );
}
