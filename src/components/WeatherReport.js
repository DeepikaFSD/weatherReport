import PropTypes from 'prop-types';

const WeatherReport = ({ weatherData ,units }) => {
  return (
    <div className="weather-report">
      <h2 className="big">{weatherData.location}</h2>
      <h3>
        {weatherData.conditions}|{weatherData.feels_like}
      </h3>

      <img src={weatherData.icon} alt="cloud"></img>

      <div className="temperature">
        <div>
          <p>CURRENT TEMPERATURE</p>
          <h2>{weatherData.temp}&deg;{units}</h2>
        </div>
        <div>
          <p>MAXIMUM TEMPERATURE</p>
          <h2>{weatherData.temp_max}&deg;{units}</h2>
        </div>
        <div>
          <p>MINIMUM TEMPERATURE</p>
          <h2>{weatherData.temp_min}&deg;{units}</h2>
        </div>
      </div>
      <div className="wind">
        <div>
          <p>WIND SPEED</p>
          <h2>{weatherData.wind_speed} meter/sec</h2>
        </div>
        <div>
          <p>WIND DIRECTION</p>
          <h2>{weatherData.wind_direction} degrees</h2>
        </div>
      </div>
      <div className="pressure">
        <div>
          <p>PRESSURE</p>
          <h2>{weatherData.pressure} hpa</h2>
        </div>
        <div>
          <p>HUMIDITY</p>
          <h2>{weatherData.humidity} %</h2>
        </div>
      </div>
    </div>
  );
};
WeatherReport.propTypes = {
  weatherData: PropTypes.shape({
    //location: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    conditions: PropTypes.string.isRequired,
    temp: PropTypes.number.isRequired,
    temp_max: PropTypes.number.isRequired,
    temp_min: PropTypes.number.isRequired,
    feels_like: PropTypes.number.isRequired,
    wind_speed: PropTypes.number.isRequired,
    wind_direction: PropTypes.number.isRequired,
    pressure: PropTypes.number.isRequired,
    humidity: PropTypes.number.isRequired
  })
};
export default WeatherReport;
