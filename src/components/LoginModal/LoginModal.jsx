import { Link } from "react-router-dom";
import { useState } from "react";
import "./LoginModal.css";

const LoginModal = ({ activeModal, closeActiveModal, selectedCard }) => {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
  e.preventDefault();
  onLogin(data); 
};

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className={`modal ${activeModal === "preview" ? "modal_opened" : ""}`}>
      {/* close button */}
      <div className="modal__content">
        <button
          onClick={closeActiveModal}
          className="modal__close-btn"
          type="button"
        >
          <img
            src="../src/assets/close-btn.svg"
            alt="x"
          />
        </button>

        {/* login form  */}
        <p className="">Please sign in</p>
        <form className="login__form">
          <label htmlFor="username">Login:</label>
          <input
            id="username"
            required
            name="username"
            type="text"
            value={data.username}
            onChange={handleChange}
          />
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            required
            name="password"
            type="password"
            value={data.password}
            onChange={handleChange}
          />
          <div className="login__button-container">
            <button
              type="submit"
              className="login__link"
            >
              Log in
            </button>
          </div>
        </form>

        <div className="login__signup">
          <p>Not a member yet?</p>
          <Link
            to="/register"
            className="signup__link"
          >
            Sign up here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
