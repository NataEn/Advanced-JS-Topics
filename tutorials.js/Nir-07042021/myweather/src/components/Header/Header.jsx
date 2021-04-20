import React from "react";
import "./Header.css";

export default function Header({
  items,
  description,
  temp,
  icon,
  description2,
}) {
  console.log(items.weather[0].description, items.weather[0].icon);
  return (
    <div className="header">
      Header component{" "}
      <span>
        {description},{temp}, icon: {icon},description2: {description2}
      </span>
    </div>
  );
}
