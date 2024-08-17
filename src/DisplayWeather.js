import React, { useState, useEffect } from "react";
import SearchEngine from "./SearchEngine";
import WeatherData from "./WeatherData";
import FormattedDate from "./FormattedDate";

import axios from "axios";
export default function DisplayWeather() {
  let [city, setCity] = useState("San Francisco");
  let [temperature, setTemperature] = useState("");
  let [condition, setCondition] = useState("");
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [ready, setReady] = useState(false);
  let [date, setDate] = useState("");
  let [icon, setIcon] = useState("");

  useEffect(() => {
    if (city) {
      let apiKey = "4f2360cc5d2fbf9f02a9o90ddad3f50t";
      let Url = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}`;
      axios.get(Url).then(handleResponse);
    }
  }, [city]);

  function handleResponse(response) {
    const dailyData = response.data.daily[0];
    setTemperature(Math.round(dailyData.temperature.day));
    setCondition(dailyData.condition.description);
    setHumidity(dailyData.temperature.humidity);
    setWind(dailyData.wind.speed);
    setDate(new Date(dailyData.time * 1000)); // Convert UNIX timestamp to Date object
    setIcon(dailyData.condition.icon); // Set the icon URL

    setReady(true);
  }
  function handleCityChange(newCity) {
    setCity(newCity);
    setReady(false);
  }
  return (
    <div>
      <SearchEngine onCityChange={handleCityChange} />
      {date && <FormattedDate date={date} />}

      {ready ? (
        <WeatherData
          city={city}
          temperature={temperature}
          condition={condition}
          humidity={humidity}
          wind={wind}
          icon={icon}
        />
      ) : (
        "Loading..."
      )}
    </div>
  );
}
