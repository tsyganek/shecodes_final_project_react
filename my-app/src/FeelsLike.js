import React, { useState } from "react";
import "./index.css";

export default function FeelsLike(props) {
  const [unit, setUnit] = useState("celcius");

  if (unit === "celcius") {
    return <li>Feels like: {props.celcius}°</li>;
  } else {
    let farenheit = Math.round(props.celcius * 1.8 + 32);
    return <li>Feels like: {farenheit}°</li>;
  }
}
