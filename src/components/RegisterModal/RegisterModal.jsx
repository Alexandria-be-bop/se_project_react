import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./RegisterModal.css";

export default function RegisterModal({
  handleRegistration,
  activeModal,
  closeActiveModal,
  onLoginClick,
}) {
  const [data, setData] = useState({
    email: "",
    password: "",
    name: "",
    avatar: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const onRegistration = (e) => {
    e.preventDefault();
    handleRegistration(data);
    setData({ email: "", password: "", name: "", avatar: "" });
  };

  const isEmailValid = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isAvatarValid = (avatar) => {
    try {
      new URL(avatar);
      return true;
    } catch {
      return false;
    }
  };

  const isFormValid =
    isEmailValid(data.email) &&
    data.password.trim() &&
    data.name.trim() &&
    isAvatarValid(data.avatar);

  return (
    <ModalWithForm
      title="Sign Up"
      buttonText="Sign Up"
      altButtonText="or Log In"
      altButtonOnClick={onLoginClick}
      activeModal={activeModal}
      closeActiveModal={closeActiveModal}
      onSubmit={onRegistration}
      disabled={!isFormValid}
    >
      <label
        htmlFor="email"
        className="modal__label"
      >
        Email*
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          value={data.email}
          onChange={handleChange}
          className="modal__input"
          required
        />
      </label>

      <label
        htmlFor="password"
        className="modal__label"
      >
        Password*
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          value={data.password}
          onChange={handleChange}
          className="modal__input"
          required
        />
      </label>

      <label
        htmlFor="name"
        className="modal__label"
      >
        Name*
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Name"
          value={data.name}
          onChange={handleChange}
          className="modal__input"
          required
          maxLength={30}
        />
      </label>

      <label
        htmlFor="avatar"
        className="modal__label"
      >
        Avatar URL*
        <input
          id="avatar"
          name="avatar"
          type="url"
          placeholder="Avatar URL"
          value={data.avatar}
          onChange={handleChange}
          className="modal__input"
          required
        />
      </label>
    </ModalWithForm>
  );
}
