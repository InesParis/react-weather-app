import React from "react";
import ReactAnimatedWeather from "react-animated-weather";
export default function WeatherIcon({ code }) {
  const codeMapping = {
    "clear-sky-day": "CLEAR_DAY",
    "clear-sky-night": "CLEAR_NIGHT",
    "few-clouds-day": "PARTLY_CLOUDY_DAY",
    "few-clouds-night": "PARTLY_CLOUDY_NIGHT",
    "broken-clouds-day": "CLOUDY",
    "broken-clouds-night": "CLOUDY",
    "shower-rain-day": "RAIN",
    "shower-rain-night": "RAIN",
    "rain-day": "RAIN",
    "rain-night": "RAIN",
    "snow-day": "SNOW",
    "snow-night": "SNOW",
    "mist-day": "FOG",
    "mist-nigh": "FOG",
  };
  const icon = codeMapping[code];
  return (
    <ReactAnimatedWeather icon={icon} color="BLACK" size={70} animate={true} />
  );
}
