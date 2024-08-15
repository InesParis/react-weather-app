import React from "react";
import SearchEngine from "./SearchEngine";
import "./WeatherData.css";
import ReactAnimatedWeather from "react-animated-weather";
export default function WeatherData() {
  return (
    <div class="weather-app-data">
      <div>
        <h1 class="weather-app-city">San Francisco</h1>
        <p class="weather-app-detail ">
          <span>Thur 15 Aug 2024 15:19</span>
          <br />
          <span>Scattered cloud</span> <br />
          Humidity: <strong>10%</strong>, Wind: <strong>3km/h </strong>
        </p>
      </div>
      <main>
        <div class="weather-app-temperature-container">
          <div class="temperature">18</div>
          <ReactAnimatedWeather
            class="current-weather-icon"
            icon="CLEAR_DAY"
            color="BLACK"
            size={50}
            animate={true}
          />
        </div>
      </main>
    </div>
  );
}
