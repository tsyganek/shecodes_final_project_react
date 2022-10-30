import React from "react";
import WeatherInfo from "./WeatherInfo.js";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Weather() {
  return (
    <div className="container">
      <form className="form">
        <div className="row">
          <div className="col-6">
            <input className="searchField form-control" type="text" />
          </div>
          <div className="col-2">
            <button type="submit" class="btn btn-success">
              Submit
            </button>
          </div>
        </div>
      </form>
      <WeatherInfo />
    </div>
  );
}
