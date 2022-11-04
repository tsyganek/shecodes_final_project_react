import React, { useState } from "react";
import "./index.css";

export default function Temperature(props) {
  const [unit, setUnit] = useState("celcius");

  function showFarenheit(event) {
    // event.preventDefault();
    setUnit("farenheit");
  }

  function showCelcius(event) {
    // event.preventDefault();
    setUnit("celcius");
  }

  if (unit === "celcius") {
    return (
      <div>
        <div className="col-2">
          <span className="currentTemperature">{props.celcius}</span>
        </div>
        <div className="col-2">
          <div>
            <span className="degrees">°C</span>
            <span className="degrees">|</span>{" "}
            <span className="degrees">
              <a className="degreeLink" href="#" onClick={showFarenheit}>
                °F
              </a>
            </span>
          </div>
        </div>
      </div>
    );
  } else {
    let farenheit = Math.round(props.celcius * 1.8 + 32);
    return (
      <div>
        <div className="col-2">
          <span className="currentTemperature">{farenheit}</span>
        </div>
        <div className="col-2">
          <div>
            <span className="degrees">
              {" "}
              <a className="degreeLink" href="#" onClick={showCelcius}>
                °C
              </a>
            </span>
            <span className="degrees">|</span>{" "}
            <span className="degrees">°F</span>
          </div>
        </div>
      </div>
    );
  }
}
