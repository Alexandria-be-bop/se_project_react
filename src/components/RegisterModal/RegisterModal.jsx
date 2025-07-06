import { Link } from "react-router-dom";
import { useState } from "react";

import "./RegisterModal.css";
const RegisterModal = ({
  handleRegistration,
  activeModal,
  closeActiveModal,
  newUserRegistration,
  isOpen,
}) => {
  // The inputs are controlled via a single piece of state: an object
  // object called `data`. This lets us avoid writing separate change
  // handlers for each input.
  const [data, setData] = useState({
    email: "",
    password: "",
    name: "",
    avatarUrl: "",
  });

  const onRegistration = (event) => {
    event.preventDefault();
    handleRegistration;
  };
  // This function fires whenever an input is changed, and it updates
  // the value of the changed input. Note that the keys of this
  // object match the name attributes of the corresponding inputs.
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__content ">
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
        <p className="register__welcome">Please register.</p>
        <form
          className="register__form"
          onSubmit={onRegistration}
        >
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            name="email"
            type="email"
            value={data.email}
            onChange={handleChange}
          />
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            name="password"
            type="password"
            value={data.password}
            onChange={handleChange}
          />
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            name="name"
            type="text"
            value={data.username}
            onChange={handleChange}
          />

          <label htmlFor="avatarUrl">Avatar URL:</label>
          <input
            id="avatarUrl"
            name="avatarUrl"
            type="url"
            value={data.avatarUrl}
            onChange={handleChange}
          />
          <div className="register__button-container">
            <button
              type="submit"
              className="register__link"
            >
              Sign up
            </button>
          </div>
        </form>
        <div className="register__signin">
          <p>Already a member?</p>
          <Link
            to="login"
            className="register__login-link"
          >
            Log in here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;
