import React from "react";

export default function WeatherIcon(props) {
  return (
    <img src={`http://openweathermap.org/img/wn/${props.data.icon}@2x.png`} />
  );
}
