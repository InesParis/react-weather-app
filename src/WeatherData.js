import React from "react";

import "./WeatherData.css";
import ReactAnimatedWeather from "react-animated-weather";
export default function WeatherData({ city }) {
  return (
    <div class="weather-app-data">
      <div>
        <h1 class="weather-app-city">{city}</h1>
        <p class="weather-app-detail ">
          <span>Thur 15 Aug 2024 15:19</span>
          <br />
          <span>Scattered cloud</span> <br />
          Humidity: <strong>10%</strong>, Wind: <strong>3km/h </strong>
        </p>
      </div>
      <main>
        <div class="weather-app-temperature-container">
          <div class="temperature">
            18
            <ReactAnimatedWeather
              class="current-weather-icon"
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
