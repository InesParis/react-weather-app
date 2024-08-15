import React from "react";

import "./WeatherData.css";
import ReactAnimatedWeather from "react-animated-weather";
export default function WeatherData({
  city,
  temperature,
  condition,
  humidity,
  wind,
}) {
  return (
    <div className="weather-app-data">
      <div>
        <h1 className="weather-app-city">{city}</h1>
        <p className="weather-app-detail ">
          <span>Thur 15 Aug 2024 15:19</span>
          <br />
          <span>{condition}</span> <br />
          Humidity: <strong>{humidity}%</strong> , Wind:
          <strong> {wind}km/h </strong>
        </p>
      </div>
      <main>
        <div className="weather-app-temperature-container">
          <div className="temperature">
            {temperature}
            <ReactAnimatedWeather
              className="current-weather-icon"
              icon="CLOUDY"
              color="BLACK"
              size={70}
              animate={true}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
