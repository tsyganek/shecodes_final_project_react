import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo.js";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Weather(props) {
  let [weather, setWeather] = useState({ ready: false });
  let [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log(response.data.weather[0].icon);
    setWeather({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      feelsLike: Math.round(response.data.main.feels_like),
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      country: response.data.sys.country,
      icon: response.data.weather[0].icon,
      sunrise: new Date(response.data.sys.sunrise * 1000),
      sunset: new Date(response.data.sys.sunset * 1000),
      visibility: response.data.visibility,
    });
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    let apiKey = `3861b1b0b27ee4c7422194339793d60e`;
    let units = `metric`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  if (weather.ready) {
    return (
      <div className="container">
        <form className="form" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-6">
              <input
                className="searchField form-control"
                type="text"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-2">
              <button type="submit" class="btn btn-success">
                Submit
              </button>
            </div>
          </div>
        </form>
        <WeatherInfo data={weather} />
      </div>
    );
  } else {
    search();
    return (
      <div className="loading">
        <p>Loading...</p>
      </div>
    );
  }
}
