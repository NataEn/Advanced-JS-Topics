import React from "react";
import "./DaysWeather.css";
function HourlyState({ description, temp }) {
  return (
    <span>
      {description}, {temp}
    </span>
  );
}
export default function DaysWeather({ weather }) {
  return (
    <div className="days">
      <div>Days Weather</div>
      <span>{weather.day}</span>
      {weather.forecast.map((item) => (
        <HourlyState description={item.description} temp={item.temp} />
      ))}
    </div>
  );
}
