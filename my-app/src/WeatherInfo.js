import React from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FriendlyDate from "./FriendlyDate.js";
import SunTime from "./SunTime.js";
import WeatherIcon from "./WeatherIcon.js";
import Temperature from "./Temperature.js";
import FeelsLike from "./FeelsLike.js";

export default function WeatherInfo(props) {
  console.log(props.data.id);
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
            <WeatherIcon icon={props.data.icon} />
          </div>
          <Temperature celcius={props.data.temperature} />
          <div className="col-3">
            <ul className="weatherData">
              <li>
                <FeelsLike celcius={props.data.feelslike} />
              </li>
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
