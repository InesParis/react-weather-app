import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import "./ForecastData.css";
export default function ForecastData({ forecast }) {
  return (
    <div className="forecast">
      <h3>5-Day Forecast</h3>
      <div className="forecast-horizontal">
        {forecast.map((day, index) => (
          <div key={index} className="forecast-day">
            <FormattedDate date={new Date(day.time * 1000)} />{" "}
            <WeatherIcon code={day.condition.icon} size={50} />
            <div className="forecast-temperature">
              {Math.round(day.temperature.day)}°C
            </div>
            <div className="forecast-condition">
              {day.condition.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
