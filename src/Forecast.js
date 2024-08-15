import React from "react";
import ReactAnimatedWeather from "react-animated-weather";
import "./Forecast.css";
export default function Forecast() {
  return (
    <div className="weather-forecast">
      <div className="weather-forecast-item">
        <div className="weather-forecast-day">Mon</div>
        <ReactAnimatedWeather
          icon="CLOUDY"
          color="BLACK"
          size={40}
          animate={true}
        />
        <div className="weather-forecast-temperatures">19-25</div>
      </div>
      <div className="weather-forecast-item">
        <div className="weather-forecast-day">Tue</div>
        <ReactAnimatedWeather
          icon="RAIN"
          color="BLACK"
          size={40}
          animate={true}
        />
        <div className="weather-forecast-temperatures">20-27</div>
      </div>
      <div className="weather-forecast-item">
        <div className="weather-forecast-day">Wed</div>
        <ReactAnimatedWeather
          icon="SNOW"
          color="BLACK"
          size={40}
          animate={true}
        />
        <div className="weather-forecast-temperatures">28-35</div>
      </div>
      <div className="weather-forecast-item">
        <div className="weather-forecast-day">Thurs</div>
        <ReactAnimatedWeather
          icon="FOG"
          color="BLACK"
          size={40}
          animate={true}
        />
        <div className="weather-forecast-temperatures">35-36</div>
      </div>
      <div className="weather-forecast-item">
        <div className="weather-forecast-day">Fri</div>
        <ReactAnimatedWeather
          icon="WIND"
          color="BLACK"
          size={40}
          animate={true}
        />
        <div className="weather-forecast-temperatures">25-28</div>
      </div>
    </div>
  );
}
