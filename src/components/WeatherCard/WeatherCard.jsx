import { useContext } from "react";
import "./WeatherCard.css";
import { weatherBanners, defaultWeatherBanner } from "../../utils/constants";
import CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnitContext";

// Filter weather conditons does not equal current
function WeatherCard({ weatherData }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const filteredWeatherBanner = weatherBanners.filter((option) => {
    return (
      option.day === weatherData.isDay &&
      option.condition === weatherData.condition
    );
  });

  let weatherBanner;

  // if the current weather has no banner display day/night default banner else show correct weather banner
  if (filteredWeatherBanner.length === 0) {
    weatherBanner = defaultWeatherBanner[weatherData.isDay ? "day" : "night"];
  } else {
    weatherBanner = filteredWeatherBanner[0];
  }

  // Display Body of the weather Banner
  return (
    <section className="weather-card">
      <p className="weather-card__temp">
        {weatherData?.temp[currentTemperatureUnit]}
        &deg; {currentTemperatureUnit}
      </p>
      <img
        src={weatherBanner?.url}
        alt={`banner showing ${weatherBanner?.condition} ${
          weatherBanner?.day ? "day" : "night"
        }`}
        className="weather-card__image"
      />
    </section>
  );
}

export default WeatherCard;
