import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";
import "./Forecast.css";

export default function Forecast({ city }) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }
  if (loaded) {
    console.log(forecast);
    return (
      <div>
        <div className="WeatherForecast-day">Monday</div>
        <WeatherIcon code="clear-sky-day" />
        <div className="WeatherForecast-temperatures">
          <span className="WeatherForecast-temperature-max">
            {Math.round(forecast[0].temperature.maximum)}º
          </span>
          <span className="WeatherForecast-temperature-min">
            {" "}
            {Math.round(forecast[0].temperature.minimum)}º
          </span>
        </div>
      </div>
    );
  } else {
    let apiKey = `4f2360cc5d2fbf9f02a9o90ddad3f50t`;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }
}
