import React, { useState } from "react";
import "./SearchEngine.css";
export default function SearchEngine({ onCityChange }) {
  let [city, setCity] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    onCityChange(city);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
  return (
    <header>
      <div>
        <div class="title">Weather App</div>
        <form onSubmit={handleSubmit}>
          <input
            onChange={updateCity}
            type="search"
            placehorder="Enter a city"
            requiere
            id="search-form-input"
            class="search-form-input"
          />
          <input type="submit" value="Search" class="search-form-button" />
        </form>
      </div>
    </header>
  );
}
