import { useState } from "react";
import "./cityInput.css";

const CityInput = ({ onSetCityWeatherHandler }) => {
  const [cityValue, setCityValue] = useState("");

  const setCityValueHandler = (value) => {
    setCityValue(value);
  };

  return (
    <div id="cityInput">
      <input
        type="text"
        placeholder="Enter city"
        value={cityValue}
        onInput={({ target }) => setCityValueHandler(target.value)}
      />
      <button onClick={() => onSetCityWeatherHandler(cityValue)}>Search</button>
    </div>
  );
};

export default CityInput;
