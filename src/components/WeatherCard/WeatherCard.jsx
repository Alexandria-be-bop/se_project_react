import "./WeatherCard.css"
import sunnyDay from "../../assets/sunny-day.png"

function WeatherCard() {
  return (
    <section className="weather-card">
      <p className="weather-card__temp">75 &deg; F</p>
      <img src={sunnyDay} alt="Blue sky Yellow sun" className="weather-card__image" />
    </section>
  );
}

export default WeatherCard;
