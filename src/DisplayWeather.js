import React, { useState } from "react";
import SearchEngine from "./SearchEngine";
import WeatherData from "./WeatherData";

export default function DisplayWeather() {
  const [city, setCity] = useState("San Francisco");

  function handleCityChange(newCity) {
    setCity(newCity);
  }

  return (
    <div>
      <SearchEngine onCityChange={handleCityChange} />
      <WeatherData city={city} />
    </div>
  );
}
