import "./WeatherCard.css";
import { weatherBanners, defaultWeatherBanner } from "../../utils/constants";

function WeatherCard({ weatherData }) {
  const filteredWeatherBanner = weatherBanners.filter((option) => {
    return (
      option.day === weatherData.isDay &&
      option.condition === weatherData.condition
    );
  });

  let weatherBanner;

  if (filteredWeatherBanner.length === 0) {
    weatherBanner = defaultWeatherBanner[weatherData.isDay ? "day" : "night"];
  } else {
    weatherBanner = filteredWeatherBanner[0];
  }

  return (
    <section className="weather-card">
      <p className="weather-card__temp">{weatherData.temp.F} &deg; F</p>
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
