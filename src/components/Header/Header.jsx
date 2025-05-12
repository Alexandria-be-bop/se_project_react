import "./Header.css";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import logo from "../../assets/logo.svg";
import avatar from "../../assets/avatar.png";

function Header({ onButtonClick, weatherData }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <img
        src={logo}
        alt="WTWR Logo"
        className="header__logo"
      ></img>
      <p className="header__time-and-place">
        {currentDate}, {weatherData.city}
      </p>
      <ToggleSwitch/>
      <button
        onClick={onButtonClick}
        type="button"
        className="header__add-clothes-btn"
      >
        + Add clothes
      </button>
      <div className="header__user-container">
        <p className="header__username">Terrence Tegegne</p>
        <img
          src={avatar}
          alt="Terrence Tegegne"
          className="header__avatar"
        />
      </div>
    </header>
  );
}

export default Header;
