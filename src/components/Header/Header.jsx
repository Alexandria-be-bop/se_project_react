import "./Header.css";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import logo from "../../assets/logo.svg";
import avatar from "../../assets/avatar.png";
import { Link } from "react-router-dom";

function Header({
  onButtonClick,
  weatherData,
  isLoggedIn,
  newUserRegistration,
  onLoginClick,
}) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <Link to="/">
        <img
          src={logo}
          alt="WTWR Logo"
          className="header__logo"
        ></img>
      </Link>
      <p className="header__time-and-place">
        {currentDate}, {weatherData.city}
      </p>
      <ToggleSwitch />
      {/* hide these */}
      {isLoggedIn ? (
        <>
          <button
            onClick={onButtonClick}
            type="button"
            className="header__add-clothes-btn"
          >
            + Add clothes
          </button>
          <Link
            to="/profile"
            className="header__link"
          >
            <div className="header__user-container">
              <p className="header__username">Terrence Tegegne</p>
              <img
                src={avatar}
                alt="Terrence Tegegne"
                className="header__avatar"
              />
            </div>
          </Link>
        </>
      ) : (
        <div className="header__authenticate">
          <button
            onClick={newUserRegistration}
            type="button"
            className="header__button-auth"
          >
            Sign Up
          </button>
          <button
            onClick={onLoginClick}
            type="button"
            className="header__button-auth"
          >
            Log In
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;
