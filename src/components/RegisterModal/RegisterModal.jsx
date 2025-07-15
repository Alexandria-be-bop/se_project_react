import { useState } from "react";

import "./RegisterModal.css";
const RegisterModal = ({
  handleRegistration,
  activeModal,
  closeActiveModal,
  onLoginClick,
}) => {
  // The inputs are controlled via a single piece of state: an object
  // object called `data`. 
  const [data, setData] = useState({
    email: "",
    password: "",
    name: "",
    avatar: "",
  });

  const onRegistration = (event) => {
    event.preventDefault();
    handleRegistration(data);
  };
  // This function fires whenever an input is changed, and it updates
  // the value of the changed input. 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className={`modal ${activeModal ? "modal_opened" : ""}`}>
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
        <h2 className="modal__title">Sign Up</h2>
        <form
          className="modal__form"
          onSubmit={onRegistration}
        >
          <label
            htmlFor="email"
            className="modal__label"
          >
            Email*
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            value={data.email}
            onChange={handleChange}
            className="modal__input"
            required
          />
          <label
            htmlFor="password"
            className="modal__label"
          >
            Password*
          </label>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="Password"
            value={data.password}
            onChange={handleChange}
            className="modal__input"
            required
          />
          <label
            htmlFor="name"
            className="modal__label"
          >
            Name*
          </label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Name"
            value={data.username}
            onChange={handleChange}
            className="modal__input"
            required
          />

          <label
            htmlFor="avatar"
            className="modal__label"
          >
            Avatar URL*
          </label>
          <input
            id="avatar"
            type="url"
            name="avatar"
            placeholder="Avatar URL"
            value={data.avatarUrl}
            onChange={handleChange}
            className="modal__input"
            required
          />
          <div className="modal__button-container">
            <button
              onClick={onRegistration}
              type="submit"
              className="modal__submit"
            >
              Sign Up
            </button>
            <button
              onClick={onLoginClick}
              type="button"
              className="modal__button modal__button-gray"
            >
              or Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterModal;
