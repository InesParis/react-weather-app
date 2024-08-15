import React from "react";
import axios from "axios";
export default function Weather(props) {
  function showTemperature(response) {
    alert(
      `The weather in ${props.city} is ${response.data.temperature.current}`
    );
  }
  let url = `https://api.shecodes.io/weather/v1/current?query=${props.city}&key=4f2360cc5d2fbf9f02a9o90ddad3f50t`;
  axios.get(url).then(showTemperature);
}
