import React, { useState, useEffect } from "react";
import SearchEngine from "./SearchEngine";
import WeatherData from "./WeatherData";
import axios from "axios";
export default function DisplayWeather() {
  let [city, setCity] = useState("San Francisco");
  let [temperature, setTemperature] = useState("18");
  let [condition, setCondition] = useState("");
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);

  let [ready, setReady] = useState(false);
  useEffect(() => {
    if (city) {
      let apiKey = "4f2360cc5d2fbf9f02a9o90ddad3f50t";
      let Url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
      axios.get(Url).then(handleResponse);
    }
  }, [city]);

  function handleResponse(response) {
    setTemperature(Math.round(response.data.temperature.current));
    setCondition(response.data.condition.description);
    setHumidity(response.data.temperature.humidity);
    setWind(response.data.wind.speed);

    setReady(true);
  }
  function handleCityChange(newCity) {
    setCity(newCity);
    setReady(false);
  }

  return (
    <div>
      <SearchEngine onCityChange={handleCityChange} />
      {ready ? (
        <WeatherData
          city={city}
          temperature={temperature}
          condition={condition}
          humidity={humidity}
          wind={wind}
        />
      ) : (
        "Loading..."
      )}
    </div>
  );
}
