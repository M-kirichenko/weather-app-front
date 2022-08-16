import { useState } from "react";
import { withAuthenticator } from "@aws-amplify/ui-react";
import CityInput from "../CityInput";
import WeatherInfo from "../WeatherInfo";
import api from "../../services/weatherDataApi";
import "./app.css";

const App = (props) => {
  const { jwtToken } = props.user.signInUserSession.idToken;
  localStorage.setItem("idToken", jwtToken);
  const [cityWeather, setCityWeather] = useState({});
  const [error, setError] = useState("");
  const cityWeatherHandler = async (city) => {
    try {
      const cityWeatherData = await api.getDataByCity(city);
      setCityWeather(cityWeatherData);
      setError("");
    } catch (err) {
      const { message } = err.response.data;
      message ? setError(message) : setError(err.response.data);
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
