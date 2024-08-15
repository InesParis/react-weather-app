import React, { useState } from "react";
import "./SearchEngine.css";
export default function SearchEngine() {
  let [city, setCity] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
  return (
    <div>
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
  );
}
