import React from "react";
import ForecastFormattedDate from "./ForecastFormattedDate";
import WeatherIcon from "./WeatherIcon";
import "./ForecastData.css";
export default function ForecastData({ forecast }) {
  return (
    <div className="forecast">
      <h3>5-Day Forecast</h3>
      <div className="forecast-horizontal">
        {forecast.map((day, index) => (
          <div key={index} className="forecast-day">
            <ForecastFormattedDate date={new Date(day.time * 1000)} />{" "}
            <div>
              <WeatherIcon code={day.condition.icon} size={40} />
            </div>
            <span className="forecast-temperature-maximum">
              {Math.round(day.temperature.maximum)}º |
            </span>
            <span className="forecast-temperature-minimum">
              {""} {Math.round(day.temperature.minimum)}º
            </span>
            <div className="forecast-condition">
              {day.condition.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
