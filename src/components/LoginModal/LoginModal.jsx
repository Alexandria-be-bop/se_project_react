import { useState, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./LoginModal.css";

export default function LoginModal({
  activeModal,
  closeActiveModal,
  handleLogin,
  newUserRegistration,
}) {
  const [data, setData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(data);
    setData({ email: "", password: "" });
  };

  // clear fields when not active
  useEffect(() => {
    if (!activeModal) {
      setData({ email: "", password: "" });
    }
  }, [activeModal]);

  const isEmailValid = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isFormValid = isEmailValid(data.email) && data.password.trim();

  return (
    <ModalWithForm
      title="Log In"
      buttonText="Log In"
      altButtonText="or Sign Up"
      altButtonOnClick={newUserRegistration}
      activeModal={activeModal}
      closeActiveModal={closeActiveModal}
      onSubmit={handleSubmit}
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
    </ModalWithForm>
  );
}
