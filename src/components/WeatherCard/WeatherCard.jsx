import "./WeatherCard.css"
import sunnyDay from "../../assets/sunny-day.png"

function WeatherCard({ weatherData }) {
  return (
    <section className="weather-card">
      <p className="weather-card__temp">{weatherData.temp.F} &deg; F</p>
      <img src={sunnyDay} alt="Blue sky Yellow sun" className="weather-card__image" />
    </section>
  );
}

export default WeatherCard;
