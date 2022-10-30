import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./logo.svg";

export default function WeatherInfo() {
  return (
    <div>
      <h1>Kyiv</h1>
      <ul>
        <li>Local time</li>
        <li>sunny</li>
        <li>sunrise time: 6.00</li>
        <li>sunset time: 20.00</li>
        <div className="row">
          <div className="col-2">
            <img src={logo} />
          </div>
          <div className="col-2">11</div>
          <div className="col-2">
            <span>°C</span> <span>|</span> <span>°F</span>
          </div>
          <div className="col-4">
            <ul>
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
