import React, { useState } from "react";
export default function WeatherTemperatureValue(props) {
  const [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheir");
  }
  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }
  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unit">
          ºC| {""}
          <a href="/" onClick={showFahrenheit}></a>
        </span>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(fahrenheit())}</span>
        <span className="unit">
          <a href="/" onClick={showCelsius}></a> {""}| ºF
        </span>
      </div>
    );
  }
}
