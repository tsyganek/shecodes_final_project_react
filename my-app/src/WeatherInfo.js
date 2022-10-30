import React from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./logo.svg";

export default function WeatherInfo() {
  return (
    <div className="mainWeatherBlock">
      <h1 className="cityName">Kyiv</h1>
      <ul>
        <li classname="localTime">Local time</li>
        <li className="currentWeather">sunny</li>
        <li className="sunset">sunrise time: 6.00</li>
        <li className="sunrise">sunset time: 20.00</li>
        <div className="row weatherBlock">
          <div className="col-3">
            <img src={logo} />
          </div>
          <div className="col-2">
            <span className="currentTemperature">11</span>
          </div>
          <div className="col-2">
            <span className="degrees">°C</span>{" "}
            <span className="degrees">|</span>{" "}
            <span className="degrees">°F</span>
          </div>
          <div className="col-3">
            <ul className="weatherData">
              <li>Feels like: 10°</li>
              <li>Humidity: 77%</li>
              <li>Wind: 0.89km/h</li>
              <li>Visibility: 1000</li>
            </ul>
          </div>
        </div>
      </ul>
    </div>
  );
}
