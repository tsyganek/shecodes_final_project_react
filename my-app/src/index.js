import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Weather from "./Weather.js";
import WeatherInfo from "./WeatherInfo.js";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Weather />
    <WeatherInfo />
  </React.StrictMode>
);
reportWebVitals();
