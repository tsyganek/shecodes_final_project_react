import React from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FriendlyDate from "./FriendlyDate.js";
import SunTime from "./SunTime.js";
import WeatherIcon from "./WeatherIcon.js";

export default function WeatherInfo(props) {
  console.log(props.data.icon);
  return (
    <div className="mainWeatherBlock">
      <h1 className="cityName">
        {props.data.city}, {props.data.country}
      </h1>
      <ul>
        <li classname="localTime">
          <b>
            <FriendlyDate date={props.data.date} />
          </b>
        </li>
        <li className="currentWeather">{props.data.description}</li>
        <li className="sunrise">
          sunrise time: <SunTime date={props.data.sunrise} />
        </li>
        <li className="sunset">
          sunset time: <SunTime date={props.data.sunset} />
        </li>
        <div className="row weatherBlock">
          <div className="col-3">
            <WeatherIcon date={props.data.icon} />
          </div>
          <div className="col-2">
            <span className="currentTemperature">{props.data.temperature}</span>
          </div>
          <div className="col-2">
            <div> </div>
            <span className="degrees">°C</span>{" "}
            <span className="degrees">|</span>{" "}
            <span className="degrees">°F</span>
          </div>
          <div className="col-3">
            <ul className="weatherData">
              <li>Feels like: {props.data.feelsLike}°</li>
              <li>Humidity: {props.data.humidity}%</li>
              <li>Wind: {props.data.wind}km/h</li>
              <li>Visibility: {props.data.visibility}</li>
            </ul>
          </div>
        </div>
      </ul>
    </div>
  );
}
