import { useState } from "react";
import { withAuthenticator } from "@aws-amplify/ui-react";
import CityInput from "../CityInput";
import WeatherInfo from "../WeatherInfo";
import api from "../../services/weatherDataApi";
import "./app.css";

const App = () => {
  const [cityWeather, setCityWeather] = useState({});
  const [error, setError] = useState("");
  const cityWeatherHandler = async (city) => {
    try {
      const cityWeatherData = await api.getDataByCity(city);
      setCityWeather(cityWeatherData);
      setError("");
    } catch (err) {
      const { message } = err.response.data;
      setError(message);
    }
  };

  return (
    <div id="wrapper">
      <CityInput onSetCityWeatherHandler={cityWeatherHandler} />
      {!error && Object.keys(cityWeather).length > 0 ? (
        <WeatherInfo cityWeather={cityWeather} />
      ) : (
        <div style={{ color: "red" }}>{error}</div>
      )}
    </div>
  );
};

export default withAuthenticator(App);
