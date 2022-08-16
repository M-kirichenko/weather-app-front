import "./weatherInfo.css";

const WeatherInfo = ({ cityWeather }) => {
  const { temp, weatherType, windSpeed, pressure, humidity, city } =
    cityWeather;

  return (
    <div id="weatherInfoOuter">
      <h1>Results for City Name: {city}</h1>
      <div id="weatherInfoWrapper">
        <div className="weather-info-item">
          <p>
            <b>Temperature</b>: {temp} C
          </p>
          <p>
            <b>Weather Conditions:</b> {weatherType}
          </p>
        </div>
        <div className="weather-info-item">
          <p>
            <b>Wind</b>: {windSpeed}
          </p>
          <p>
            <b>Pressure:</b> {pressure}
          </p>
          <p>
            <b>Humidity:</b> {humidity}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;
