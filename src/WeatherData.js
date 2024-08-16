import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperatureValue from "./WeatherTemperatureValue";
import "./WeatherData.css";
export default function WeatherData({
  city,
  temperature,
  condition,
  humidity,
  wind,
  date,
  icon,
}) {
  return (
    <div className="weather-app-data">
      <div>
        <h1 className="weather-app-city">{city}</h1>
        <p className="weather-app-detail ">
          <span>
            <FormattedDate date={date} />
          </span>
          <br />
          <span>{condition}</span> <br />
          Humidity: <strong>{humidity}%</strong> , Wind:
          <strong> {wind}km/h </strong>
        </p>
      </div>
      <main>
        <div className="weather-app-temperature-container">
          <div className="temperature">
            <WeatherIcon code={icon} />
          </div>
          <WeatherTemperatureValue
            className="weather-value"
            celsius={temperature}
          />
        </div>
      </main>
    </div>
  );
}
